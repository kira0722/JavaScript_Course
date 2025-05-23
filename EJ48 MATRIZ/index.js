let arra1 = [1, 2, 3]
let array2 = [[1, 2, 3][4, 5, 6], [7, 8, 9]]

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

matriz[1][2] = 10

console.log(array2[1]);

console.log(matriz);

let value = matriz[0][1]
console.log(value);

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}

function findElement(matriz, element) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if(matriz[i][j] === element){
                return true
            }
        }
    }

    return false
}

console.log(findElement(matriz, 5));

function duplicateMatriz(matriz) {

    let newMatriz = []
    
    for(let i = 0; i < matriz.length; i++){
        newMatriz[i] = [...matriz[i]]
    }
    return newMatriz    
}

console.log(duplicateMatriz(matriz));