<template>
  <div class="mainBoard">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'mainBoard',
  props: {
    msg: String
  }
}
</script>