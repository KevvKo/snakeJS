<template>
  <div id="app" class="container">
      <grayout/>
      <username/>
      <selectColor/>
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

  import Vue from 'vue'
  import Vuex from 'vuex'

  //classes imports
  import Game from './assets/js/game.js'
  import Score from './assets/js/score'
  import DbHandler from './assets/js/dbHandler'

  import grayout from './components/grayout'
  import username from './components/username'
  import selectColor from './components/selectColor'
  import navigation from './components/navigation.vue'
  import mainBoard from './components/mainBoard.vue'
  import footbar from './components/footbar.vue'

  Vue.use(Vuex)

  const store = new Vuex.Store({

    state: {
        grayoutVisible: false,

        usernameVisible: false,
        usernameOpacity: '0%',
        
        colorVisible: false,
        colorOpacity: '0',

        showMenu: true,
        showGame: false,
        showGameOver: false,

        gameWidth: 800,
        gameHeight: 290,

        game: new Game(),
        scoreHandler: new Score(),
        db: new DbHandler()

    },

    mutations: {

        changeVisibility (state) {

            state.showMenu = false
            state.showGame = true
        },

        checkHighScore(state){

            if(state.db.getHighScore()){
                state.scoreHandler.highscore = state.db.getHighScore()
            }
        },

        finisheGame (state){

            state.showGameOver = true
            state.showGame = false
            state.game.saveHighScore()
            state.game.clearCanvas()
        }
    }        
  })

  export {store} 
  export default {
    name: 'App',

    store,

    components: {
      grayout,
      username,
      selectColor,
      navigation,
      mainBoard,
      footbar
    },


  }

</script>
