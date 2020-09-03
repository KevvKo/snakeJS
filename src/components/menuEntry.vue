<template>
    <div class="menuEntry">
      <button  v-bind:id="id" v-on:click="$emit('callback')">{{text}}</button>
    </div>
</template>

<script>
  export default {

    name: 'menuEntry',
    props: {
        id: String,
        text: String,
        callback: Function
    }
  }
    
</script>

<style>

 .menuEntry button{

   border: none;
   border-radius: 3px;
   background-color: var(--main-dark-color);
   color: var(--main-dark-txt);

   margin:15px;
   padding: 10px;
   font-family: var(--default-font);
 }

  .menuEntry button:hover{
      cursor: pointer;
      background-color: var(--main-light-color );
      color: var(--main-light-txt);
      opacity: var(--main-light-opacity);
      transition: var(--default-transition);
      text-shadow: none;

  }
  
</style>