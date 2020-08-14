class GameController{

    constructor(){
        return
    }

    rescaleCanvas(){

        let canvas = document.querySelector('canvas')
        let gameBoard = document.querySelector('.gameBoard')
        canvas.width = gameBoard.offsetWidth
    
    }

    run(){
        this.rescaleCanvas()
        window.addEventListener('resize', this.rescaleCanvas)
    }
}

export {GameController as default}