//Methods that dont modify the original array (immutability)

//Combine with concat () - way1
const morse1Code1 = ['....', '---'] //H O
const morseCode2 = ['.-..', '.-'] //L A

const morseCodeMessage = morse1Code1.concat(morseCode2)

console.log(morse1Code1);
console.log(morseCode2);

console.log(morseCodeMessage);


//Combine with concat () - way2

const morseCodeMessage2 = [].concat(morse1Code1, morseCode2)
console.log(morseCodeMessage2);

//Combine with Spread Operator

function combineMorseMessages(morseCode1, morseCode2) {
     console.log([...morseCode1, ...morseCode2]);
}

combineMorseMessages(morse1Code1, morseCode2)



const numbers = [1, 2, 3]
const string = 'string'

combineMorseMessages(numbers, string)

// join ()

const morseCodeMessageString = morseCodeMessage.join(' e ')
console.log(morseCodeMessageString);