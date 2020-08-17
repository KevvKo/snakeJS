<template>
  <div class="mainBoard" >
    <game/>
  </div>
</template>

<script>
  import game from './game'

  export default {

    name: 'mainBoard',
    components: {
      game
    }
  }
</script>

<style>
  /*mainboard-styling*/
  .mainBoard{
      text-align: center;
      width: 80%;
      margin: auto;
      height: 100%;
  }
</style>