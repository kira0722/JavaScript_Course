class Animal {
    constructor(nombre, type) {
        this.nombre = nombre;
        this.type = type;
    }
    emitirSonido() {
        console.log("el animal emite un sonido");
    }
}

class Perro extends Animal {
    constructor(nombre, type, raza) {
        super(nombre, type);
        this.raza = raza;
    }
    emitirSonido(){
        console.log("el perro ladra");
    }

    correr(){
        console.log(`${this.nombre} corre alegremente`);
    }
}


const perro1 = new Perro("jauncho", "perro", "pug")

console.log(perro1);
perro1.correr()