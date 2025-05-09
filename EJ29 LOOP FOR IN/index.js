/*
for in ----> objetos

propiedades = valor

array, string = items

for (variable in objeto) {
}
*/

const listaCompras = {
    manzana: 5,
    pear: 3,
    naranja: 2,
    uva: 1
}


for (fruta in listaCompras) {
    console.log(fruta);
}

for (fruta in listaCompras) {
    console.log(`${fruta}: ${listaCompras[fruta]}`);
}

// for (fruta of listaCompras){
//     console.log(`${fruta}`);
// } //saca error por que estamos hacieno un for of con un objeto