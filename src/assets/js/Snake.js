import {store} from '../../App.vue'

class Snake{

    constructor(){
        
        this._snakeSpeed = 1
        this._snakeDistance = 16
        this._x = 0
        this._y = this._snakeSpeed
        this._partRadius = 16
        this._direction = 's'
        this._head = {x: 170, y:200}
        this._parts = []
        this._toleranceArea = 5
        this._headColor = '#007819'
        this._firstColor = '#08a949'
        this._secondColor = '#57dc77'
    }

    get headColor(){
        return this._headColor
    }

    get firstColor(){
        return this._firstColor
    }

    get secondColor(){
        return this._secondColor
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

    get snakeSpeed(){
        return this._snakeSpeed
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

            this.changeDirection(key)
        }
    }

    //PARAM newDirection - character
    changeDirection(newDirection){

        let isDirectionInverse = this.isDirectionInverse(newDirection)
 
        if(!isDirectionInverse){
            
            switch(newDirection){
 
                case 'a':               //direction left

                    this.x = -this.snakeSpeed
                    this.y = 0
                    this.direction = newDirection
                    break

                case 'd':               //direction right
                
                    this.x = this.snakeSpeed
                    this.y = 0
                    this.direction = newDirection
                    break

                case 'w':               //direction up
                    
                    this.x = 0
                    this.y = -this.snakeSpeed
                    this.direction = newDirection
                    break

                case 's':               //direction down
                    
                    this.x = 0
                    this.y = this.snakeSpeed
                    this.direction = newDirection
                    break

                case 'ArrowLeft':               //direction left

                    this.x = -this.snakeSpeed
                    this.y = 0
                    this.direction = newDirection
                    break

                case 'ArrowRight':               //direction right
                
                    this.x = this.snakeSpeed
                    this.y = 0
                    this.direction = newDirection
                    break

                case 'ArrowUp':               //direction up
                    
                    this.x = 0
                    this.y = -this.snakeSpeed
                    this.direction = newDirection
                    break

                case 'ArrowDown':               //direction down
                    
                    this.x = 0
                    this.y = this.snakeSpeed
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
        
        let startX = this.head.x
        let startY = this.head.y - this.partRadius

        for(let i = 0; i < 20; i++){
            
            let part = {x: startX, y: startY}
            this._parts.push(part)

            startY -= this.partRadius
        }
    }

    addBodyPart(){
        
        //let head = this.head
        let lastPart = this._parts.slice(-1)[0]
        let newPart = {x: lastPart.x, y: lastPart.y}
        this._parts.push(newPart)
    }

    // object part: contains coordinates
    borderDetection(bodyPart){

        let direction = this.direction
        let x = this.x
        let y = this.y
        let areaHeight =  store.state.height
        let areaWidth = store.state.width

        switch(direction){

            case 'd':               //direction right

                return bodyPart['x'] + x  >= areaWidth
          
            case 'a':               //direction left

                return bodyPart['x'] + x <= 0

            case 'w':               //direction up

                return bodyPart['y'] + y <= 0
                
            case 's':               //direction down

                return bodyPart['y'] + y >= areaHeight

            case 'ArrowRight':               //direction right

                return bodyPart['x'] + x >= areaWidth
          
            case 'ArrowLeft':               //direction left

                return bodyPart['x'] + x <= 0

            case 'ArrowUp':               //direction up

                return bodyPart['y'] + y <= 0
                
            case 'ArrowDown':               //direction down

                return bodyPart['y'] + y >= areaHeight
        }
    }

    checkBorderProximity(head){

        if(this.borderDetection(head)){

            switch(this.direction){

                case 'd':               //direction right
    
                    head['x'] = this.partRadius
                    break

                case 'a':               //direction left

                    head['x'] = store.state.width
                    break

                case 'w':               //direction up

                    head['y'] = store.state.height
                    break

                case 's':               //direction down
                    
                    head['y'] = 0
                    break

                    case 'ArrowRight':               //direction right
    
                    head['x'] = this.partRadius
                    break

                case 'ArrowLeft':               //direction left

                    head['x'] = store.state.width
                    break

                case 'ArrowUp':               //direction up

                    head['y'] = store.state.height
                    break

                case 'ArrowDown':               //direction down
                    
                    head['y'] = 0
                    break
            }
        }
    }

    move(){

        let head = this.head
        let newPart = {x: head.x, y: head.y}

        head.x += this.x
        head.y += this.y

        this.checkBorderProximity(head)

        this._parts.unshift(newPart)
        this._parts.pop()
    }

    eatMeatBall(){

        this.addBodyPart()
    }
}

export {Snake as default}