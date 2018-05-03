var cards = [
    {
        card: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        card: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        card: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        card: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    },

];
var cardsInPlay = [];
var checkForMatch = function()  {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    }
    else {
        alert("Sorry, try again.");
    }
}
var flipCard = function (cardId) {
    console.log("User flipped " + cards[cardId].card);
    cardsInPlay.push(cards[cardId].card);
    if (cardsInPlay.length === 2) {
        //This is to check if length equals 
        checkForMatch();
    }
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit) 
};
flipCard(0);
flipCard(2);




