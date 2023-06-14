// CommonJS, every file made in node is a module by default
// Modules - Encapsulated code (only share minimum)

//names.js should export multiple values in an object
// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

// sayHi('susan')
// sayHi(john)
// sayHi(peter)

//local
const secret = 'SUPER SECRET'
//share
const john = 'john'
const peter = 'peter'

console.log(module);
//interested in exports most

module.exports = { john, peter }