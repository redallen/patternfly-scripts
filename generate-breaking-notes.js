const path = require('path');
const fs = require('fs');

function makeReleaseNotes(owner, repo) {
  const baseDir = path.resolve('github', owner, repo, 'pull_requests');
  const pullRequests = require(path.join(baseDir, 'list.json'));

  const breakingChangeRegex = /## breaking change.*\r?\n([\s\S]*)/ig;
  let notes = '';
  pullRequests
    .filter(pullRequest => pullRequest.state === 'closed')
    .forEach(pullRequest => {
      const breakingChanges = breakingChangeRegex.exec(pullRequest.body);

      if (breakingChanges) {
        notes += `\n## Changes from [#${pullRequest.number}](${pullRequest.html_url})`;
        notes += `\n${breakingChanges[1].replace(/\r\n/g, '\n').trim()}`;
        notes += '\n';
      }
    })
  
  fs.writeFileSync(path.join(baseDir, 'breaking-change-notes.md'), notes.trim());
}

const split = process.argv[2].split('/');
makeReleaseNotes(split[0], split[1]);