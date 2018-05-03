var cards = ["queen", "queen", "king", "King"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("User Flipped " + cardOne);
console.log("User Flipped " + cardTwo);
if (cardsInPlay.length === 2) {
    //This is to check if length equals 2
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    }
        else  {
            alert("Sorry, try again.");
        }
    }


