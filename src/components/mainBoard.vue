<template>
  <div class="mainBoard">
    <mainMenu/>
    <scorebar/>
    <gameBoard/>
  </div>
</template>

<script>
  import mainMenu from './mainMenu'
  import gameBoard from './gameBoard'
  import scorebar from './scorebar'

  export default {
    name: 'mainBoard',
    components: {
      scorebar,
      mainMenu,
      gameBoard
    }
  }
</script>