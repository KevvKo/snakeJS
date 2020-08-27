import Snake from './Snake'
import Meatball from './meatBall'
import {store} from '../../components/game.vue'

class Game{

    constructor(){

        this.snake = new Snake()
        this.meatball = new Meatball() 
        this.gameSpeed = 25
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
        this.meatball.newRandomPosition(store.state.gameWidth, store.state.gameHeight)
        this.run()
    }

    run(){

        this.canvas = document.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d')

        this.gameLoop = setInterval(function(){

            this.clearCanvas()
            
            let meatball = this.meatball

            if(meatball.wasEaten){

                meatball.wasEaten = false
                this.meatball.newRandomPosition(store.state.gameWidth, this.store.state.gameHeight)
            }

            this.snake.move()
            this.snakeBodyCollision()
            this.checkMeatBallCollision()
            this.drawCanvas()

        }.bind(this), this.gameSpeed)

    }
    
    clearCanvas(){
                    
        this.ctx.clearRect(0,0, store.state.gameWidth, store.state.gameHeight)
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

            let snakeParts = this.snake.parts
            meatBall.newRandomPosition(store.state.gameWidth, store.state.gameHeight)

            for(let i = 0, l = snakeParts.length; i < l; i++){

                let part = snakeParts[i]

                if(part.x === this.meatball.x && part.y === this.meatball.y){
                    i = 0
                    meatBall.newRandomPosition(store.state.gameWidth, store.state.gameHeight)
                }
            }
            
            this.snake.eatMeatBall()
            store.state.scoreHandler.increaseScore()
        }
    }
    
    snakeBodyCollision(){
        
        let head = this.snake.head
        let bodyParts = this.snake.parts

        for(let i = 10, l = bodyParts.length; i < l ; i++){
            
            let part = bodyParts[i]
            let radiusSum = this.snake.partRadius*2
            let c = this.euclidDistance(head, part)
            let headTouchesBody = this.touchedCircle(radiusSum, c)

            if(headTouchesBody){

                clearInterval(this.gameLoop)
            }
            
        }
    }

    euclidDistance(point1, point2){

        let a = point1['x'] - point2['x']
        let b = point1['y'] - point2['y']

        return Math.sqrt(a*a + b*b)
    }

    containsCircle(radiusOne, radiusTwo, c){
        
        return radiusOne >= radiusTwo + c
    }

    touchedCircle(radiusSum, c){

        return radiusSum <= c
    }
}

export {Game as default}