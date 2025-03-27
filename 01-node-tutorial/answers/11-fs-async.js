const { writeFile } = require("fs");
const path = require('path');

const filePath = path.join(__dirname, 'temporary', 'fileB.txt');

console.log("At start");

writeFile(filePath, "This is line 1\n", (err) => {
  console.log("At point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    // After writing the first line, write the second line (append)
    writeFile(filePath, "This is line 2\n", { flag: 'a' }, (err) => {
      console.log("At point 2");
      if (err) {
        console.log("This error happened: ", err);
      } else {
        // After writing the second line, write the third line (append)
        writeFile(filePath, "This is line 3\n", { flag: 'a' }, (err) => {
          console.log("At point 3");
          if (err) {
            console.log("This error happened: ", err);
          } else {
            console.log("At end");
          }
        });
      }
    });
  }
});