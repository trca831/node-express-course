const { writeFile, readFile } = require("fs").promises;

async function writer() {
    try {
      await writeFile("temp.txt", "\nHello\nMy name is\nTracy");
      console.log("File 'temp.txt' has been written successfully.");
    } catch (error) {
      console.error("Error writing to file:", error);
    }
  }
  
  async function reader() {
    try {
      const data = await readFile("temp.txt", "utf8");
      console.log("File content:\n", data);
    } catch (error) {
      console.error("Error reading from file:", error);
    }
  }
  
  async function readWrite() {
    await writer();
    await reader();
  }
  
  readWrite();
  