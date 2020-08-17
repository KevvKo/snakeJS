class Snake{

    constructor(){
        
        this._color = "red"
        this._height = 50
        this._width = 50

        this._parts = [{x: 10, y:10}]
    }

    get parts(){
        
        return this._parts

    }

    move(){
        
    }


}

export {Snake as default}