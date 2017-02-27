console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var CardThree = "king"; 
var CardFour = "king";


/*if(cardOne === cardTwo){
	alert("You found a match!"); 
} else {
	alert("Sorry, try again.");
}
*/
//adding comment

var cards = ["queen", "queen", "king", "king"]; 
var cardsInPlay = []
var allCards = []

function isMatch (cardsToCheck){

	if(cardsToCheck[0] === cardsToCheck[1]){
		alert ("It's your day!"); 
	}
	else{
		alert ("NOT TODAY!!!!")
	}
	for (var i=0; i<allCards.length; i++){
		allCards[i].innerHTML=""
	}	
}

function isTwoCards () {
	var cardType = this.getAttribute('data-card')
	cardsInPlay.push(cardType) // cardType = king or queen
	var template = '<img src="'+cardType+'.png" />';
	this.innerHTML = template;
	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay)
		cardsInPlay = []; 
	}
}


function createBoard(){ 
	var gameBoard = document.getElementById('game-board');
	for (var i=0; i<cards.length; i++){
		var cardElement = document.createElement ('div');
		cardElement.setAttribute ('class', 'card');
		cardElement.setAttribute ('data-card',cards[i]); 
		gameBoard.appendChild(cardElement); 
		cardElement.addEventListener ("click", isTwoCards)
	}
	allCards = document.getElementsByClassName('card')
}
createBoard ()


