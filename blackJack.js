import Game from "./classes/Game.js";
import Gambler from "./classes/Gambler.js";
import CardsDeck from "./classes/CardsDeck.js";


let NewGameButton = document.getElementById("btnNewGame");
let cardDisplay = document.getElementById("cardDisplay");
let message = document.getElementById("message");
let drawCardButton = document.getElementById("btnDraw");
let round = document.getElementById("round");
let prize = document.getElementById("prize");
let leaveTableButton = document.getElementById("leaveTable");

const game = new Game();
const gambler = new Gambler(game);
const deck = new CardsDeck();

leaveTableButton.disabled = true;
drawCardButton.disabled = true;


NewGameButton.addEventListener("click", function(e){

    console.log(e.target.innerHTML);

    if(e.target.innerHTML === "New Game"){
        message.innerHTML = "Good Luck!";
        game.resetGame(gambler);
    } else if(e.target.innerHTML === "Next Round"){
        message.innerHTML = "Keep Going!";
        NewGameButton.innerHTML = "New Game";
    }

        drawCardButton.disabled = false;
        drawCardButton.disabled = false;
        leaveTableButton.disabled = false;
        cardDisplay.innerHTML = " ";
        gambler.currentHand = [];
        deck.cards = [];
        deck.createNewDeck();
        gambler.currentScore = 0;
        
        round.innerHTML = game.getRound();
        prize.innerHTML = gambler.getPrize();

        gambler.drawCard(deck.getCards(),cardDisplay);
        gambler.drawCard(deck.getCards(),cardDisplay);
    

}, false );


drawCardButton.addEventListener("click", function(){
    gambler.drawCard(deck.getCards(), cardDisplay);
},false);


leaveTableButton.addEventListener("click", function(){
    message.innerHTML = "You leave with: $" + gambler.getPrize() + " !!!";
    NewGameButton.innerHTML = "New Game";
    this.disabled = true;
});

