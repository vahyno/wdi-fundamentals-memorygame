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
/*       array shuffle below     bonus feature random board    */
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

cards = shuffle(cards);
/*             array shuffle above   */
var cardsInPlay = [];

var wins = 0;   //var for keeping wins
var losses = 0; //var for keeping losses

function checkForMatch(){ 
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
			console.log(cardsInPlay[0] + " " + cardsInPlay[1]) //test what was flipped
			//alert("You found a match!");
			setTimeout(function(){ alert("You found a match!"); }, 100);
			wins+=1	//adds wins
		} else {
			console.log(cardsInPlay[0] + " " + cardsInPlay[1]) //test what was flipped
			console.log("Sorry, try again.");
			//alert("Sorry, try again.");
			setTimeout(function(){ alert("Sorry, try again."); }, 100);
			losses+=1 //adds losses
		}
		console.log(`score: You won: ${wins} vs You lost: ${losses}`);
		setTimeout(function(){alert(`score: You won: ${wins} vs You lost: ${losses}`);}, 500); //score tracker pop up window
	}
}

function flipCard(){												//delete 'cardId' parameter unit 11
	var cardId = this.getAttribute("data-id");						//added unit 11
	console.log("User flipped " + cards[cardId].rank +".");
	cardsInPlay.push(cards[cardId].rank);
	console.log("suit: " + cards[cardId].suit);
	console.log("cardImage: "+ cards[cardId].cardImage);
	
	console.log("push test: "+ cardsInPlay[cardsInPlay.length-1]);	//testing what gets pushed
	this.setAttribute('src', cards[cardId].cardImage);				//card should turn
	checkForMatch(); 												//running checkForMatch function
}

/*flipCard(0);		//	prior unit 11
flipCard(2);  	//	prior unit 11 */


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


// added game restart function
function gameRestart(){
	cardsInPlay = [];
	var myParent = document.getElementById("game-board");
	while (myParent.firstChild) {
    	myParent.removeChild(myParent.firstChild);
    }
	cards = shuffle(cards);
	createBoard();
}

