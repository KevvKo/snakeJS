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
        
        let highscores = this.getHighScore()

        if(highscores === undefined || highscores === null){
     
            highscores = []
            highscores.push(highscore)
            this._storage.setItem('highscore', highscores)
            
            return
        }

        if(highscores.length < 10){

            highscores.push(highscore)
            highscores.sort(function(a, b){return b-a})
            this._storage.setItem('highscore', highscore)

            return
        }

        highscores.sort(function(a, b){return a-b})

        for(let i = 0, l = highscores.length; i < l; i++){
            
            let currentValue = highscores[i]

            if(highscore > currentValue) {

                highscores[i] = highscore
                break
            }
        }

        highscores.sort(function(a, b){return b-a})
        this._storage.setItem('highscore', highscore)
    }
}

export {dbHandler as default}