<template>
  <div class="mainBoard" v-bind:style='{width: width}'>
    <gameContainer/>
  </div>
</template>

<script>
  import gameContainer from './gameContainer'

  export default {

    name: 'mainBoard',
    components: {
      gameContainer
    },

    computed: {

      width (){
        
        return this.$store.state.width +'px'
      }
    }
  }


</script>

<style>
  /*mainboard-styling*/
  .mainBoard{
      text-align: center;

      margin: auto;
      height: 100%;
  }
</style>