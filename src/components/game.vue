<template>
    <div class="game">
        <mainMenu v-show="showMenu" title="SnakeJS"/>
        <div v-show="showGame" class="gameArea">
            <scorebar/>
            <gameBoard/>  
        </div>
        <gameOver v-show="showGameOver"/>  
    </div>
</template>

<script>

    import Vue from 'vue'
    import Vuex from 'vuex'

    //classes imports
    import Game from '../assets/js/game.js'
    import Score from '../assets/js/score'
    
    //component imports
    import scorebar from './scorebar'
    import mainMenu from './mainMenu'
    import gameBoard from './gameBoard'
    import gameOver from './gameOver'
    
    Vue.use(Vuex)

    const store = new Vuex.Store({

        state: {
            showMenu: true,
            showGame: false,
            showGameOver: false,
            game: new Game(),
            scoreHandler: new Score(),
            gameWidth: 800,
            gameHeight: 290

        },

        mutations: {
            changeVisibility (state) {

                state.showMenu = false
                state.showGame = true
            },


            finisheGame (state){

                state.showGameOver = true
                state.showGame = false
                state.game.clearCanvas()
            }
        }        
    })

    export {store} 
    
    export default {

        name: 'game',
    
        components: {

            scorebar,
            mainMenu,
            gameBoard,
            gameOver

        },

        store,

        computed: {

            showMenu () {

                return store.state.showMenu
            },


            showGame () {

                return store.state.showGame
            },
            
            showGameOver () {

                return store.state.showGameOver
            }
        },

        watch: {

            //if the gameArea is now visible, the game will be started
            showGame: function () {
                this.load()
                
            }
        },

        methods:{

            load(){
                store.state.game.init()
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

        height: '100%';
    }

    canvas {

        background-color: #A4A4A4;
    
    }
</style>