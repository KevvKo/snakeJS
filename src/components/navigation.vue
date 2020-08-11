<template>
  <div class="menu">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'menu',
  props: {
    msg: String
  }
}
</script>