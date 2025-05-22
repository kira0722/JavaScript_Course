//methods that dont modify the original array (immutability)


const ages = [21, 25, 30, 19, 22]

//every

const allAreAdults = ages.every(age => age > 20)
console.log(ages);
console.log('mayores de edad: ', allAreAdults);

//some

const someAreAdults = ages.some(age => age > 30)
console.log(ages);
console.log(someAreAdults);