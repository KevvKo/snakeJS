<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <snakeJS msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import snakeJS from './components/snakeJS.vue'

export default {
  name: 'App',
  components: {
    snakeJS
  }
}
</script>
