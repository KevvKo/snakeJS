<template>
    <div class="menuEntry">
      <div v-on:click="$emit('callback')">{{text}}</div>
    </div>
</template>

<script>
  export default {
    name: 'menuEntry',
    props: {
        text: String,
        callback: Function
    }
  }
    
</script>

<style>

  .menuEntry:hover{
      cursor: pointer;
      background-color: var(--main-light-color );
      color: var(--main-light-txt);
      opacity: var(--main-light-opacity);
      transition: var(--default-transition);
      text-shadow: none;
  }
  
</style>