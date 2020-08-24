class Score{
    
    constructor(){

        this._score = 0
        this._highscore = 0
    }

    get highscore(){
        return this._highscore
    }

    get score(){
        return this._score
    }


    increaseScore(){
        this._score +=1
    }
}

export{Score as default}