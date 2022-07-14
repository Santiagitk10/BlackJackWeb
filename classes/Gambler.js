

class Gambler {
    constructor(currentGame){
        this.prize = 0;
        this.currentHand = [];
        this.currentScore = 0;
        this.currentGame = currentGame;
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
        this.setCurrentScore();
        console.log("Your current Hand")
        console.log(this.getCurrentHand());
        console.log("Your current Score");
        console.log(this.getCurrentScore());

    }

    addCardToDisplay(cardDisplayDiv){
        let newImg = document.createElement('img');
        let card = this.getCurrentHand()[this.getCurrentHand().length-1];
        newImg.src = "./cards/" + card.getValue() + "-" + card.getSuit() + ".png";
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
                let valueOfA = document.getElementById("valueOfA");
                valueOfA.style.display = "block";
                let choiceA = document.getElementById("choiceA");
                choiceA.addEventListener("click", function(e){
                    e.preventDefault();
                    let elements = document.getElementsByName("chooseA");

                    let chosenAValue;
                    for(let i = 0; i < elements.length; i++) {
                        if(elements[i].checked){
                            chosenAValue = elements[i].value;
                        }

                        valueOfA.style.display = "none";

                        if(parseInt(chosenAValue) === 1){
                            this.currentScore += 1;
                        } else if(parseInt(chosenAValue) === 11){
                            this.currentScore += 11;
                        }
                    }

                }, false);        
            } else {
                this.currentScore +=1;
            }

        } else {
            this.currentScore += parseInt(this.getCurrentHand()[this.getCurrentHand().length-1].value);
        }

        let message = document.getElementById("message");

        if(this.getCurrentScore() >= 18 && this.getCurrentScore() < 21){
            this.currentGame.advanceRound(this);
            // console.log(`That´s Because You Rule!   Your current round is: ${this.currentGame.getRound()}`);
            message.innerHTML = "Congratulations you Won!"
            // this.currentScore = 0;
        } else if(this.getCurrentScore() > 21){
            this.currentGame.resetGame(this);
            // console.log(`That Because You Lost :( Your current round is: ${this.currentGame.getRound()}`);
            message.innerHTML = "You Lose :("
        }

    }
}


export default Gambler;