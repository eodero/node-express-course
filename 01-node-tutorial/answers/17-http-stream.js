let http = require("http");
let fs = require("fs");

http
  .createServer(() => {
    // const text = fs.readFileSync("./content/content/subfolder/big.txt", "utf8");
    // res.end(text);
    const fileStream = fs.createReadStream(
      "./content/content/subfolder/big.txt",
      "utf8"
    );
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("open", (err) => {
      res.end(err);
    });
  })

  .listen(5000);
