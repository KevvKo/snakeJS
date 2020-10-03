<template>
    <div class="gameContainer"  v-bind:style='{width: width, height: height}'>
        <div class="gameArea">
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
    import gameBoard from './gameBoard'
    import gameOver from './gameOver'
    
    Vue.use(Vuex)
    
    export default {

        name: 'game',
    
        components: {

            scorebar,
            gameBoard,
            gameOver

        },

        computed: {
            
            width (){
                
                return this.$store.state.width +'px'
            },

            height(){
                return this.$store.state.height + 'px'
            },

            showGameOver () {

                return this.$store.state.showGameOver
            }
        },

        mounted:function(){

            if(this.$store.state.showGameOver){
                this.$store.state.showGameOver = false
            }
            this.$store.state.game.init()
        }
    }
    
</script>

<style>
    /* game-styling*/

    img{
        display: none;
    }

</style>