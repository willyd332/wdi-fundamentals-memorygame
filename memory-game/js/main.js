// var cardOne = "queen";
// var cardTwo = "queen"
// var cardThree = "king"
// var cardFour = "king"

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("It's A Match!")
  } else {
    alert("So Close! Try Again.")
  }
}

console.log("User Flipped" + cardOne);
