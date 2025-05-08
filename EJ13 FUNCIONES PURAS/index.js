//FUNCIONES PURAS

// SIDE EFFECTS:
// 1. MODIFICAR VARIABLES GLOBALES
// 2. MODIFICAR PARAMETROS
// 3. LLAMADOS A API'S
// 4. Imprimir mensajes en pantalla o consola
// 5. MANIPULACION DEL DOM
// 6. OBTENER LA HORA ACTUAL

function sum(a, b) {
    return a + b
}

function square(x) {
    return x * x
}

function addTen(y) {
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))
console.log(finalResult);


//FUNCIONES IMPURAS
function sum2(a, b) {
    console.log('A:', a);
    return a + b
}

let total = 0

function sumWithEffect(a) {
    total += a
    return total
}

