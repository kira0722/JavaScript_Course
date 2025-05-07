//tipó de dato primitivo - inmutable
let numero = 23
numero = numero + 10
console.log(numero); 


let esVerdadero = true
esVerdadero = false
console.log(esVerdadero);

//no cambia el valor original, solo crea una nuevo valor o variable?

//tipo de dato complejo - mutable

//tipo de dato: objeto
let usuario = { nombre: 'pepito', edad: 15}

usuario.edad = 20
console.log(usuario);


//tipo de dato: array
let frutas = ['manzana', 'pera']
frutas[0] = 'mango'

console.log(frutas);


//tipo de dato: funcion

function cambiarNombre(objeto){
    objeto.nombre = 'new name'
}

let persona = {nombre: 'Antonio'}

cambiarNombre(persona)
console.log(persona)