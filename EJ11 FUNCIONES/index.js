function descuento(price, desc) {

    let descTotal = price * desc
    let total = price - descTotal

    return console.log('el precio total con el descuento incluido es de: ' + total);

}

//funcion de la clase
// function calculate(number, disc) {
//     const dis = (number * disc) / 100
//     const priceDisc = number - dis

//     return priceDisc
// }

// console.log(calculate(100, 20));

descuento(100, 0.2)