let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You find a match!");
    } else {
        alert("Sorry, try again!");
    }
}

function flipCard(cardId) {
    console.log("user flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    console.log(cardsInPlay);
    if (cardsInPlay.length == 2) {
        checkForMatch();
    }



}
flipCard(0);
flipCard(1);