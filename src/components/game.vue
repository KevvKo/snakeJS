<template>
    <div class="game"  v-bind:style='{width: width}'>
        <img src="../assets/img/snakehead-green.png" id='snake'>
        <img src="../assets/img/meatball.png" id='meatball'>
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
            
            width (){
                
                return this.$store.state.width +'px'
            },

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
   
                let gameHeight = this.$el.clientHeight
                let canvasHeight = gameHeight - 30 // height from the scorebar

                this.$store.state.height = canvasHeight
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

        height: 100%;
    }

    img{
        display: none;
    }

</style>