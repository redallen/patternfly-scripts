const path = require('path');
const fs = require('fs');

function makeReleaseNotes(owner, repo) {
  const baseDir = path.resolve('github', owner, repo, 'pull_requests');
  const pullRequests = require(path.join(baseDir, 'list.json'));

  let notes = '';
  pullRequests
    .filter(pullRequest => pullRequest.merged_at)
    .sort(pullRequest => pullRequest.number)
    .forEach(pullRequest => {
      const breakingChanges = /# breaking change.*\r?\n([\s\S]*)/igm.exec(pullRequest.body);

      if (breakingChanges) {
        console.log(pullRequest.number);
        notes += `\n## ${pullRequest.title} [(#${pullRequest.number})](${pullRequest.html_url})`;
        notes += `\n${breakingChanges[1].replace(/\r\n/g, '\n').trim()}`;
        notes += '\n';
      }
    });

  fs.writeFileSync(path.join(baseDir, 'breaking-change-notes.md'), notes.trim());
}

const split = process.argv[2].split('/');
makeReleaseNotes(split[0], split[1]); 