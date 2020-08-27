<template>
    <div class="mainMenu">
        <div class="menuContent">
          <div class="title">{{title}}</div>
          <mainMenuEntry @callback="startGame" text= "Play"/>
          <mainMenuEntry @callack="setUserName" text="Username" />
          <mainMenuEntry @callback="changeSnakeColor" text="Change color"/>
        </div>
    </div>
</template>

<script>

  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex)
  
  //component imports
  import mainMenuEntry from './mainMenuEntry.vue'

  export default {

    name: 'mainMenu',

    props: {
      title: String
    },
    
    components: {
        mainMenuEntry
    },

    methods: {

      startGame: function(){
        this.$store.commit('changeVisibility')
        
      },

      setUserName: function () {
        return
      },

      changeSnakeColor: function() {
        return
      }
    }

  }
</script>

<style>
  /*mainMenu-styling*/

  .mainMenu{
      width: 100%;
      height: 100%;
      background-color: var(--main-primary-color);
      color: var(--main-txt-color);
      font-size: 2.0vw;
      text-shadow: 3px 3px black;
  }

  .title{
      margin-bottom: 10px;
      font-size: 4.0vw;

  }

  .menuContent{
      height: 80%;
      top: -50%;
      -ms-transform: translateY(25%);
      transform: translateY(25%);
  }

</style>