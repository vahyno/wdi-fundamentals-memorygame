console.log("Up and running!");

alert('Hello, How about a game of Pexeso?');

//var cards = ["queen", "queen", "king", "king"];  //prior Unit 10 Assignments
var cards = [
	{
		rank : "queen",
		suit : "hearts",
		cardImage : "images/queen-of-hearts.png"
	},
	{
		rank : "queen",
		suit : "diamonds",
		cardImage : "images/queen-of-diamonds.png"
	},
	{
		rank : "king",
		suit : "hearts",
		cardImage : "images/king-of-hearts.png"
	},
	{
		rank : "king",
		suit : "diamonds",
		cardImage : "images/king-of-diamonds.png"
	}
]
var cardsInPlay = [];

function checkForMatch(){ 
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
			console.log(cardsInPlay[0] + " " + cardsInPlay[1]) //test what was flipped
			alert("You found a match!");
		} else {
			console.log(cardsInPlay[0] + " " + cardsInPlay[1]) //test what was flipped
			console.log("Sorry, try again.");
			alert("Sorry, try again.");
		}
	}
}

function flipCard(){												//delete 'cardId' parameter unit 11
	var cardId = this.getAttribute("data-id");						//added unit 11
	console.log("User flipped " + cards[cardId].rank +".");
	cardsInPlay.push(cards[cardId].rank);
	console.log("suit: " + cards[cardId].suit);
	console.log("cardImage: "+ cards[cardId].cardImage);
	
	//console.log("push test: "+ cardsInPlay[cardsInPlay.length-1]);	//testing what gets pushed
	this.setAttribute('src', cards[cardId].cardImage);				//card should turn
	checkForMatch(); 												//running checkForMatch function
}

/*flipCard(0);		//	prior unit 11
flipCard(2);  */	//	prior unit 11


function createBoard(){
	for (var i=0; i< cards.length; i++) {
		console.log(cards[i].rank); 								//my test if for loop works fine 
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");

		cardElement.setAttribute("data-id", i);
	 	cardElement.addEventListener("click", flipCard);
    	document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();
