const fs = require("fs");

const readFile = () => {
  fs.readFile("input.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("Error while reading file");
      return;
    }
    console.log(data);
  });
};

content = "The Replace Text";
const writeFile = () => {
  fs.writeFile("input.txt", content, (err) => {
    if (err) {
      console.log("Error while writing file");
      return;
    }
    console.log("Succesfully updated the file");
  });
};

readFile();

writeFile();
