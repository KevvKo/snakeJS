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

      /*primary color */
      --main-primary-color: #447a6d;
      --main-primary-txt: white;
      --main-primary-opacity: 93%;
      --default-transition: 0.2s;

      /*light color */
      --main-light-color: #72a99b;
      --main-light-txt: black;
      --main-light-opacity: 85%;
      --main-light-shadow: 3px 3px white;

      /*dark color */
      --main-dark-color: #154e42;
      --main-dark-txt: white;
      --main-dark-opacity: 60%;
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
