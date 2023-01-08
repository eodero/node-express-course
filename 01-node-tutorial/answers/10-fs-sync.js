//synchronous
const { readFileSync, writeFileSync } = require("fs");
console.log("start");

const first = readFileSync("./content/content/first.txt", "utf8");
const second = readFileSync("./content/content/second.txt", "utf8");

// console.log(first, second);

writeFileSync(
  "./content/content/result-sync.txt",
  `Here is the result ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with the task");
console.log("starting the next one");
