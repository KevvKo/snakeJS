class dbHandler{

    constructor(){
        this._storage = window.localStorage
    }

    getUsername(){
        return JSON.parse(this._storage.getItem('highscore'))['name']
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
        return JSON.parse(this._storage.getItem('highscore'))['highscore']
    }

    setHighScore(username, highscore){

        let score = {
            name: username,
            highscore: highscore
        }
     
        // highscores.sort(function(a, b){return b-a})
        this._storage.setItem('highscore', JSON.stringify(score))
    }
}

export {dbHandler as default}