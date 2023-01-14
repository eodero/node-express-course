fs = require("fs").promises;

const makeFile = async () => {
  try {
    await fs.writeFile(
      "./content/content/subfolder/practice2txt",
      "This is the first line\n"
    );
    for (let i = 2; i <= 10; i++) {
      await fs.writeFile(
        "./content/content/subfolder/practice2txt",
        `This is  line ${i}\n`,
        { flag: "a" }
      );
    }
    console.log("file written successfully");
  } catch (err) {
    console.log(err);
  }
};

makeFile();
