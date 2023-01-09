const sen = require("./practice2");
const os = require("os");
const fs = require("fs");

fs.writeFile(
  "./content/content/subfolder/practice.txt",
  `${sen} ${os.userInfo().username}`,
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("additional assignment complete");
  }
);

console.log(sen);
