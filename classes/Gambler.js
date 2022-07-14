


class Gambler {
    constructor(name, currentGame){
        this.prize = 0;
        this.currentHand = [];
        this.currentScore = 0;
        this.currentGame = currentGame;
        this.status = "Active";
    }

    getCurrentHand(){
        return this.currentHand;
    }

    getCurrentScore(){
        return this.currentScore;
    }

    getPrize(){
        return this.prize;
    }

    drawCard(cardsDeck, cardDisplayDiv){
        this.currentHand.push(cardsDeck.pop());
        this.addCardToDisplay(cardDisplayDiv);
        // this.setCurrentScore();
        console.log("Your current Hand")
        console.log(this.getCurrentHand());
        console.log("Your current Score");
        console.log(this.getCurrentScore());

    }

    addCardToDisplay(cardDisplayDiv){
        let newImg = document.createElement('img');
        let card = this.getCurrentHand()[this.getCurrentHand().length-1];
        newImg.src = "./cards/" + card.getValue() + "-" + card.getSuit() + ".png";
        console.log("here" ,newImg.src);
        cardDisplayDiv.append(newImg);
    }


    increasePrize(increase){
        this.prize += increase;
        console.log(`Your current Price is: $${this.getPrize()}`);
    }

    decreasePrize(){
        this.prize = 0;
        console.log(`Your current Price is: $${this.getPrize()}`);
    }

    setCurrentScore(){

        if(this.getCurrentHand()[this.getCurrentHand().length-1].value  === "J" ||  
        this.getCurrentHand()[this.getCurrentHand().length-1].value  === "Q" || 
        this.getCurrentHand()[this.getCurrentHand().length-1].value  === "K") {
            this.currentScore += 10;
        } else if (this.getCurrentHand()[this.getCurrentHand().length-1].value  === "A"){

            if(this.getCurrentScore() + 11 <= 18){
                // let chosenAValue = prompt("What should A be worth Enter 1 or 11 : "); //PROMPT CHOSEN VALUE NOT DEFINED
                        // if(parseInt(chosenAValue) === 1){
                        //     this.currentScore += 1;
                        // } else if(parseInt(chosenAValue) === 11){
                        //     this.currentScore += 11;
                        // }

            } else {
                this.currentScore +=1;
            }

        } else {
            this.currentScore += parseInt(this.getCurrentHand()[this.getCurrentHand().length-1].value);
        }

        if(this.getCurrentScore() >= 18 && this.getCurrentScore() <= 21){
            this.currentGame.advanceRound(this);
            console.log(`That´s Because You Rule!   Your current round is: ${this.currentGame.getRound()}`);
            this.status = "Won";
            // this.currentScore = 0;
        } else if(this.getCurrentScore() > 21){
            this.currentGame.resetGame(this);
            console.log(`That Because You Lost :( Your current round is: ${this.currentGame.getRound()}`);
            this.status = "Lost";
        }

    }
}


export default Gambler;