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

  import mainMenuEntry from './mainMenuEntry.vue'
  //import Snake, { snake } from '../classes/snake'
  import { game } from '../classes/game'

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

        document.querySelector('.mainMenu').style.display = "none"
        document.querySelector('.game').style.display = "block"
        this.$WebController.rescaleCanvas()

        game.run()
        
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