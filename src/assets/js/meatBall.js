class MeatBall{

    constructor(){

        this._radius = 10
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

        let minWidth = 10
        let maxWidth = areaWidth -10

        let minHeight = 10
        let maxHeight = areaHeight - 10

        let x = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)
    
        while( x%10 != 0 ){
            x = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)
        }

        if(x%20 == 0){
            x += 10
        }
      
        this.x = x

        let y = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)

        while (y%10 != 0){
            y = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
        }

        if(y%20 == 0){
            y += 10
        }
      
        this.y = y
    }

    set wasEaten(boolean){
        this._wasEaten = boolean
    }
}

export {MeatBall as default}