class Card {
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }

    getValue(){
        return this.value;
    }

    getSuit(){
        return this.suit;
    }

}


export default Card;