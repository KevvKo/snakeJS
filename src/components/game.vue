<template>
    <div class="game">
        <img src="../assets/img/bluehead.png" id='snake'>
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

    //component imports
    import scorebar from './scorebar'
    import mainMenu from './mainMenu'
    import gameBoard from './gameBoard'
    import gameOver from './gameOver'
    
    Vue.use(Vuex)
    
    export default {

        name: 'game',
    
        components: {

            scorebar,
            mainMenu,
            gameBoard,
            gameOver

        },

        computed: {

            showMenu () {

                return this.$store.state.showMenu
            },


            showGame () {

                return this.$store.state.showGame
            },
            
            showGameOver () {

                return this.$store.state.showGameOver
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
                this.$store.state.game.init()
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

    #snake{
        display: none;
    }

    canvas {

        background-color: #A4A4A4;
    
    }
</style>