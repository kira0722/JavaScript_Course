//METHODS THAT ITERATE OVER AN ARRAY
//METHODS THAT DONT MODIFY THE ORIGINAL ARRAY (IMMUTABILITY)

//find()

const multiple5 = [5, 10, 15, 20]

const firstNumber10 = multiple5.find(number => number > 10)

console.log(multiple5);
console.log(firstNumber10);

//findIndex()

const randomNumber = [6, 14, 27, 56, 40]

const indexNumber = randomNumber.findIndex(number => number > 50)

console.log(randomNumber);
console.log(indexNumber);