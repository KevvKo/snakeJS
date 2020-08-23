import Snake from './Snake'
import Meatball from './meatBall'

class Game{

    constructor(){

        this.snake = new Snake()
        this.meatball = new Meatball()


        //canvas need time for rendering to be detected
        document.addEventListener('DOMContentLoaded', function(){
            this.canvas = document.querySelector('canvas')
            this.ctx = this.canvas.getContext('2d')

            this._gameAreaWidth = this.canvas.width
            this._gameAreaHeight = this.canvas.height
        }.bind(this))
        
        this.gameSpeed = 30 //25
    }

    get gameAreaWidth(){
        return this._gameAreaWidth
    }

    get gameAreaHeight(){
        return this._gameAreaHeight
    }

    init(){

        document.addEventListener('keydown', function(event){
            
            this.snake.keyBoardHandler(event)
        }.bind(this))

        this.snake.createBody()
        this.run()
    }

    run(){

        this.gameLoop = setInterval(function(){
            
            this.clearCanvas()
            
            let meatball = this.meatball

            if(meatball.wasEaten){

                meatball.wasEaten = false
                this.meatball.newRandomPosition(this.gameAreaWidth, this.gameAreaHeight)
            }

            this.snake.move()
            this.snakeBodyCollision()
            this.checkMeatBallCollision()
            this.drawCanvas()

        }.bind(this), this.gameSpeed)

    }
    
    clearCanvas(){
                    
        this.ctx.clearRect(0,0, this.gameAreaWidth, this.gameAreaHeight)
    }

    drawCanvas(){

        this.drawMeatBall()
        this.drawBody()
        this.drawHead()
    }

    drawHead(){

        let snake = this.snake
        this.ctx.fillStyle = this.snake.headColor
        this.ctx.beginPath()
        this.ctx.arc(snake.head['x'], snake.head['y'], snake.partRadius, 0, 2 * Math.PI)
        this.ctx.fill()
    }

    drawBody(){

        let snakeParts = this.snake.parts
        this.ctx.fillStyle = this.snake.bodyColor
        for( let i = 0, l = snakeParts.length; i < l ; i++){
            
            let part = snakeParts[i]
            this.ctx.beginPath()
            this.ctx.arc(part['x'], part['y'], this.snake.partRadius, 0, 2 * Math.PI)
            this.ctx.fill()

        }
    }

    drawMeatBall(){

        let meatball = this.meatball

        this.ctx.fillStyle = meatball.color
        this.ctx.beginPath()
        this.ctx.arc( meatball.x, meatball.y, meatball.radius , 0, 2 * Math.PI)
        this.ctx.fill()
    }

    checkMeatBallCollision(){

        let meatBall = this.meatball
        let head = this.snake.head

        let euclidDistance = this.euclidDistance(head, meatBall)
        
        
        let meatIsEaten = this.containsCircle(this.snake.partRadius, meatBall.radius, euclidDistance)
        
        if(meatIsEaten){

            this.gameSpeed -= 0.1
            meatBall.newRandomPosition(this.gameAreaWidth, this.gameAreaHeight)
            this.snake.eatMeatBall()

        }
    }
    
    snakeBodyCollision(){
        
        let head = this.snake.head
        let x = head.x
        let y = head.y
        let bodyParts = this.snake.parts

        bodyParts.forEach(function(part){

            if(x == part.x && y ==part.y){

                clearInterval(this.gameLoop)
            }
            
        }.bind(this))
    }

    euclidDistance(point1, point2){

        let a = point1['x'] - point2['x']
        let b = point1['y'] - point2['y']

        return Math.sqrt(a*a + b*b)
    }

    containsCircle(radiusOne, radiusTwo, c){
        
        return radiusOne >= radiusTwo + c
    }
}

const game = new Game()
export {game}