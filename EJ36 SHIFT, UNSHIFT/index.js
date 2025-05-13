//METHODS THAT MODIFY THE ORIGINAL ARRAY (MUTABILITY)

//SHIFT()
const colors = ['yellow', 'blue', 'red']

const removedColors = colors.shift()
console.log(removedColors);
console.log(colors);

//UNSHIFT()

const newColors = colors.unshift('black', 'white')
console.log(newColors);
console.log(colors);