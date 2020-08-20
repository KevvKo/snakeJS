import Snake from './Snake'

class Game{

    constructor(){

        this.gameRuns = true
        this.snake = new Snake()

        //canvas need time for rendering to be detected
        document.addEventListener('DOMContentLoaded', function(){
            this.canvas = document.querySelector('canvas')
            this.ctx = this.canvas.getContext('2d')

            this.gameAreaWidth = this.canvas.width
            this.gameAreaHeight = this.canvas.height
        }.bind(this))

        this.height = 20
        this.width = 20
        
        this.gameSpeed = 1000 //25
    }

    init(){
        this.run()
    }

    run(){

        setInterval(function(){
            this.clearCanvas()
            this.snake.move()
            this.drawCanvas()    
        }.bind(this), this.gameSpeed)

    }
    
    clearCanvas(){

        let snakeParts = this.snake.parts

        for( let i = 0, l = snakeParts.length; i < l ; i++){
            
            let part = snakeParts[i]
            this.ctx.clearRect( part['x'], part['y'], this.width, this.height)

        }
    }

    drawCanvas(){

        let snakeParts = this.snake.parts
        this.ctx.fillStyle = 'red'

        for( let i = 0, l = snakeParts.length; i < l ; i++){
            
            let part = snakeParts[i]
            this.ctx.fillRect( part['x'], part['y'], this.width, this.height)

        }
    }
}

const game = new Game()
export {game}