//METHODS THAT MODIFY THE ORIGINAL ARRAY (MUTABILITY)

//SPLICE
const vegetables = ['carrot', 'broccoli', 'spinach', 'tomato']
const removedVegatebles = vegetables.splice(2, 1, 'cucumber', 'onion')

console.log(vegetables);
console.log(removedVegatebles);

//REVERSE

const numbers = [1, 2, 3, 4, 5]
const reverseNumbers = numbers.reverse()
console.log(numbers);
console.log(reverseNumbers);

//SORT (NUMBERS)

const unsortedNumbers1 = [4, 18, 1, 62, 34]
const unicodedNumbers = unsortedNumbers1.sort()
console.log(unsortedNumbers1);
console.log(unicodedNumbers);

const  unsortedNumbers2 = [4, 18, 1, 62, 34]
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b)
//4-18 = -14
//18-1 = 17
console.log(unsortedNumbers2);
console.log(sortedNumbers);


//SORT (STRINGS) - UTF-16

const cities = ['york', 'paris', 'tokyio', 'london']
const sortCities = cities.sort()

console.log(cities);
console.log(sortCities);

//FILL 

const ages = [21, 35, 45, 50, 60]
console.log(ages.fill(0, 2, 4));
console.log(ages.fill(15, 1));