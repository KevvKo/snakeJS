class Snake{

    constructor(){
        
        this.x = + 1
        this.y = 0
        this._color = "red"
        this._height = 50
        this._width = 50
        this._direction = 'left'
        this._parts = [{x: 10, y:10}]
    }

    get direction(){

        return this._direction
    }

    get parts(){
        
        return this._parts
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