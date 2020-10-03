<template>
  <div class="game">
    <navigation/>
    <mainBoard/>
  </div>
</template>

<script>

    import navigation from '../components/navigation'
    import mainBoard from '../components/mainBoard'

  export default {

    name: 'game',
    components: {

        navigation,
        mainBoard
    }
  }

</script>