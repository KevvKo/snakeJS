<template>
    <div class="mainMenu">
        <div class="content">
          <div class="title">{{title}}</div>
          <menuEntry @callback="startGame" text= "Play"/>
          <menuEntry @callback="changeSnakeColor" text="Change color"/>
        </div>  
    </div>
</template>

<script>

  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex)
  
  //component imports
  import menuEntry from './menuEntry'

  export default {

    name: 'mainMenu',

    props: {
      title: String
    },
    
    components: {
        menuEntry
    },

    methods: {

      startGame: function(){
        this.$store.commit('changeVisibility')
        
      },

      changeSnakeColor: function() {
  
        this.$store.state.grayoutVisible = !this.$store.state.grayoutVisible

        if(this.$store.state.grayoutVisible){

          this.$store.state.colorVisible = true

        
        }else{
          
          this.$store.state.colorVisible = false
        }
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
      color: var(--main-primary-txt);
      opacity: var(--main-primary-opacity);
      font-size: 2.0vw;
      text-shadow: 3px 3px black;
  }

  .title{

      margin-bottom: 10px;
      font-size: 4.0vw;
  }

  .content{

      height: 80%;
      top: -50%;
      -ms-transform: translateY(25%);
      transform: translateY(25%);
  }

</style>