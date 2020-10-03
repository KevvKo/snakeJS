<template>
  <div class="gameOver" >
    <div class="gameoverContent">
      <div class="title">{{title}}</div>
      <div class="score">
        <div>Your score: {{score}}</div>
        <username/>
      </div>  
    </div>
  </div>
</template>

<script>

  import username from './username'

  export default {

    name: 'gameOver',

    components: {
      username
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
    }
  }
  
</script>

<style>
  /*styling for gameOver-layer */

  .gameOver{
  
      color: var(--main-primary-txt);
      width: 100%;

      font-size: 2.0vw;
      text-shadow: 3px 3px black;
      overflow: auto;
  }

  .gameoverContent{
    
    background-color: var(--main-primary-color);
    color: var(--main-primary-txt);
    width: 30%;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .score{
    font-size: 2.7vw;
  }

</style>