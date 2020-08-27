import {store} from '../../components/game'

class Snake{

    constructor(){

        this._gameSpeed = 5
        this._x = this._gameSpeed
        this._y = 0
        this._headColor = 'red'
        this._bodyColor = 'green'
        this._partRadius = 10
        this._direction = 'd'
        this._head = {x: 170, y:150}
        this._parts = []
        this._toleranceArea = 5

    }

    get bodyColor(){
        return this._bodyColor
    }
w
    get headColor(){
        return this._headColor
    }

    get x(){
        return this._x
    }

    get y(){
        return this._y
    }

    get direction(){
        return this._direction
    }

    get parts(){
        return this._parts
    }

    get head(){
        return this._head
    }

    get partRadius(){
        return this._partRadius
    }

    set y(y){
        this._y = y
    }

    set x(x){
        this._x = x
    }

    set direction(key){
        this._direction = key
    }

    get gameSpeed(){
        return this._gameSpeed
    }

    get toleranceArea(){
        return this._toleranceArea
    }

    //PARAM possibleDirections - array with characters
    randomDirection(possibleDirections){

        let randomIndex = Math.floor(Math.random() * possibleDirections.length)
        return possibleDirections[randomIndex]
    }

    //TODO: add diagonal direction-moving
    
    //PARAM event - keydown-event
    keyBoardHandler(event){

        let key = event.key
        let arrowKey = key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight'
        let wasdKey = key === 'w' || key === 'a' || key === 's' || key === 'd'
        
        if(key === this.direction) return

        if(arrowKey || wasdKey){

            let head = this.head
            if(!this.borderDetection(head)) this.changeDirection(key)
        }
    }

    //PARAM newDirection - character
    changeDirection(newDirection){

        let isDirectionInverse = this.isDirectionInverse(newDirection)
 
        if(!isDirectionInverse){
            
            switch(newDirection){
 
                case 'a':               //direction left

                    this.x = -this.gameSpeed
                    this.y = 0
                    this.direction = newDirection
                    break

                case 'd':               //direction right
                
                    this.x = this.gameSpeed
                    this.y = 0
                    this.direction = newDirection
                    break

                case 'w':               //direction up
                    
                    this.x = 0
                    this.y = -this.gameSpeed
                    this.direction = newDirection
                    break

                case 's':               //direction down
                    
                    this.x = 0
                    this.y = this.gameSpeed
                    this.direction = newDirection
                    break

                case 'ArrowLeft':               //direction left

                    this.x = -this.gameSpeed
                    this.y = 0
                    this.direction = newDirection
                    break

                case 'ArrowRight':               //direction right
                
                    this.x = this.gameSpeed
                    this.y = 0
                    this.direction = newDirection
                    break

                case 'ArrowUp':               //direction up
                    
                    this.x = 0
                    this.y = -this.gameSpeed
                    this.direction = newDirection
                    break

                case 'ArrowDown':               //direction down
                    
                    this.x = 0
                    this.y = this.gameSpeed
                    this.direction = newDirection
                    break
            }
        }
    }

    isDirectionInverse(key){

        let directionChange = this.direction + key
        switch(directionChange){

            case 'da' : 
            return true

            case 'ad' : 
            return true
            
            case 'ws' : 
            return true
            
            case 'sw' : 
            return true

            case 'ArrowUpArrowDown' : 
            return true

            case 'ArrowDownArrowUp' : 
            return true
            
            case 'ArrowLeftArrowRight' : 
            return true
            
            case 'ArrowRightArrowLeft' : 
            return true

            case 'sArrowUp' : 
            return true

            case 'ArrowUps' : 
            return true
            
            case 'dArrowLeft' : 
            return true
            
            case 'ArrowLeftd' : 
            return true

            case 'aArrowRight' : 
            return true
            
            case 'ArrowRighta' : 
            return true

            case 'wArrowDown' : 
            return true
            
            case 'ArrowDownw' : 
            return true
        }
    }

    createBody(){

        let head = this.head
        let part = {x: head['x'] -1, y:head['y']}
        this._parts.push(part)

        for(let i = 0, l = 20; i < l ; i++){
            let lastPart = this.parts.slice(-1)
            let part = {x: lastPart['x'] - 1, y:lastPart['y']}
            this._parts.push(part)
    
        }
    }

    addBodyPart(){

        for(let i = 0; i < 20; i++){
            let lastPart = this.parts.slice(-1)
            this._parts.push(lastPart)
        }
    }

    // object part: contains coordinates
    borderDetection(bodyPart){

        let direction = this.direction
        let x = this.x
        let y = this.y
        let areaHeight =  store.state.gameHeight
        let areaWidth = store.state.gameWidth

        switch(direction){

            case 'd':               //direction right

                return bodyPart['x'] + x + this.partRadius == areaWidth - this.toleranceArea
          

            case 'a':               //direction left

                return bodyPart['x'] + x - this.partRadius == this.toleranceArea

            case 'w':               //direction up
                return bodyPart['y'] + y  - this.partRadius == this.toleranceArea
                
            case 's':               //direction down

                return bodyPart['y'] + y  + this.partRadius == areaHeight - this.toleranceArea 
        }
    }

    checkBorderProximity(head){

        if(this.borderDetection(head)){

            let direction = this.direction
            let newDirection = ''

            let vertical = ['w', 's']
            let horizontal = ['a', 'd']

            //while(this.isDirectionInverse(this.direction)){

                if(direction === 'a' || direction === 'd') newDirection = this.randomDirection(vertical)
                else   newDirection = this.randomDirection(horizontal)

                this.changeDirection(newDirection)
            //}
        }
    }

    move(){

        let x = this.x
        let y = this.y

        let head = this.head

        this.checkBorderProximity(head)

        let newHead = {x: head['x'], y: head['y']}

        head['x'] += x
        head['y'] += y
        
        this.parts.unshift(newHead)
        this.parts.pop()

    }

    eatMeatBall(){

        this.addBodyPart()
    }
}

export {Snake as default}