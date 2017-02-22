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
function createCards(){
	var gameBoard = document.getElementById('game-board');
	for (var i=0; i<cards.length; i++){
		var cardElement = document.createElement ('div');
		cardElement.innerHTML = '<div class="card"></div>'; 
		gameBoard.appendChild(cardElement); 
		
	}
}
createCards ()


