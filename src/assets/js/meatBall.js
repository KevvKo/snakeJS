class MeatBall{

    constructor(){

        this._radius = 5
        this._color = 'red'
        this._wasEaten = false
        
    }

    get x(){
        return this._x
    }

    get y(){
        return this._y
    }   

    get color(){
        return this._color
    }

    get radius(){
        return this._radius
    }

    get wasEaten(){
        return this._wasEaten
    }

    set x(x){
        this._x = x
    }

    set y(y){
        this._y = y
    }

    newRandomPosition(areaWidth, areaHeight){
        this.x = Math.floor((Math.random() * areaWidth - this.radius -1) + this.radius + 1)
        this.y = Math.floor((Math.random() * areaHeight - this.radius -1) + this.radius + 1 )
        
    }

    set wasEaten(boolean){
        this._wasEaten = boolean
    }
}

export {MeatBall as default}