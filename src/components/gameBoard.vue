<template>
  <div  class="gameBoard">
      <canvas id ="gameArea" v-bind:height=height v-bind:width=width></canvas> 
  </div>
</template>

<script>

  //import Snake from '../classes/snake'

  export default {
    name: 'gameBoard',

    data: function(){
      return {
        height: this.$store.state.gameHeight,
        width: this.$store.state.gameWidth

      }
    }
  }

</script>

<style>
  .gameBoard{
    height: 100%;
  }
</style>