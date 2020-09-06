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

    getHighScores(){

        return JSON.parse(this._storage.getItem('highscores'))
    }

    getHighScore(){
        if(this.getPlayerStats()){
            return JSON.parse(this._storage.getItem('playerStats'))['score']
        }   
    }

    setHighScore(){

        let scores = this.getHighScores()

        if(scores === null){
            scores = []
        }

        if(scores.length === 10){
            return
        }

        let score = this.getPlayerStats()
        
        scores.push(score)

        // highscores.sort(function(a, b){return b-a})
        this._storage.setItem('highscores', JSON.stringify(scores))
    }

    getPlayerStats(){
        return JSON.parse(this._storage.getItem('playerStats'))
    }

    setPlayerStats(username, score){
        let player = {
            username: username,
            score: score
        }

        return this._storage.setItem('playerStats', JSON.stringify(player))
    }
}

export {dbHandler as default}