

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
        console.log("Draw Card Call") //TO BE DELETED
        this.currentHand.push(cardsDeck.pop());
        console.log(this.getCurrentHand()); //TO BE DELETED
        this.setCurrentScore();
        this.addCardToDisplay(cardDisplayDiv);
    }

    addCardToDisplay(cardDisplayDiv){
        let newImg = document.createElement('img');
        let card = this.getCurrentHand()[this.getCurrentHand().length-1];
        console.log("card to display", card); //TO BE DELETED
        newImg.src = "./cards/" + card.getValue() + "-" + card.getSuit() + ".png";
        cardDisplayDiv.append(newImg);
    }


    increasePrize(increase){
        this.prize += increase;
        // console.log(`Your current Price is: $${this.getPrize()}`);
    }

    decreasePrize(){
        this.prize = 0;
        // console.log(`Your current Price is: $${this.getPrize()}`);
    }

    setCurrentScore(){

        let message = document.getElementById("message");
        let drawCardButton = document.getElementById("btnDraw");
        let score = document.getElementById("score");
 

        if(this.getCurrentHand()[this.getCurrentHand().length-1].value  === "J" ||  
        this.getCurrentHand()[this.getCurrentHand().length-1].value  === "Q" || 
        this.getCurrentHand()[this.getCurrentHand().length-1].value  === "K") {
            this.currentScore += 10;
        } else if (this.getCurrentHand()[this.getCurrentHand().length-1].value  === "A"){

            if(this.getCurrentScore() + 11 <= 18){
                let valueOfA = document.getElementById("valueOfA");
                drawCardButton.disabled = true;
                valueOfA.style.display = "block";
                let choiceA = document.getElementById("choiceA");
                choiceA.addEventListener("click", function(e){
                    e.preventDefault();
                    let elements = document.getElementsByName("chooseA");

                    let chosenAValue;

                    for(let i = 0; i < elements.length; i++) {
                        if(elements[i].checked){
                            chosenAValue = elements[i].value;
                            break;
                        }
                    }
                        console.log(chosenAValue) //TO DELETE

                        valueOfA.style.display = "none";

                        if(parseInt(chosenAValue) === 1){
                            console.log(this.parentNode);
                            this.currentScore += 1;
                        } else if(parseInt(chosenAValue) === 11){
                            this.currentScore += 11;
                        }

                        console.log(this.currentScore);  //TO DELETE
                    

                    drawCardButton.disabled = false;

                    // score.innerHTML = this.getCurrentScore();

                }, false);        
            } else {
                this.currentScore +=1;
            }

        } else {
            this.currentScore += parseInt(this.getCurrentHand()[this.getCurrentHand().length-1].value);
        }

        score.innerHTML = this.getCurrentScore();

        if(this.getCurrentScore() >= 18 && this.getCurrentScore() < 21){
            this.currentGame.advanceRound(this);
           //FALTA MOSTRAR LA RONDA ACTUAL AQUÍ
            message.innerHTML = "Congratulations you Won!"
            drawCardButton.disabled = true;
            this.currentScore = 0;
        } else if(this.getCurrentScore() > 21){
            this.currentGame.resetGame(this);
            
            // console.log(`That Because You Lost :( Your current round is: ${this.currentGame.getRound()}`);
            message.innerHTML = "You Lose :("
            drawCardButton.disabled = true;
            this.currentScore = 0;
        }

    }
}


export default Gambler;