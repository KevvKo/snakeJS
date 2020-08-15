<template>
  <div class="mainBoard" >
    <mainMenu title="SnakeJS"/>
    <div class="game">
      <scorebar/>
      <gameBoard/>
    </div>
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