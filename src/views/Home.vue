<template>
  <div id="home" class="container">
      <navigation/>
      <mainMenu/>
  </div>
</template>

<script>

    import navigation from '../components/navigation'
    import mainMenu from '../components/mainMenu'

    export default {

        components:{
            navigation,
            mainMenu
        },
    }
</script>