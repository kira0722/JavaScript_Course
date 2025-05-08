//Creacion de strings //opciones

const primeraOpcion = 'comillas simples'
const segundaOpcion = "comillas dobles"
const terceraOpcion = `comillas invertidas`
console.log(primeraOpcion +", "+ segundaOpcion + ", "+ terceraOpcion);

//CONCATENAR //OPCION 1 = OPCION +

const direccion = 'calle 231 # 123-12'
const ciudad =  'medellim'
const direccionCompleta = 'Direccion: ' + direccion +", " + ciudad

console.log(direccionCompleta);


//CONCATENAR // OPCION 2  = OPCION TEMPLATE LITERALS

const nombre = 'carlos'
const pais =  'colombia'
const presentacion = `hola soy ${nombre} de ${pais}`
console.log(presentacion);


//CONCATENAR // OPCION 3 = JOIN()

const primeraParte = 'hola'
const segundaParte = 'mundo'
const terceraParte = 'everyone'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join(', '));

//CONCATENAR // OPCION 4 = CONCAT()

const hobbie1 = 'dibujar '
const hobbie2 = 'pintar '
const hobbie3 = 'colorear'
const hobbies = 'mis hobies son: '.concat(hobbie1, hobbie2, hobbie3)
console.log(hobbies);


//-------------------------------------------------------------------------


//caracteres de escape

// const whatDoIDo = 'I'm Software'

// C.E OPCION 1 = ESCAPE ALTERNATIVO

const escapeAlternativo = "I'm Software Engineer "


//C.E OPCION 2 = BARRA INVERTIDA

const barraInvertida = 'I\'m Software Engineer'

//C.E OPCION 3 = TEMPLATE LITERALS

const escapeComillaInvertida = `I'm Software Engineer`

//------------------------------------------------

//Escritura de Strings largos

/* lorem 
impsum
intu
ea */

const poema = 'lorem\n impsum\n intu\n ea \n'
const poema2 = 'lorem \n\ impsun \n\ '
const poema3 = `lorem
impum
shit`

console.log(poema);
console.log(poema2);
console.log(poema3);