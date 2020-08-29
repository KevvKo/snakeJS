<template>
  <div class="gameOver" >
    <div class="content">
      <div class="title">{{title}}</div>
      <div class="score">
        <div>Your score: {{score}}</div>
      </div>  
      <div class='restartButton'>
        <menuEntry @callback="restartGame" text="restart"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Game from '../assets/js/game'
  import Score from '../assets/js/score'
  import menuEntry from './menuEntry'
  export default {

    name: 'gameOver',

    components: {
      menuEntry
    },

    data: function(){
      return {
        title: 'Game Over',
      }
    },

    computed: {

      score(){

          return this.$store.state.scoreHandler.score
      }
    },

    methods: {

      restartGame(){

        this.$store.state.showGameOver = false
        this.$store.state.showGame = true
        this.$store.state.game = new Game()
        this.$store.state.scoreHandler = new Score()
      }
    }
  }
</script>

<style>
  /*styling for gameOver-layer */

  .gameOver{
      background-color: var(--main-primary-color);
      color: var(--main-primary-txt);
      width: 100%;
      height: 100%;
      font-size: 2.0vw;
      text-shadow: 3px 3px black;
      overflow: auto;
  }

  .score{
    font-size: 2.7vw;
  }

  .restartButton{
    margin: 20px 0
  }
</style>