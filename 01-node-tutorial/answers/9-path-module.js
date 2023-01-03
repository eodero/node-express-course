const path = require("path");

console.log(path.sep);

//join
const filePath = path.join("./content/content/", "subfolder", "test.txt");
console.log(filePath);

//basename - returns  path and content of last path folder
const base = path.basename(filePath);
console.log(base);

//resolve - accepts sequence of paths or path segments and resolve it into absolute path - import when app runs in different environments
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
