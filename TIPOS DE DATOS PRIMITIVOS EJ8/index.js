//NULL

const snoopy = null
console.log(typeof snoopy);

// UNDEFINED
let name
console.log(name);

//SYMBOL

const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1 === symbol2);

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user);

//BIGINT

const bigNumber = 12312321421421434231412321321312312132141441231n
console.log(bigNumber);

const numberOfParticles = 1000000000000000000000000000000000000n
console.log(typeof numberOfParticles);