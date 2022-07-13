
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
        gambler.increasePrice(this.roundPrice);
    }

    resetGame(gambler){
        this.round = 1;
        gambler.decreasePrice();
    }

}

module.exports = Game;