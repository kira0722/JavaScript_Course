//copying an array

const originalArray = [1, 2, 3, 4, 5]
const copyOfAnArray = [...originalArray]

console.log(originalArray);
console.log(copyOfAnArray);

//2. combining arrays

const arra1 = [1, 2, 3, 4]
const array2 = [6, 7, 8, 9]
const combinedArray = [...arra1, ...array2]

console.log(combinedArray);

//3. creating arrays with additional elements

const baseArray = [1, 2, 3]
const arrayAddElements = [...baseArray, 4, 5, 6, 7]

console.log(baseArray);
console.log(arrayAddElements);

//4. Pass elements to funcions

function sum(a, b, c) {
    return a + b + c
}

const numbers = [1, 2, 3]
const result = sum(...numbers)
console.log(result);