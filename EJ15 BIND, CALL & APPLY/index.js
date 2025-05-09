// const owner = 'lucy'
// const address = 'cra 3 #1321 12'

// function dogGeeting(owner, address) {
//     console.log(`hi i'm ${this.dogName}, im live with ${owner} on ${address}`);
// }

// const newHouse = {
//     dogName: 'cocoth'
// }

// dogGeeting.call(newHouse, owner, address)

// const needValues = [owner, address]
// dogGeeting.apply(newHouse, needValues)

// const bindingWith =  dogGeeting.bind(newHouse, owner, address)
// bindingWith()

const caricatura = {
    nombre: 'vaca y pollito'
}

function recuerdo(personaje) {
    console.log(`${this.nombre} era mi caricatura favorita
        me encantaba ver las aventuras de ${personaje}`);
}

recuerdo.call(caricatura, 'vaca')
recuerdo.bind(caricatura, 'pollito')