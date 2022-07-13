
const prompt = require('prompt-sync')();

class Gambler {
    constructor(name, currentGame){
        this.name = name;
        this.price = 0;
        this.currentHand = [];
        this.currentScore = 0;
        this.currentGame = currentGame;
        this.status = "Active";
    }

    getName(){
        return this.name;
    }

    getCurrentHand(){
        return this.currentHand;
    }

    getCurrentScore(){
        return this.currentScore;
    }

    getPrice(){
        return this.price;
    }

    drawCard(cardsDeck){
        this.currentHand.push(cardsDeck.pop());
        this.setCurrentScore();
        console.log("Your current Hand")
        console.log(this.getCurrentHand());
        console.log("Your current Score");
        console.log(this.getCurrentScore());

    }


    increasePrice(increase){
        this.price += increase;
        console.log(`Your current Price is: $${this.getPrice()}`);
    }

    decreasePrice(){
        this.price = 0;
        console.log(`Your current Price is: $${this.getPrice()}`);
    }

    setCurrentScore(){

        if(this.getCurrentHand()[this.getCurrentHand().length-1].value  === "J" ||  
        this.getCurrentHand()[this.getCurrentHand().length-1].value  === "Q" || 
        this.getCurrentHand()[this.getCurrentHand().length-1].value  === "K") {
            this.currentScore += 10;
        } else if (this.getCurrentHand()[this.getCurrentHand().length-1].value  === "A"){

            if(this.getCurrentScore() + 11 <= 18){
                let chosenAValue = prompt("What should A be worth Enter 1 or 11 : ");
                        if(parseInt(chosenAValue) === 1){
                            this.currentScore += 1;
                        } else if(parseInt(chosenAValue) === 11){
                            this.currentScore += 11;
                        }

            } else {
                this.currentScore +=1;
            }

        } else {
            this.currentScore += parseInt(this.getCurrentHand()[this.getCurrentHand().length-1].value);
        }

        if(this.getCurrentScore() >= 18 && this.getCurrentScore() <= 21){
            this.currentGame.advanceRound(this);
            console.log(`That´s Because You Rule ${this.getName()}!  Your current round is: ${this.currentGame.getRound()}`);
            this.status = "Won";
            // this.currentScore = 0;
        } else if(this.getCurrentScore() > 21){
            this.currentGame.resetGame(this);
            console.log(`That Because You Lost :( Your current round is: ${this.currentGame.getRound()}`);
            this.status = "Lost";
        }

    }
}

module.exports = Gambler;