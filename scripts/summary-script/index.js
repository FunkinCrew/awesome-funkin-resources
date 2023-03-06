// config: where to look
const CHECK_ORG = "FunkinCrew";
const CHECK_REPO = "funkin-resources";
const CHECK_FILE = "README.md";

// config: how far back to look (1 week, in milliseconds)
const CHECK_TIME = 1000. * 60. * 60. * 24. * 7.;
const CHECK_AMOUNT = 100; // probably too many (100 is the max without pagination though)

// config: how similar do lines need to be to not be additions?
const SIMILARITY_THRESHOLD = 0.3;

// config: wait time between PR requests (to avoid rate limts), in milliseconds
const DELAY_PER_REQUEST = 1300;

// dependencies: GitHub APIs, string similarity, filesystem
const { Octokit } = require("@octokit/rest");
const { throttling } = require("@octokit/plugin-throttling");
const octokit = new (Octokit.plugin(throttling))({
  userAgent: "fnf-resource",
  throttle: {
    onRateLimit: (retryAfter, options) => {
      console.warn(`request quota exhausted for request ${options.method} ${options.url}`);
      // retry twice after hitting a rate limit error, then give up
      if (options.request.retryCount <= 2) {
        console.log(`retrying after ${retryAfter} seconds`);
        return true;
      }
    },
    onSecondaryRateLimit: (retryAfter, options, octokit) => {
      // does not retry, only logs a warning
      console.warn(`secondary quota detected for request ${options.method} ${options.url}`);
    },
  },
});
const stringSimilarity = require("string-similarity");
const fs = require("fs");

// process a PR
async function processPull(info) {
  // get files of the PR
  const { data: files } = await octokit.rest.pulls.listFiles({
    owner: CHECK_ORG,
    repo: CHECK_REPO,
    pull_number: info.number,
  });

  // find added lines
  let linesAdded = [];
  for (const file of files) {
    // if not readme, ignore
    if (file.filename !== CHECK_FILE) continue;

    // split the diff into lines, find additions (+) and deletions (-)
    // but: for additions group the lines into blocks (for better reporting)
    const lines = file.patch.split("\n");
    const additions = [];
    const deletions = [];
    let lastAdditionBlock = [];
    let lastLineType = " ";
    for (const line of lines) {
      if (line[0] === "+") {
        if (lastLineType !== "+") {
          if (lastAdditionBlock.length > 0) additions.push(lastAdditionBlock);
          lastAdditionBlock = [];
        }
        lastAdditionBlock.push(line.substr(1)); // skip the +
      } else if (line[0] === "-") {
        deletions.push(line);
      }
      lastLineType = line[0];
    }
    if (lastAdditionBlock.length > 0) additions.push(lastAdditionBlock);

    // find *actual* additions; ones not too similar to a deletion
    const actualAdditions = additions.map(additionBlock => additionBlock.filter(addition => {
      if (deletions.length < 1) return true;

      // check against all deletions
      const match = stringSimilarity.findBestMatch(addition, deletions);

      // if no match or no good match found, it's an actual addition
      if (!match || !match.bestMatch) return true;
      if (match.bestMatch.rating <= SIMILARITY_THRESHOLD) return true;

      // otherwise there was a similar deletion so this line is most likely
      // just a correction; remove the similar line from deletions too
      deletions.splice(match.bestMatchIndex, 1);
      return false;
    })).filter(additionBlock => additionBlock.length > 0);
    linesAdded = linesAdded.concat(actualAdditions);
  }

  // return the actual additions (may be empty, check at callsite)
  return linesAdded;
}

const delay = time => new Promise(res => setTimeout(res, time));
(async () => {
  const output = [];

  // find recent PRs
  let { data: pulls } = await octokit.rest.pulls.list({
    owner: CHECK_ORG,
    repo: CHECK_REPO,
    state: "closed",
    sort: "updated",
    direction: "desc",
    per_page: CHECK_AMOUNT,
  });

  // ignore closed (not merged) PRs
  pulls = pulls.filter(pull => pull.merged_at);

  // ignore old PRs
  const now = Date.now();
  pulls = pulls.filter(pull => {
    const mergedAt = new Date(pull.merged_at);
    const timeDiff = now - mergedAt.getTime();
    return timeDiff <= CHECK_TIME;
  });

  // sort by merged_at (not just the "updated" field)
  pulls.sort((a, b) => new Date(b.merged_at).getTime() - new Date(a.merged_at).getTime());

  for (const pull of pulls) {
    // look at PR in more detail
    await delay(DELAY_PER_REQUEST);
    const linesAdded = await processPull(pull);
    if (!linesAdded) continue;
    if (linesAdded.length === 0) {
      console.log(pull.number, pull.title, pull.user.login, pull.merged_at);
      console.log("(SKIP: not an addition)");
      console.log("");
    } else {
      console.log(pull.number, pull.title, pull.user.login, pull.merged_at);
      console.log(linesAdded);
      console.log("");
      if (pull != null && pull.filter(e => e.trim().length > 0)) continue; // makes it so it won't create empty issues
      output.push(`- [PR #${pull.number}, "${pull.title}" by ${pull.user.login}](${pull.html_url}) merged at ${pull.merged_at}, added:\n`);
      for (let block of linesAdded) {
        block = block.filter(v => v.trim().length > 0); // exclude blank lines from appearing as empty list items
        output.push(`  - ${block.length} line${block.length == 1 ? "" : "s"}:\n`)
        for (let line of block) {
          // try to remove any indents and bullet points
          let trimmed = line.trim();
          if (trimmed.startsWith("-") || trimmed.startsWith("*")) trimmed = trimmed.substr(1);
          trimmed = trimmed.trim();
          output.push(`    - ${trimmed}\n`);
        }
      }
    }
  }
  await fs.promises.writeFile("output.md", output.join(""));
})();
