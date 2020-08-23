class Snake{

    constructor(){
        
        this._x = 1
        this._y = 0
        this._headColor = 'red'
        this._bodyColor = 'green'
        this._partRadius = 10
        this._direction = 'd'
        this._head = {x: 170, y:150}
        this._parts = []
        this._areaHeight = 0
        this._areaWidth = 0

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

    //PARAM possibleDirections - array with characters
    randomDirection(possibleDirections){

        let randomIndex = Math.floor(Math.random() *possibleDirections.length)
        return possibleDirections[randomIndex]
    }

    //TODO: add diagonal direction-moving
    
    //PARAM event - keydown-event
    keyBoardHandler(event){

        let key = event.key

        if(key === this.direction) return

        if(key === 'w' || key === 'a' || key === 's' || key === 'd'){

            this.changeDirection(key)
        }
    }

    //PARAM newDirection - character
    changeDirection(newDirection){

        let isDirectionInverse = this.isDirectionInverse(newDirection)
 
        if(!isDirectionInverse){
            switch(newDirection){
                case 'a':               //direction left

                    this.x = -1
                    this.y = 0
                    this.direction = 'a'
                    break

                case 'd':               //direction right
                
                    this.x = 1
                    this.y = 0
                    this.direction = 'd'
                    break

                case 'w':               //direction up
                    
                    this.x = 0
                    this.y = -1
                    this.direction = 'w'
                    break

                case 's':               //direction down
                    
                    this.x = 0
                    this.y = 1
                    this.direction = 's'
                    break

                // case 'a' & 'w':         //direction north-west
                //     this.x = -1
                //     this.y = -1
                //     break

                // case 'a' & 's':         //direction south-west
                //     this.x = -1
                //     this.y = 1
                //     break
                
                // case 'w' & 'd':         //direction north-east
                //     this.x = 1
                //     this.y = -1
                //     break
                
                // case 's' & 'd':         //direction south-east
                //     this.x = 1
                //     this.y = 1
                //     break
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
        }
    }

    createBody(){
        let head = this.head
        let part = {x: head['x'], y:head['y']}
        this._parts.push(part)

        for(let i = 0, l = 100; i < l ; i++){
            let lastPart = this.parts.slice(-1)
            let part = {x: lastPart['x'] - 1, y:lastPart['y']}
            this._parts.push(part)
    
        }
    }

    addBodyPart(){
        let lastPart = this.parts.slice(-1)
        this._parts.push(lastPart)
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

        let x = this.x
        let y = this.y

        let head = this.head

        this.checkBordersProximity(head)
    
        head['x'] += x
        head['y'] += y
        
        let newHead = {x: head['x'], y: head['y']}

        this.parts.unshift(newHead)
        this.parts.pop()

    }

    eatMeatBall(){

    }
}

export {Snake as default}