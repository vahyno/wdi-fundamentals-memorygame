console.log("Up and running!");

alert('Hello Friend, How about a nice game of Pexeso?');

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];

cardsInPlay.push(cardOne);

console.log(cards); //test

console.log(cardsInPlay); //test
console.log("User flipped " + cardsInPlay[0]);

cardsInPlay.push(cardTwo); 

console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	console.log("User flipped 2 cards.") //test
	if (cardOne === cardTwo) {
		alert("You found match!");
	}
	else {
		alert("Sorry, try again.");
	}
}