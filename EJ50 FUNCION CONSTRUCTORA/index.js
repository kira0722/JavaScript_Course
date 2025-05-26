// let persona = {
//     nombre: "diego",
//     apellido: "de granda",
//     edad: 36
// }

function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}


const persona1 = new Persona("Carlos", "Sanchez", 35);
persona1.nacionalidad = "mexicano"
console.log(persona1);


const persona2 = new Persona("juan", "camilo", 45);
console.log(persona2);

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo: ${this.nombre}, ${this.apellido}`);
};

persona1.saludar()
persona2.saludar()