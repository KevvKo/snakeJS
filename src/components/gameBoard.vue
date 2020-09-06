<template>
  <div  class="gameBoard">
      <canvas id ="gameArea" v-bind:height=height v-bind:width=width></canvas> 
  </div>
</template>

<script>

  //import Snake from '../classes/snake'

  export default {
    name: 'gameBoard',

    computed: {

        height(){
          return this.$store.state.height
        },

        width(){
          return this.$store.state.width   
        }
    },
  }

</script>

<style>

  canvas{

    display: block;
    background-color: rgba(0,0,0,0.2);
  }

</style>