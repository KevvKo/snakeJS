class WebController{

    rescaleCanvas(){

        let canvas = document.querySelector('canvas')
        let gameContent = document.querySelector('.game')


        canvas.width = gameContent.offsetWidth
        window.addEventListener('resize', this.rescaleCanvas)
    
    }

    rescaleMainMenu(){

        let canvas = document.querySelector('canvas')
        let scorebar = document.querySelector('.scorebar')
        let mainMenu = document.querySelector('.mainMenu')

        mainMenu.style.height = canvas.offsetHeight + scorebar.offsetHeight + 'px'

    }
}

export {WebController as default}