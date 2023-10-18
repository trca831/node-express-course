const { writeFile, readFile } = require("fs").promises;

writeFile("temp.txt", "Line 1")
  .then(() => {
    console.log("Line 1 has been written.");

    return writeFile("temp.txt", "Line 2");
  })
  .then(() => {
    console.log("Line 2 has been written.");

    return writeFile("temp.txt", "Line 3");
  })
  .then(() => {
    console.log("Line 3 has been written.");

    return readFile("temp.txt", "utf8");
  })
  .then((data) => {
    console.log("File content:\n", data);
  })
  .catch((error) => {
    console.log("An error occurred: ", error);
  });