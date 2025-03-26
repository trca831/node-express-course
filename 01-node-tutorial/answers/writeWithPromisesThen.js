const { writeFile, readFile } = require("fs").promises;

// Write the first line to temp.txt
writeFile("temp.txt", "Line 1: Hello, world!\n")
  .then(() => {
    console.log("Line 1 written.");
    // Write the second line
    return writeFile("temp.txt", "Line 2: This is a test.\n", { flag: "a" });
  })
  .then(() => {
    console.log("Line 2 written.");
    // Write the third line
    return writeFile("temp.txt", "Line 3: Promises and then() in Node.js.\n", { flag: "a" });
  })
  .then(() => {
    console.log("Line 3 written.");
    // Read the file contents
    return readFile("temp.txt", "utf8");
  })
  .then((data) => {
    console.log("File contents:");
    console.log(data); // Log the file contents to the screen
  })
  .catch((error) => {
    console.log("An error occurred:", error); // Handle any errors that occur during the process
  });