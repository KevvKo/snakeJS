class MeatBall{

    constructor(){

        this._radius = 15
        this._wasEaten = false
        this._toleranceArea = 5
        
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

    get toleranceArea(){
        return this._toleranceArea
    }

    set x(x){
        this._x = x
    }

    set y(y){
        this._y = y
    }

    newRandomPosition(areaWidth, areaHeight){

        let minWidth = this.toleranceArea + this.radius
        let maxWidth = areaWidth - this.toleranceArea - this.radius

        let minHeight = this.toleranceArea+ this.radius
        let maxHeight = areaHeight - this.toleranceArea - this.radius

        this.x = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)
        this.y = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
    }

    set wasEaten(boolean){
        this._wasEaten = boolean
    }
}

export {MeatBall as default}