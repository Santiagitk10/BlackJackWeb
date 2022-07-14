import Game from "./classes/Game.js";
import Gambler from "./classes/Gambler.js";
import CardsDeck from "./classes/CardsDeck.js";


const game = new Game();
console.log("Welcome To BlackJack!")
// let name = prompt("Enter your name: ")  //PROMPT
const gambler = new Gambler(name, game);
const deck = new CardsDeck();
deck.createNewDeck();

let isGameOn = true;

// do {
    gambler.currentScore = 0;
    // do {
        if(game.getRound() > 1){
            deck.createNewDeck();
        }
        gambler.drawCard(deck.getCards());

        if(gambler.getCurrentScore() >= 18){
            isGameOn = false;
        }
    // } while (isGameOn);
    

    //STATUS CHANGER IS NOT DEFINED BECAUSE OF PROMPT
    // let statusChanger = prompt("Enter 1 to advance round if you Won or to close if you Lost. Enter 2 to retire: "); 
    // if(parseInt(statusChanger) === 2){
    //     gambler.status = "Retired";
    //     gambler.currentHand = [];
    // } else if(parseInt(statusChanger) === 1 && gambler.status != "Lost"){
    //     gambler.status = "Active";
    //     gambler.currentHand = [];
    //     isGameOn = true;
    // }

    

    if(game.getRound() > 3){
        gambler.status = "Retired";
    }

    console.log(`Gambler Status: ${gambler.status}`);

// } while (gambler.status === "Active" || gambler.status === "Won");

























