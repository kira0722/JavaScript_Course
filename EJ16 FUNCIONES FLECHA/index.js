const greeting = function (name) {
    return `Hi, ${name}`
}

const greeting2 = (name) => {
    return `Hi, ${name}`
}

//Arrow function = implicit return

const newGreetingImplicit = name => `Hi ${name}`

const newGreetingImplicitParams = (name, lastName) => `Hi ${name} ${lastName}`

//lexical binding

const finctionalCharacter = {
    name: 'calos',
    messageFunction: function (message) {
        console.log(`${this.name} says ${message}`);
    },
    messageArrow: (message) => {
        console.log(`${this.name} says ${message}`);
    }
}

finctionalCharacter.messageFunction('with great power comes great responsability')
finctionalCharacter.messageArrow('Octopus')