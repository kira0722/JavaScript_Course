//METHOSDS THAT ITERATE OVER AN ARRAY
//METHODS THAT DONT MODIFY THE ORIGINAL ARRAY (IMMUTABILITY)

//map

const numbers = [1, 2, 3, 4, 5]
const squareNumbers = numbers.map(num => num * num)

console.log(numbers);
console.log(squareNumbers);

//foreach

const colors = ['red', 'pink', 'blue', 'black']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors);
console.log(iteratedColors);


//exercise

const temperatures = [32, 68, 95, 104, 212]

const celcius = temperatures.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log('fahrenheit: ', temperatures);
console.log('celcius: ', celcius);


//exercise: sum

const numbers1 = [1, 2, 3, 4, 5]

let suma = 0

numbers1.forEach(numbe => {
    suma += numbe
})

console.log(numbers1);
console.log(suma);