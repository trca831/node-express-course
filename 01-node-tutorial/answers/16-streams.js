const fs = require("fs");

// Create a read stream for the big.txt file with the specified encoding and highWaterMark
const readStream = fs.createReadStream("../content/big.txt", {
  encoding: "utf8",
  highWaterMark: 200, // Set the chunk size to 200 bytes
});

// Initialize the counter for the number of chunks
let chunkCount = 0;

// Handle the 'data' event to read chunks from the stream
readStream.on("data", (chunk) => {
  chunkCount++;
  console.log(`Received chunk #${chunkCount}:`);
  console.log(chunk);
});

// Handle the 'end' event when the stream finishes reading
readStream.on("end", () => {
  console.log(`Stream ended. Total number of chunks received: ${chunkCount}`);
});

// Handle the 'error' event in case there's an issue reading the file
readStream.on("error", (err) => {
  console.error("An error occurred while reading the stream:", err);
});