const { createReadStream } = require("fs");

const stream = createReadStream("./content/content/subfolder/big.txt", {
  highWaterMark: 90000,
});

//default 64kb
//last buffer - remainder
//highwaterMark - control size

//cont stream = createReadStream("./content/content/subfolder/big.txt", { highWaterMark: 90000 })
//cont stream = createReadStream("./content/content/subfolder/big.txt", { encoding: 'utf8' })

stream.on("data", (result) => {
  console.log(result);
});

stream.on("data", (result) => {
  console.log(result);
});
