<template>
    <div class="game">
        <mainMenu v-show="!isVisible" title="SnakeJS"/>
        <div v-show="isVisible" class="gameArea">
            <scorebar/>
            <gameBoard/>
        </div>
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
    
    Vue.use(Vuex)

    const store = new Vuex.Store({

        state: {
            isVisible: false,
            game: new Game(),
            scoreHandler: new Score(),
            gameWidth: 800,
            gameHeight: 290
        },

        mutations: {
            changeVisibility (state) {
                state.isVisible = !state.isVisible 
            }
        }
    })

    export {store} 
    
    export default {

        name: 'game',
    
        components: {

            scorebar,
            mainMenu,
            gameBoard

        },

        store,

        computed: {

            isVisible () {

                return store.state.isVisible
            }
        },

        watch: {

            //if the gameArea is now visible, the game will be started
            isVisible: function () {
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