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
        let playerStats = this.getPlayerStats()

        if(scores === null){
            scores = []
        }


        if(scores.length < 10){
            playerStats.id = scores.length + 1
            scores.push(playerStats)

            scores.sort(function(a, b) {
                return b.score - a.score
            });

            this._storage.setItem('highscores', JSON.stringify(scores))

            return
        }

        for(let i = 9; i >= 0; i--){

            let tempScore = playerStats['score']
            let currentHighscore = scores[i]['score']
            console.log(scores[i])

            if(tempScore > currentHighscore){
                
                playerStats.id = scores[i].id
                scores[i] = playerStats
                break
            }
        }

        scores.sort(function(a, b) {
            return b.score - a.score
        });

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