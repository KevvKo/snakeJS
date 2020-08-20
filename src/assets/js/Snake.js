class Snake{

    constructor(width, height){
        
        this._x = 1
        this._y = 0
        this._color = "red"
        this._height = 50
        this._width = 50
        this._direction = 'right'
        this._parts = [{x: 150, y:150}]

        this._areaHeight = height
        this._areaWidth = width
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

    set y(y){
        this._y = y
    }

    set x(x){
        this._x = x
    }

    changeDirection(){

        switch(this.direction){
            case 'left':
                this.x = -1* this.x
                this.y = 0
                break

            case 'right':
                this.x = -this.x
                this.y = 0
                break

            case 'up':
                this.x = 0
                this.y = -1 * this.y
                break

            case 'down':
                this.x = 0
                this.y = -1 * this.y
                break
        }
    }

    // object part: contains coordinates
    checkBordersProximity(){

    }

    move(){

        let snakeParts = this.parts

        for( let i = 0, l = snakeParts.length; i < l ; i++){
            
            let part = snakeParts[i]
            part['x'] += this.x
            part['y'] += this.y

            snakeParts[i] = part

        }
    }
}

export {Snake as default}