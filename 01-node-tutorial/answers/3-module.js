// CommonJS, every file is module (by default)
// Module - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor');

//mind grenade
require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)