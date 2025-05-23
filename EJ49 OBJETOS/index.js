/*
Estructura de datos

key / value

objeto{
    propiedad: valor,
    propiedad: valor,
    propiedad: valor
    Metodos
}
propiedad = valor

*/

const persona = {
    nombre: 'john',
    edad: 30,
    direccion: {
        calle: "avenida saa",
        ciudad: 'CDMX'
    },
    saludar(){
        console.log(`hola, mi nombre es `, persona.nombre);
    }
}

console.log(persona);