//exercise: tournament winner

function tournamentWinner(competitions, results) {
    for(let i = 0; i < competitions.length; i++){
        const [home, away] = competitions[i]
        const winningTeam = results[i] === 0 ? away : home
    }
}

const competitions = [
    ['JavaScript', 'c#'],
    ['c#', 'python'],
    ['python', 'JavaScript']
]

const results = [0, 0, 1]


tournamentWinner(competitions, results)