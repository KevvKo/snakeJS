<template>
  <div class="mainBoard" v-bind:style='{width: width}'>
    <game/>
  </div>
</template>

<script>
  import game from './game'

  export default {

    name: 'mainBoard',
    components: {
      game
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