//1. user information

const username = 'kira'
const fullName = 'carlitos'
const age = 23
const isStudent = true

//2. Adress

const adress = {
    street: 'crd12 #da123',
    city: 'mede',
    state: 'ant',
    zipCode: '201231'
}

//3. Hobbies

const hobbies = ['coding', 'reading', 'gaming']


//4. generate data biografy

const person = `Hi i'm ${fullName}.
I'm ${age} years old.
I'm live in ${adress.city}.
I like ${hobbies.join(', ')}
Nice to met you`

console.log(person);
