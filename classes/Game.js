
class Game {

    constructor(){
        this.round = 1;
    }

    getRound(){
        return this.round;
    }

    advanceRound(){
        this.round++;
    }

    resetGame(gambler){
        this.round = 1;
        gambler.prize = 0;
        gambler.temporalPrize = 0;
    }

}


export default Game;