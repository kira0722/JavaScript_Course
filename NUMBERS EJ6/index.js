// TIPO 1 = ENTERO Y DECIMAL

//TANTO ENTEROS COMO DECIMALES SE TOMAN COMO TIPO NUMBER
const entero = 21
const decimal = 3.14
console.log(typeof entero, typeof decimal);


// TIPO 2 = NOTACION CIENTIFICA

const cientifico = 5e3
console.log(typeof cientifico);


//TIPO 3 = INFINITOS Y NaN

const infinito = Infinity
const noNumber = NaN

console.log(typeof infinito, typeof noNumber);
console.log(infinito)



//OPERACION ARITMETICAS

// TIPO 1 = SUMA, RESTA, MULTIPLICACION, DIVISION

const suma = 2+2
const resta = 3-1
const multiplicacion = 2*2
const division = 2/1

console.log(suma, resta, multiplicacion, division);


//TIPO 2 = MODULO Y EXPONENCIACION

const modulo = 10 % 3
const exponenciacion = 2 ** 3
console.log(modulo);
console.log(exponenciacion);

//PRECION PARA DECIMALES
const resultado = 0.1 + 0.2
console.log(resultado);
console.log(resultado.toFixed(3));


// TIPO 3 = OPERACIONES AVANZADAS

const raizCuadrada = Math.sqrt(16)
console.log(raizCuadrada);
const valorAbsoluto = Math.abs(-7)
console.log(valorAbsoluto);
const aleatorio = Math.random()
console.log(aleatorio);
