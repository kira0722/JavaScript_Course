//Methods that modify the original array (mutability)

//PUSH
const countries = ['USA', 'CANADA', 'UK']
const newCountries = countries.push('GERMANY', 'AUSTRALIA')

console.log(countries);
console.log(newCountries);

//pop

const removedCountry = countries.pop()

console.log(countries);
console.log(removedCountry);