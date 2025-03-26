const { writeFile, readFile } = require("fs").promises;  

async function writer() {
    try {
        await writeFile("temp.txt", "Line 1: Hello, world!\n");
    await writeFile("temp.txt", "Line 2: This is a test.\n", { flag: "a" }); // Use 'a' flag to append
    await writeFile("temp.txt", "Line 3: Promises and async/await in Node.js.\n", { flag: "a" });
    console.log("File written successfully!");
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}

async function reader() {
    try {
        const data = await readFile("temp.txt", "utf8");
        console.log("File contents:");
        console.log(data);
      } catch (error) {
        console.error("Error reading the file:", error);
      }
    }

    async function readWrite() {
        await writer();  
        await reader();  
      }

      readWrite();