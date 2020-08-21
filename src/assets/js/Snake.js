class Snake{

    constructor(){
        
        this._x = 1
        this._y = 0
        this._headColor = 'red'
        this._bodyColor = 'green'
        this._partRadius = 10
        this._direction = 'd'
        this._head = {x: 170, y:150}
        this._parts = [
            {x: 150, y:150},
            {x: 130, y:150},
            {x: 110, y:150}]

        this._areaHeight = 0
        this._areaWidth = 0
    }

    get bodyColor(){
        return this._bodyColor
    }

    get headColor(){
        return this._headColor
    }

    get x(){
        return this._x
    }

    get y(){
        return this._y
    }

    get areaWidth(){
        return this._areaWidth
    }

    get areaHeight(){
        return this._areaHeight
    }

    get direction(){
        return this._direction
    }

    get parts(){
        return this._parts
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

    //PARAM possibleDirections - array with characters
    randomDirection(possibleDirections){

        let randomIndex = Math.floor(Math.random() *possibleDirections.length)
        return possibleDirections[randomIndex]
    }

    //PARAM newDirection - character
    changeDirection(newDirection){

        switch(newDirection){
            case 'a':               //direction left
                this.x = -1
                this.y = 0
                break

            case 'd':               //direction right
                this.x = 1
                this.y = 0
                break

            case 'w':               //direction up
                this.x = 0
                this.y = -1
                break

            case 's':               //direction down
                this.x = 0
                this.y = 1
                break
        }
    }
    
    //PARAM event - keydown-event
    keyBoardHandler(event){

        let key = event.key
            
        if(key === 'w' || key === 'a' || key === 's' || key === 'd'){

            this.direction = key
            this.changeDirection(key)
        }
    }

    // object part: contains coordinates
    checkBordersProximity(bodyPart){
        let direction = this.direction
        let x = this.x
        let y = this.y
        let areaHeight = document.getElementById('gameArea').height
        let areaWidth = document.getElementById('gameArea').width

        switch(direction){

            case 'd':               //direction right

                if(bodyPart['x'] + x + this.partRadius >= areaWidth){
                    let direction = this.randomDirection(['w', 's'])
                    this.changeDirection(direction)
                }

                break

            case 'a':               //direction left

                if(bodyPart['x'] + x - this.partRadius <= 0){
                    let direction = this.randomDirection(['w', 's'])
                    this.changeDirection(direction)
                }

                break

            case 'w':               //direction up
 
                if(bodyPart['y'] + y  - this.partRadius <= 0){
                    let direction = this.randomDirection(['a', 'd'])
                    this.changeDirection(direction)
                }

                break

            case 's':               //direction down

                if(bodyPart['y'] + y  + this.partRadius >= areaHeight){
                    let direction = this.randomDirection(['a', 'd'])
                    this.changeDirection(direction)
                }

            break

        }
    }

    move(){

        let snakeParts = this.parts

        for( let i = 0, l = snakeParts.length; i < l ; i++){
            
            let part = snakeParts[i]
            
            this.checkBordersProximity(part)

            part['x'] += this.x
            part['y'] += this.y

            snakeParts[i] = part

        }
    }
}

export {Snake as default}