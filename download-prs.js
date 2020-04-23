const { Octokit } = require('@octokit/rest');
const fs = require('fs-extra');
const path = require('path');
const { throttling } = require("@octokit/plugin-throttling");
const MyOctokit = Octokit.plugin(throttling);
const octokit = new MyOctokit({
  auth: 'token ' + process.env.GH_TOKEN,
  throttle: {
    onRateLimit: (retryAfter, options) => {
      octokit.log.warn(
        `Request quota exhausted for request ${options.method} ${options.url}`
      );

      if (options.request.retryCount === 0) {
        // only retries once
        console.log(`Retrying after ${retryAfter} seconds!`);
        return true;
      }
    },
    onAbuseLimit: (retryAfter, options) => {
      // does not retry, only logs a warning
      octokit.log.warn(
        `Abuse detected for request ${options.method} ${options.url}`
      );
    }
  }
});

async function download(owner, repo) {
  const allPrs = [];
  const baseDir = path.join('github', owner, repo, 'pull_requests');
  fs.ensureDirSync(baseDir);

  const per_page = 100;
  let page = 1;
  while (true) {
    const { data: pullRequests } = await octokit.pulls.list({ owner, repo, state: 'all', page, per_page });
    allPrs.push(...pullRequests);
    console.log('Page', page, allPrs.length)

    if (pullRequests.length < per_page) {
      break;
    }
    page++;
  }

  fs.writeFileSync(path.join(baseDir, 'list.json'), JSON.stringify(allPrs, null, 2));
}

const split = process.argv[2].split('/');
download(split[0], split[1]);