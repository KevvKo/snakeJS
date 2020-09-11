class MeatBall{

    constructor(){

        this._radius = 16
        this._wasEaten = false
        this._outerColor = '#E46565'
        this._innerColor = '#ad343b'
        
    }

    get x(){
        return this._x
    }

    get y(){
        return this._y
    }   

    get outerColor(){
        return this._outerColor
    }

    get innerColor(){
        return this._innerColor
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

        let minWidth = this.radius*3
        let maxWidth = areaWidth - this.radius*3

        let minHeight = this.radius*3
        let maxHeight = areaHeight - this.radius*3

        let x = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)

        while( x%8 != 0){
            x = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)
        }

        this.x = x

        let y = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)

        while (y%8 != 0){
            y = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
        }

        this.y = y

        console.log(this)
    }

    set wasEaten(boolean){
        this._wasEaten = boolean
    }
}

export {MeatBall as default}