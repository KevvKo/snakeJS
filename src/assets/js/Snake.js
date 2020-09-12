import {store} from '../../App.vue'

class Snake{

    constructor(){
        
        this._stepWidth = 20
        this._dx = 0
        this._dy = this._stepWidth
        this._partRadius = 10
        this._direction = 's'
        this._head = {x: 210, y: 210}
        this._parts = []
        this._headColor = '#005d00'            //dark
        this._firstColor = '#038c00'            //primary
        this._secondColor = '#50bd3d'           //light
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

    get stepWidth(){
        return this._stepWidth
    }

    get dx(){
        return this._dx
    }

    get dy(){
        return this._dy
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

    set dy(dy){
        this._dy = dy
    }

    set dx(dx){
        this._dx = dx
    }

    set direction(key){
        this._direction = key
    }

    set headColor(color){
        this._headColor = color
    }

    set firstColor(color){
        this._firstColor = color
    }

    set secondColor(color){
        this._secondColor = color
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

                    this.dx = -this.stepWidth
                    this.dy = 0
                    this.direction = newDirection
                    break

                case 'd':               //direction right
                
                    this.dx = this.stepWidth
                    this.dy = 0
                    this.direction = newDirection
                    break

                case 'w':               //direction up
                    
                    this.dx = 0
                    this.dy = -this.stepWidth
                    this.direction = newDirection
                    break

                case 's':               //direction down
                    
                    this.dx = 0
                    this.dy = this.stepWidth
                    this.direction = newDirection
                    break

                case 'ArrowLeft':               //direction left

                    this.dx = -this.stepWidth
                    this.dy = 0
                    this.direction = newDirection
                    break

                case 'ArrowRight':               //direction right
                
                    this.dx = this.stepWidth
                    this.dy = 0
                    this.direction = newDirection
                    break

                case 'ArrowUp':               //direction up
                    
                    this.dx = 0
                    this.dy = -this.stepWidth
                    this.direction = newDirection
                    break

                case 'ArrowDown':               //direction down
                    
                    this.dx = 0
                    this.dy = this.stepWidth
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
        let startY = this.head.y - this.stepWidth

        for(let i = 0; i < 10; i++){
            
            let part = {x: startX, y: startY}
            this._parts.push(part)

            startY -= this.stepWidth
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
        let x = this.dx
        let y = this.dy
        let areaHeight =  store.state.height
        let areaWidth = store.state.width

        switch(direction){

            case 'd':               //direction right

                return bodyPart['x'] + x > areaWidth
          
            case 'a':               //direction left

                return bodyPart['x'] < 0

            case 'w':               //direction up

                return bodyPart['y'] < 0
                
            case 's':               //direction down

                return bodyPart['y'] + y > areaHeight

            case 'ArrowRight':               //direction right

                return bodyPart['x'] + x > areaWidth
          
            case 'ArrowLeft':               //direction left

                return bodyPart['x'] < 0

            case 'ArrowUp':               //direction up

                return bodyPart['y'] < 0
                
            case 'ArrowDown':               //direction down

                return bodyPart['y'] + y > areaHeight
        }
    }

    checkBorderProximity(head){

        if(this.borderDetection(head)){

            switch(this.direction){

                case 'd':               //direction right
    
                    head['x'] = -this.partRadius
                    break

                case 'a':               //direction left

                    head['x'] = store.state.width + this.partRadius
                    break

                case 'w':               //direction up
 
                    head['y'] = store.state.height + this.partRadius
                    break

                case 's':               //direction down
                    
                    head['y'] = -this.partRadius
                    break

                case 'ArrowRight':               //direction right
    
                    head['x'] = -this.partRadius
                    break

                case 'ArrowLeft':               //direction left

                    head['x'] = store.state.width + this.partRadius
                    break

                case 'ArrowUp':               //direction up

                    head['y'] = store.state.height + this.partRadius
                    break

                case 'ArrowDown':               //direction down
                    
                    head['y'] = -this.partRadius
                    break
            }
        }
    }

    move(){

        let head = this.head
        let newPart = {x: head.x, y: head.y}

        this.checkBorderProximity(head)

        head.x += this.dx
        head.y += this.dy

        this._parts.unshift(newPart)
        this._parts.pop()
    }

    eatMeatBall(){

        this.addBodyPart()
    }
}

export {Snake as default}