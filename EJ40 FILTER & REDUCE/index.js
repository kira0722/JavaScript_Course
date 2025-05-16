//methods thats iterate over an array
//methods that dont modify the original array //immutability

//FILTER

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers);
console.log(evenNumbers);


//REDUCE //case 1

const numers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = numers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numers2);
console.log(sum);

//REDUCE //case 2

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye']

const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if(accumulator[currentValue]){
        accumulator[currentValue]++

    }else {
        accumulator[currentValue] = 1
    }

    return accumulator
}, {})

console.log(wordFrecuency);