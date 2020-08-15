class WebController{

    rescaleCanvas(){

        let canvas = document.querySelector('canvas')
        let gameBoard = document.querySelector('.gameBoard')
        canvas.width = gameBoard.offsetWidth
    
    }

    rescaleMainMenu(){

        let canvas = document.querySelector('canvas')
        let scorebar = document.querySelector('.scorebar')
        let mainMenu = document.querySelector('.mainMenu')

        mainMenu.style.height = canvas.offsetHeight + scorebar.offsetHeight + 'px'

    }

    addRenderingImprovements(){

        this.rescaleCanvas()
        window.addEventListener('resize', this.rescaleCanvas)
        
    }

}

export {WebController as default}