class Personas {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad        
    }
    saludar(){
        console.log(`Hola, me llamo: ${this.nombre}, y tengo ${this.edad}`);
    }
}

const persona1 = new Personas("carlos", 21)

persona1.saludar()