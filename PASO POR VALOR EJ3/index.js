//paso por valor

let x = 1
let y = 'hola'
let z = null

let a = x
let b = y
let c = z

console.log(x, y, z);
console.log(a, b, c);

a = 12
b = 'hola2'
c = undefined

console.log(x, y, z);
console.log(a, b, c);

//paso por referencia

let fruta = ['manzana']
fruta.push('pera')
console.log(fruta);

let panes = ['🥐​']
let copiaPanes = panes
panes.push('​🥟')
console.log(panes, copiaPanes);

