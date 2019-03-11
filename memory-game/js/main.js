// var cardOne = "queen";
// var cardTwo = "queen"
// var cardThree = "king"
// var cardFour = "king"

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
      if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("It's A Match!");
      } else {
        console.log("So Close! Try Again.")
      }
}

var flipCard = function(cardsID) {
  cardsInPlay.push(cardsID);
  console.log("User flipped" + cardsID);
    if (cardsInPlay.length === 2) {
      checkForMatch();
    }
}


flipCard(cards[0]);
flipCard(cards[2]);
