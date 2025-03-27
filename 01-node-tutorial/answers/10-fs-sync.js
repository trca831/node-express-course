const fs = require('fs');
const path = require('path');

// Define the file path for ./temporary/fileA.txt
const filePath = path.join(__dirname, 'temporary', 'fileA.txt');

// Ensure the 'temporary' directory exists, if not create it
if (!fs.existsSync(path.join(__dirname, 'temporary'))) {
  fs.mkdirSync(path.join(__dirname, 'temporary'));
}

// Write the first line (this will overwrite the file if it exists)
fs.writeFileSync(filePath, 'First line of text\n');

// Append the second line
fs.writeFileSync(filePath, 'Second line of text\n', { flag: 'a' });

// Append the third line
fs.writeFileSync(filePath, 'Third line of text\n', { flag: 'a' });

// Read the file contents
const fileContents = fs.readFileSync(filePath, 'utf-8');

// Log the contents of the file
console.log(fileContents);