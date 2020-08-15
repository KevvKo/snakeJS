<template>
  <div id="app" class="container">
      <navigation/>
      <mainBoard/>
      <footbar text="SnakeJS - an open source project"/>
  </div>
</template>

<style>
  @import './assets/style/style.css';
</style>

<script>

  import navigation from './components/navigation.vue'
  import mainBoard from './components/mainBoard.vue'
  import footbar from './components/footbar.vue'

  export default {
    name: 'App',
    components: {
      navigation,
      mainBoard,
      footbar
    },

    mounted: function(){
      this.$WebController.addRenderingImprovements()
    }
  }

</script>
