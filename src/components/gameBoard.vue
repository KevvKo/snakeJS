<template>
  <div  class="gameBoard">
      <canvas id ="gameArea" v-bind:height="height" v-bind:width="width"></canvas> 
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

    mounted: function(){

        this.$store.state.canvas = document.querySelector('canvas')
        this.$store.state.ctx = this.$store.state.canvas.getContext('2d')
    }
  }

</script>

<style>

  canvas{

    display: block;
    background-color: rgba(0,0,0,0.2);

  }

</style>