
class Game {

    constructor(){
        this.roundPrice = 1000;
        this.round = 1;
    }

    getRound(){
        return this.round;
    }

    advanceRound(gambler){
        this.round++;
        gambler.increasePrize(this.roundPrice);
    }

    resetGame(gambler){
        this.round = 1;
        gambler.decreasePrize();
    }

    startGame(gambler, cardsDeck, cardDisplayDiv){
        for(let i = 0; i < 2; i++){
            gambler.drawCard(cardsDeck, cardDisplayDiv);
        }
        
    }

}


export default Game;