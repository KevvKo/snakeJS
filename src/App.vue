<template>
  <div id="app" class="container">
      <navigation/>
      <mainBoard/>
      <footbar text="SnakeJS - an open source project"/>
  </div>
</template>

<style>

  /*variables for uniform design*/
  :root{
      --main-primary-color: #880e4f;
      --main-txt-color: white;
      --main-dark-color: #560027;
      --main-light-color: #bb467a;
      --default-transition: 0.2s;
  }

  /*general styling*/

  *{
      box-sizing: border-box;
  }

  html, body{
      height: 100%;
      margin: 0px;
      padding: 0px;
  }

  body {
      font-family: 'Sriracha';
      background-color: #E2E2E2;

  }

  #app{
      height: 100%;
      display: flex;
      flex-direction: column;
  }
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


  }

</script>
