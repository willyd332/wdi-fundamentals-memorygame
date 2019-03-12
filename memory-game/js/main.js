
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



var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
   var cardElement = document.createElement('img');
   cardElement.setAttribute('src', 'images/back.png');
   cardElement.setAttribute('data-id', cards[i]);
   document.getElementById('game-board').appendChild(cardElement);
 }
 cardElement.addEventListener('click', flipCard);
}
createBoard();



var flipCard = function() {
  var cardID = this.getAttribute('data-id');
  cardsInPlay.push(cardID.rank);
  cardID.setAttribute('src', cardID.cardImage)
    if (cardsInPlay.length === 2) {
      checkForMatch();
    }
}
