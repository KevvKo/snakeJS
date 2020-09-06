class dbHandler{

    constructor(){
        this._storage = window.localStorage
    }

    getUsername(){
        
        if(this.getPlayerStats()){
            return JSON.parse(this._storage.getItem('playerStats'))['username']
        }
    }

    getSnakeColor(){
        return this._storage.getItem('snakecolor')
    }

    setSnakeColor(snakeColor){
        this._storage.setItem('snakecolor', snakeColor)
    }

    getHighScore(){
        if(this.getPlayerStats()){
            return JSON.parse(this._storage.getItem('playerStats'))['highscore']
    }   }

    getHighScores(){

        return JSON.parse(this._storage.getItem('highscore'))
    }

    setHighScore(username, highscore){

        let scores = this.getHighScores()

        if(scores === null){
            scores = []
        }

        if(scores.length === 10){
            return
        }

        let score = {
            name: username,
            highscore: highscore
        }
        
        scores.push(score)
        // highscores.sort(function(a, b){return b-a})
        this._storage.setItem('highscore', JSON.stringify(scores))
    }

    getPlayerStats(){
        return JSON.parse(this._storage.getItem('playerStats'))
    }

    setPlayerStats(playerStats){
        return this._storage.setItem('playerStats', JSON.stringify(playerStats))
    }
}

export {dbHandler as default}