//EXPLICIT TYPE CASTING

const string = '42'
const integer = parseInt(string)
console.log(typeof integer);
console.log(integer);

const stringDecimal = '3.15'
const float = parseFloat(stringDecimal)
console.log(float);
console.log(typeof float);

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal);
console.log(typeof decimal);


//IMPLICIT TYPE CASTING

const sum = '5' + 3
console.log(sum);

const sumBoolean = '3' + true
console.log(sumBoolean);

const sumNumber = 2 + true
console.log(sumNumber);

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log(string + numberValue + booleanValue);

//STRING = CONCATENAR //NUMBER SUMA A MENOS QUE SE SUME CON UN STRING //BOOLEAN SUMA 1
