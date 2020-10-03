<template>
    <div class="mainMenu"  v-bind:style='{width: width, height: height}'>
        <div class="content">
          <div class="title">SnakeJS</div>
          <menuEntry @callback="startGame" text="Play" id="playButton"/>
          <menuEntry @callback="changeSnakeColor" text="Change color" id="colorButton"/>
        </div>  
    </div>
</template>

<script>

  import Vue from 'vue'
  import Vuex from 'vuex'
  import router from '../router'
  Vue.use(Vuex)
  
  //component imports
  import menuEntry from './menuEntry'

  export default {

    name: 'mainMenu',

    components: {
        menuEntry
    },

    mounted: function(){

        this.$store.state.width = this.$el.offsetWidth

    },

    computed: {
            
      width (){
          
          return this.$store.state.width +'px'
      },

      height(){
          return this.$store.state.height + 'px'
      },
    },

    methods: {

      startGame: function(){

        this.$store.commit('changeVisibility')
        router.push('Game')
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

      text-align: center;
      margin: auto;
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

  #playButton{
    font-size: 2.5vw;
    width: 150px;
  }

  #colorButton{
    font-size: 1.2vw;
  }

</style>