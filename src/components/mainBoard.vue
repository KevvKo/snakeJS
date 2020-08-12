<template>
  <div class="mainBoard">
    <gameBoard/>
  </div>
</template>

<script>
  import gameBoard from './gameBoard'

  export default {
    name: 'mainBoard',
    components: {
      gameBoard
    }
  }
</script>