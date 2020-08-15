<template>
    <div class="mainMenu">
        <manMenuEntry/>
        <manMenuEntry/>
        <manMenuEntry/>
    </div>
</template>

<script>

import mainMenuEntry from './mainMenuEntry'

  export default {
    name: 'mainMenu',
    components: {
        mainMenuEntry
    }
  }
</script>