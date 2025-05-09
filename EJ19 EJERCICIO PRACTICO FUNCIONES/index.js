//create powerfullGirl objects

function powerfullGirl(name, color, superPower) {
    this.name = name,
    this.color = color,
    this.superPower = superPower
    this.isLead = false

    this.displayInfo = function () {
        console.log(`powerfull girl information: 
            Name: ${this.name},
            Color: ${this.color},
            super power: ${this.superPower}
            ${this.isLead ? 'Leader: yes' : 'Leader: NO'}
            `);
    }

    this.becameLeader = function () {
        this.isLead = true
        console.log(`${this.name} has become the lider of the powerfullGirls`);
    }
}

const blossom = new powerfullGirl('carlos', 'red', 'ice')
const buttercup = new powerfullGirl('carlitos', 'green', 'strenght')
const buber = new powerfullGirl('calitas', 'pink', 'fire')

blossom.displayInfo()
buttercup.displayInfo()
buber.displayInfo()

blossom.becameLeader()

console.log('-------------------');

blossom.displayInfo()
buttercup.displayInfo()
buber.displayInfo()