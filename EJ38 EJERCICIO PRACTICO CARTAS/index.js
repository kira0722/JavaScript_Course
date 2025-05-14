const deck = ['♠', '♥', '♦', '♣', '♠', '♥', '♦', '♣', '♠', '♥', '♦', '♣']

function shuffDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function dealCards(numCard) {
    const dealCards = deck.splice(0, numCard)
    return dealCards
}

shuffDeck()
const player1Hand = dealCards(3)
const player2Hand = dealCards(3)
const player3Hand = dealCards(3)

console.log('player 1, hand: ', player1Hand);
console.log('player 2, hand: ', player2Hand);
console.log('player 3, hand: ', player3Hand);

