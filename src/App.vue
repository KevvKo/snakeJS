<template>
  <div id="app">
    <navigation msg="Navigation-Bar"/>
    <mainBoard msg=" Main-Board"/>
    <foot msg="footer"/>
  </div>
</template>

<script>

import navigation from './components/navigation.vue'
import mainBoard from './components/mainBoard.vue'
import foot from './components/footer.vue'

export default {
  name: 'App',
  components: {
    navigation,
    mainBoard,
    foot
  },
}
</script>
