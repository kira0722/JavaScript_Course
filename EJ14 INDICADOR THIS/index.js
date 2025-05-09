//Enlace implicito = implicit binding
const house = {
    dogName: 'fido',
    dogGeeting: function() {
        console.log(`hi i'm ${this.dogName}`);
    }
}

house.dogGeeting();


//Enlace explicito = explicit binding

function dogGeeting() {
    console.log(`Hi i'm ${this.dogName}`);
    
}

const newHouse = {
    dogName: 'cocoth',
}

dogGeeting.call(newHouse)



function newDogGreeting(owner, address) {
    console.log(`hi, i'm ${this.dogName} and i live with ${owner} on ${address}`);
}

const owner = 'lucy'
const address = 'cra 89 #102 31'

newDogGreeting.call(newHouse, owner, address)




