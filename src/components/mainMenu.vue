<template>
    <div class="mainMenu">
        <div class="menuContent">
          <h1>{{title}}</h1>
          <mainMenuEntry text= "Play"/>
          <mainMenuEntry text="Username" />
          <mainMenuEntry text="Change color"/>
        </div>
    </div>
</template>

<script>

import mainMenuEntry from './mainMenuEntry.vue'

  export default {
    name: 'mainMenu',
    props:{
      title: String
    },
    components: {
        mainMenuEntry
    }
  }
</script>