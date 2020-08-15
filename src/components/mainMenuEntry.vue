<template>
    <div class="mainMenuEntry">
      <div v-on:click="startGame">{{text}}</div>
    </div>
</template>

<script>
  export default {
    name: 'mainMenuEntry',
    props: {
        text: String
    },

    methods: {
      startGame: function(){

        document.querySelector('.mainMenu').style.display = "none"
        document.querySelector('.game').style.display = "block"

      }
    }
  }
    
</script>