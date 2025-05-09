const personalizeMessage = () => 'goodbye everybody ¡'

function Rocket(name, ownMessage) {
    this.name = name
    this.launchMessage = () => ownMessage
    
}

const falcon9Rocket = new Rocket('Falcon 9', personalizeMessage)
const faconHeavy = new Rocket('Falco heavy', personalizeMessage)

console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())

const RocketArrowFunction = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage
})

const personalizeMessageArrow = () => 'successful launch'
const falcon9Rocket1 = RocketArrowFunction('Falcon 9', personalizeMessageArrow)
console.log(falcon9Rocket1.name);
console.log(falcon9Rocket1.launchMessage());