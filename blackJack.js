// import Game from "./classes/Game.js"  // FRONT JS IMPORT. DOES NOT WORK WITH NODE
const Game = require("./classes/Game.js"); //TO IMPORT CLASSES IN DIFFERENT MODULES LOCALES BACK END. (NODE)
const Gambler = require("./classes/Gambler.js");
const CardsDeck = require("./classes/CardsDeck.js");

const prompt = require('prompt-sync')();

//---------------------------------------------------------------------------
//TO REVIEW LATER TO LEARN HOW TO USE READLINE PROPERLY WITH ASYNC AND AWAIT
// const rlp = require('readline');

// const rl = rlp.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// async function ask(prompt)   {
//   return new Promise(resolve => {
//     rl.question(prompt, input => resolve(input));
//   });
// }


// async function veryContinue(){
//     let response = await ask("Do you want to continue?")
//     console.log(response);
//     return 
// }

// ask("Enter your name: ")
//         .then(result => { 
//         gambler = result;
        
//         veryContinue();
//   })

// do {
    
// } while (wishesToContinue);
//---------------------------------------------------------------------------


const game = new Game();
console.log("Welcome To BlackJack!")
let name = prompt("Enter your name: ")
const gambler = new Gambler(name, game);
const deck = new CardsDeck();
deck.createNewDeck();

let isGameOn = true;

do {
    gambler.currentScore = 0;
    do {
        if(game.getRound() > 1){
            deck.createNewDeck();
        }
        gambler.drawCard(deck.getCards());

        if(gambler.getCurrentScore() >= 18){
            isGameOn = false;
        }
    } while (isGameOn);
    

    let statusChanger = prompt("Enter 1 to advance round if you Won or to close if you Lost. Enter 2 to retire: ");
    if(parseInt(statusChanger) === 2){
        gambler.status = "Retired";
        gambler.currentHand = [];
    } else if(parseInt(statusChanger) === 1 && gambler.status != "Lost"){
        gambler.status = "Active";
        gambler.currentHand = [];
        isGameOn = true;
    }

    if(game.getRound() > 3){
        gambler.status = "Retired";
    }

    console.log(`Gambler Status: ${gambler.status}`);

} while (gambler.status === "Active" || gambler.status === "Won");



























