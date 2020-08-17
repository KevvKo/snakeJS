<template>
    <div class="mainMenuEntry">
      <div v-on:click="$emit('callback')">{{text}}</div>
    </div>
</template>

<script>
  export default {
    name: 'mainMenuEntry',
    props: {
        text: String,
        callback: Function
    }
  }
    
</script>

<style>

  .mainMenuEntry:hover{
      cursor: pointer;
      background-color: var(--main-light-color );
      transition: var(--default-transition);
  }
  
</style>