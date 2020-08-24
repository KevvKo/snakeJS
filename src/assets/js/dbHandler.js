class dbHandler{

    constructor(){

        this._score = 0
        this._highScore = 0
    }

    get score(){
        return this._score
    }

    get highScore(){
        return this._highScore
    }

    increaseScore(){
        this._score +=1
    }
}

export {dbHandler as default}