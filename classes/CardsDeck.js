
const Card = require("./Card.js");

class CardsDeck{
    constructor(){
        this.cards = [];
    }

    getCards(){
        return this.cards;
    }

    createNewDeck(){
        const values = ["A","2","3","4","5","6", "7", "8", "9", "10", "J", "Q", "K"];
        const suits = ["S","H","C","D"];

        let temporalDeck = [];

        for(let i = 0; i < values.length; i++){
            for(let j = 0; j < suits.length; j++){
                temporalDeck.push(values[i] + "-" + suits[j])
            }
        }

        this.randomizeDeck(temporalDeck);
    
    }

    randomizeDeck(temporalDeck){

        for(let i = 0; i < temporalDeck.length; i++){
            let j = Math.floor(Math.random() * temporalDeck.length);
            let temporal = temporalDeck[i];
            temporalDeck[i] = temporalDeck[j];
            temporalDeck[j] = temporal;
        }

        for(let i = 0; i < temporalDeck.length; i++){
            let split = temporalDeck[i].split("-");
            let first = split[0];
            let second = split[1];
            this.cards.push(new Card(first,second));
        }
        
    }
    
}

module.exports = CardsDeck;