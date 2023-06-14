const  {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
const third = readFileSync('./content/third.txt', 'utf8');

writeFileSync(
    './temporary/fileA.txt', 
    `Here is the result:\n${first},\n${second},\n${third}`, 
    { flag: 'a' }
)

// const read = readFileSync('./temporary/fileA.txt', "utf8");
// console.log(read)
console.log('done with this task');
console.log('starting the next one');