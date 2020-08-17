<template>
    <div class="game">
        <mainMenu title="SnakeJS"/>
        <div class="gameArea" >
            <scorebar/>
            <gameBoard/>
        </div>
    </div>
</template>

<script>

    //classes imports
    import Game from '../assets/js/game.js'

    //component imports
    import scorebar from './scorebar'
    import mainMenu from './mainMenu'
    import gameBoard from './gameBoard'
    
    export default {

        name: 'game',

        components: {

            scorebar,
            mainMenu,
            gameBoard
        },

        methods:{

            load(){
                Game.init()
                Game.run()
            }
        }
    }

</script>

<style>
    /* game-styling*/

    .game{
        height: 100%;
    }

    .gameArea{
        height: 100%;
        display: none;
    }

    canvas {

        background-color: #A4A4A4;
    
    }
</style>