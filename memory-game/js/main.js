
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];

var checkForMatch = function() {
      if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("It's A Match!");
      } else {
        console.log("So Close! Try Again.")
      }
}

// cardsID is an entered value...(var cards[x] = cardsID)//

var flipCard = function(cardsID) {
  cardsInPlay.push(cardsID.rank);
  console.log("User flipped" + cardsID.rank);
  console.log("User flipped" + cardsID.cardImage);
  console.log("User flipped" + cardsID.suit);
    if (cardsInPlay.length === 2) {
      checkForMatch();
    }

}


flipCard(cards[0]);
flipCard(cards[2]);
