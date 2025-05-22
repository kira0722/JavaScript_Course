const winningParticipants = [
    { id: 1, name: 'Jennifer', tikcketNumber: 1},
    { id: 50, name: 'carlos', tikcketNumber: 2},
    { id: 12, name: 'pedro', tikcketNumber: 4},
    { id: 32, name: 'miguel', tikcketNumber: 8}
]

function findWinner(name) {
    const winner = winningParticipants.find(participants => participants.name === name)
    return winner || 'No winner found with that name'
}

function findIndexWinnerTicket(tikcketNumber) {
    const index = winningParticipants.findIndex(participants => participants.tikcketNumber === tikcketNumber)
    return index !== -1 ? index : 'No winner found with that ticketNumber'
}

function displayWinnerInfo(winner) {

    if(winner !== undefined && winner != null && winner !== 'No winner found with that name') {
        console.log('Winner information: ', winner);
    } else {
        console.log('No winner found.');
    }
}

const winneByName = findWinner('carlos')
const winnerByTicket = findIndexWinnerTicket(4)

displayWinnerInfo(winneByName)
console.log('index of winner by ticket number: ', winnerByTicket);