const path = require('path')
//returns a platform specific separator

console.log(path.sep)

//path that joins a sequence of path segments using platform specific seperator
const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath)
//we will get it returned as a value

const base = path.basename(filePath)
console.log(base)
//returns name of test.txt

const absolute = path.resolve(__dirname, 'content', 'folder','test.txt')
console.log(absolute)
//returns an absolute path
//this is useful for when our app is running in different environments