<template>
  <div id="app">
    <div class="container">
      <navigation/>
      <mainBoard/>
    </div>
  </div>
</template>

<style>
  @import './assets/style/style.css';
</style>

<script>

  import navigation from './components/navigation.vue'
  import mainBoard from './components/mainBoard.vue'

  export default {
    name: 'App',
    components: {
      navigation,
      mainBoard,
    }
  }
</script>
