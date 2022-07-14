

class Gambler {
    constructor(currentGame){
        this.prize = 0;
        this.temporalPrize = 0;
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
        console.log(this.getCurrentHand()); //TO BE DELETED
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


    setCurrentScore(){

        let message = document.getElementById("message");
        let drawCardButton = document.getElementById("btnDraw");
        let score = document.getElementById("score");
        let cardDisplay = document.getElementById("cardDisplay");
        let NewGameButton = document.getElementById("btnNewGame");
 

        if(this.getCurrentHand()[this.getCurrentHand().length-1].value  === "J" ||  
        this.getCurrentHand()[this.getCurrentHand().length-1].value  === "Q" || 
        this.getCurrentHand()[this.getCurrentHand().length-1].value  === "K") {
            this.currentScore += 10;
            this.temporalPrize += 500;
        } else if (this.getCurrentHand()[this.getCurrentHand().length-1].value  === "A"){

            if(this.getCurrentScore() + 11 <= 21){
                this.currentScore += 11;      
            } else {
                this.currentScore +=1;
            }

            this.temporalPrize += 500;

        } else {
            this.currentScore += parseInt(this.getCurrentHand()[this.getCurrentHand().length-1].value);
            this.temporalPrize += 100;
        }

        score.innerHTML = this.getCurrentScore();

        if(this.getCurrentScore() >= 18 && this.getCurrentScore() < 21){
            this.currentGame.advanceRound(this);
           //FALTA MOSTRAR LA RONDA ACTUAL AQUÍ
            message.innerHTML = "Congratulations you Won!"
            drawCardButton.disabled = true;
            this.currentScore = 0;
            this.prize += this.temporalPrize;
            this.temporalPrize = 0;
            NewGameButton.innerHTML = "Next Round";


        } else if(this.getCurrentScore() === 21){
            this.currentGame.advanceRound(this);
            message.innerHTML = "BlackJack!!!!"
            drawCardButton.disabled = true;
            this.currentScore = 0;
            this.temporalPrize += 1000;
            this.prize += this.temporalPrize;
            this.temporalPrize = 0;
            NewGameButton.innerHTML = "Next Round";
        }
        else if(this.getCurrentScore() > 21){
            this.currentGame.resetGame(this);
            // console.log(`That Because You Lost :( Your current round is: ${this.currentGame.getRound()}`);
            message.innerHTML = "You Lose :("
            drawCardButton.disabled = true;
            this.currentScore = 0;
            this.temporalPrize = 0;
            this.prize = 0;
            NewGameButton.innerHTML = "New Game";

        }

    }
}


export default Gambler;