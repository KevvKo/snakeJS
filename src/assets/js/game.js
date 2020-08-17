import Snake from './Snake'

class Game{

    constructor(){

        this.gameRuns = true
        this.canvas = document.querySelector('canvas')
        this.context =  this.canvas.getContext('2d')
        this.snake = new Snake()
    

    }

    init(){
     
    }

    run(){

        if(this.gameRuns){
            this.draw()    
        }
    }

    draw(){

        let snakeParts = this.snake.parts
        console.log(snakeParts)
    }
}

export {Game as default}