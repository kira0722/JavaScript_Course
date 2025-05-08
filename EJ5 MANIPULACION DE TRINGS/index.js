//STRING PRIMITIVOS

//MOSTRAR EL TIPO DE DATO QUE ES LA VARIABLE = typeof
const stringPrimitivo = 'texto primitivo'
console.log(typeof stringPrimitivo);

const stringPrimitivo2 = String('texto primitivo2')
console.log(typeof stringPrimitivo2);

//STRING TIPO OBJETOS
const stringOpjeto = new String('string object')
console.log(typeof stringOpjeto);


//ACCEDER A CARACTERES

const saludo = 'hola, como estas'
console.log(saludo[0]); //busca segund la posicion dada
console.log(saludo.charAt(1)); //el metodo busca, segun la posicion dada en un numero
console.log(saludo.indexOf('o')); //busca el primero resultado que contenga esta palabra, y da como resultado el numero de la posicion donde fue encontrada
console.log(saludo.indexOf('estas')); //si es una palabra, busca la posicion en donde empieza la palabra especificada
console.log(saludo.lastIndexOf('o')); //busca la ultima palabra que se encuentre en el texto u objeto, y da como resultado la posicion encontrada
console.log(saludo.slice(3, 8)); //muestra las palabras que se encuentren dentro del rango establecido
console.log(saludo.length); //muestra la cantidad o longitud que haya
console.log(saludo.toLocaleUpperCase()); //coloca el texto en mayuscula
console.log(saludo.toLowerCase()); //coloca el texto en minuscula

const saludoDividido = saludo.split(' ') //separa el texto individualmente, segun los espacios
console.log(saludoDividido);
console.log(saludoDividido[1]);

const saludoEspacios = ' Hola Mundo '
const SinEspacios = saludoEspacios.trim() //quita los espacios vacios que hayan en el texto
console.log(SinEspacios);

const saludoOriginal = 'hola mundo'
const nuevoSaludo = saludoOriginal.replace('hola', 'mundo') //reemplaza el texto, por el nuevo, lo que realiza es comparar el texto que se desea cambiar
                                                            //como primer parametro del texto original, y en el segundo parametro, se coloca el nuevo texto
                                                            //por el cual se desea cambiar
console.log(nuevoSaludo);