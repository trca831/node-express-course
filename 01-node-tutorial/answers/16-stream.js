const rs = require('fs');

function readingBigFile(highWaterMark) {
  const readStream = rs.createReadStream('../content/big.txt', { encoding: 'utf8', highWaterMark });
  let counter = 0;

  readStream.on('data', (chunk) => {
    counter++;
  });

  readStream.on('end', () => {
    console.log(`All done reading file. Number of chunks received were: ${counter}`);
  });

  readStream.on('error', (err) => {
    console.error(`Oops, error reading the file: ${err}`);
  });
}

console.log("HighWaterMark reading at 200:");
readingBigFile(200);

console.log("\nHighWaterMark reading at 500:");
readingBigFile(5000);

console.log("\nHighWaterMark reading at 1000:");
readingBigFile(10000);