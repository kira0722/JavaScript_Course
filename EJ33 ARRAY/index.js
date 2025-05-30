//HOW TO CREATE AN ARRAY? 

//1. new Array() // Array()

const fruits = Array('apple', 'banana', 'orange')
console.log(fruits);

const justOneNumber = Array(12)
console.log(justOneNumber);

const numbers = Array(1, 2, 3, 4, 5, 6, 7)
console.log(numbers);


//2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber);

const emptyArray = []
console.log(emptyArray);


const sport = ['soccer', 'tennis', 'rugby']
console.log(sport);

const ingredients = [
    'Flour',
    true,
    21,
    {
        typesIngredient: 'milk',
        quantity: '1 cup'
    },
    false
]

console.log(ingredients);

//ACCESSING ARRAY ELEMENTS

const firstFruit = fruits[0]
console.log(firstFruit);

//LENGHT PROPERTY

const numberOfFruits = fruits[1].length
console.log(numberOfFruits);

//MUTABILITY

fruits.push('watermelon')
console.log(fruits);

//IMMUTABILITY

const newFruits = fruits.concat(['grape', 'kiwi'])
console.log(fruits);
console.log(newFruits);

//CHECKING ARRAYS WITH ARRAY.ISARRAY()

const isArray = Array.isArray(fruits)
console.log(isArray);

//PRACTICAL EXERCISE: SUM ALL ELEMENTS OF AN ARRAY

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

for(let i = 0; i < numbersArray.length; i++){
    sum += numbersArray[i]
}

console.log(sum);