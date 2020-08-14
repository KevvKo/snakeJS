<template>
  <div class="mainBoard">
    <scorebar/>
    <gameBoard/>
  </div>
</template>

<script>
  import gameBoard from './gameBoard'
  import scorebar from './scorebar'

  export default {
    name: 'mainBoard',
    components: {
      scorebar,
      gameBoard
    }
  }
</script>