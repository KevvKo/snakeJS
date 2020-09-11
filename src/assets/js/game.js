import Snake from './Snake'
import Meatball from './meatBall'
import {store} from '../../App.vue'

class Game{

    constructor(){

        this.snake = new Snake()
        this.meatball = new Meatball() 
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
        this.meatball.newRandomPosition(store.state.width, store.state.height)
        
        this.run()
    }

    run(){

        store.commit('checkHighScore')
        this.clearCanvas()
        this.drawCanvas()

        let meatball = this.meatball

        if(meatball.wasEaten){

            meatball.wasEaten = false
            this.meatball.newRandomPosition(store.state.width, this.store.state.height)
        }

        window.requestAnimationFrame(() => this.update())

    }
    
    update(){

        if(!store.state.showGameOver){
     
            this.snake.move()
            this.snakeBodyCollision()
            this.checkMeatBallCollision()
            this.clearCanvas()
            this.drawCanvas()
            window.requestAnimationFrame(() => this.update())
        }
    }

    clearCanvas(){
                    
        store.state.ctx.clearRect(0,0, store.state.width, store.state.height)
    }

    drawCanvas(){

        this.drawMeatBall()
        this.drawBody()
        this.drawHead()
    }

    drawHead(){

        let snake = this.snake

        store.state.ctx.fillStyle = snake.headColor;
        store.state.ctx.beginPath();
        store.state.ctx.arc(snake.head.x, snake.head.y , this.snake.partRadius, 0, 2 * Math.PI, false);
        store.state.ctx.fill();
    }

    drawBody(){

        let snakeParts = this.snake.parts

        for( let i = 0, l = snakeParts.length; i < l ; i++){
            
            if(i%2) store.state.ctx.fillStyle = this.snake.firstColor;
            else store.state.ctx.fillStyle = this.snake.secondColor;
       
            let part = snakeParts[i]   

            store.state.ctx.beginPath();
            store.state.ctx.arc(part.x, part.y , this.snake.partRadius, 0, 2 * Math.PI, false);
            store.state.ctx.fill();
            store.state.ctx.closePath()
        }
    }

    drawMeatBall(){

        let meatball = this.meatball

        store.state.ctx.beginPath();
        store.state.ctx.arc(meatball.x, meatball.y , meatball.radius, 0, 2 * Math.PI, false);
        store.state.ctx.fillStyle = meatball.outerColor;
        store.state.ctx.fill();

        store.state.ctx.beginPath();
        store.state.ctx.arc(meatball.x, meatball.y , meatball.radius/2, 0, 2 * Math.PI, false);
        store.state.ctx.fillStyle = meatball.innerColor;
        store.state.ctx.fill();
    }

    checkMeatBallCollision(){

        let meatBall = this.meatball
        let head = this.snake.head

        let euclidDistance = this.euclidDistance(head, meatBall)
        
        
        let meatIsEaten = this.containsCircle(this.snake.partRadius, meatBall.radius, euclidDistance)
        
        if(meatIsEaten){

            let snakeParts = this.snake.parts
            meatBall.newRandomPosition(store.state.width, store.state.height)

            for(let i = 0, l = snakeParts.length; i < l; i++){

                let part = snakeParts[i]

                if(part.x === this.meatball.x && part.y === this.meatball.y){
                    i = 0
                    meatBall.newRandomPosition(store.state.width, store.state.height)
                }
            }
            
            this.snake.eatMeatBall()
            store.state.scoreHandler.increaseScore()

        }
    }
    
    snakeBodyCollision(){
        
        let head = this.snake.head
        let bodyParts = this.snake.parts

        // starting add the 28. part, cause 
        //      1, all parts in range 0-19 intersect with the head => 1px distance
        //      2. by changing the direction, the 27. part of the body touches the head 

        for(let i = 10, l = bodyParts.length; i < l ; i++){
            
            let part = bodyParts[i]
            let radiusSum = this.snake.partRadius*2
            let c = this.euclidDistance(head, part)
            let headTouchesBody = this.touchedCircle(radiusSum, c)
            
            if(headTouchesBody){

                store.commit('finisheGame')
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

        return radiusSum >= c
    }
}

export {Game as default}