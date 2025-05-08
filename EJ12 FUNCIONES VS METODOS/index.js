//1. pasar funciones como argumentos = LLAMADO TAMBIEN COMO CALLBACK

function a() {
}

function b(a) {    
}

b(a)

//2. retornar funciones

function a() {
    function b(){
        return b
    }
}


//3. asignar funciones a variables

const a = function (){

}


//4. tener propiedades y metodos

function a() {
    const obj = {}
    a.call(obj)   
}


//5. anidar funciones. Tambien conocido como Nested funcions

function a() {
    function b() {
        function c() {

        }
        c()
    }
    b()
}
a()



//es posible almacenar funciones en objetos?

const rocket = {
    name: 'Falcon night',
    launchMessage: function launchMessage() {
        console.log('FIRE');   
    }
}

rocket.launchMessage()