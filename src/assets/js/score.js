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

    set highscore(score){
        this._highscore = score
    }

    increaseScore(){
        this._score +=10

        if(this._score > this._highscore) this._highscore= this._score
    }


}

export{Score as default}