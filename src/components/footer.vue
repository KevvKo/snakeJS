<template>
    <div class="footer">
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
export default {
  name: 'footer',
  props: {
    msg: String
  }
}
</script>