console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// console.log("User flipped " + cardThree);

// var cards = ['queen', 'queen', 'king', 'king'];

var cards = [
	{ 
		rank: 'queen',
		suit: 'hearts',
		image: "images/queen-of-hearts.png"
	},
	{ 
		rank: 'queen',
		suit: 'diamonds',
		image: "images/queen-of-diamonds.png"
	},
	{ 
		rank: 'king',
		suit: 'hearts',
		image: "images/king-of-hearts.png"

	},
	{ 
		rank: 'king',
		suit: 'diamonds',
		image: "images/king-of-diamonds.png"
	},
];

var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You got dis here match!");
		} else {
			alert("No match 4 u");	
		}
	}
};

var flipCard = function(cardId){
	cardsInPlay.push(cardId.rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].image)
	console.log(cards[cardId].suit)
	checkForMatch();
};

flipCard(0);
flipCard(1);





	// console.log("first if")
	// console.log(cardsInPlay[0])
	// console.log(cardsInPlay[1])

// var cardOne = cards[0]
// var cardTwo = cards[3]

// cardsInPlay.push('cardOne');
// console.log("User flipped " + cardOne);


// cardsInPlay.push('cardTwo');
// console.log("User flipped " + cardTwo);
