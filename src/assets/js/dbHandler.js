class dbHandler{

    constructor(){
        this._storage = window.localStorage
    }

    getUsername(){
        return this._storage.getItem('username')
    }

    setUsername(name){
        this._storage.setItem('username', name)
    }

    getSnakeColor(){
        return this._storage.getItem('snakecolor')
    }

    setSnakeColor(snakeColor){
        this._storage.setItem('snakecolor', snakeColor)
    }

    getHighScore(){
        return this._storage.getItem('highscore')
    }

    setHighScore(highscore){
        this._storage.setItem('highscore', highscore)
    }
}

export {dbHandler as default}