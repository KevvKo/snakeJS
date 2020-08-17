<template>
  <div class="scorebar">
    <span>Your Highscore: </span>
    <span>Your Score: </span>
  </div>
</template>

<script>

  export default {
    name: 'scorebar',
  }

</script>

<style>
  /*scorebar-styling*/
  .scorebar{
      background-color: var(--main-primary-color);
      color: var(--main-txt-color);
      width: 100%;
      height: 30px;
      padding: 0 10px;
  } 

  .scorebar span:nth-child(1){
      float: left;
  }

  .scorebar span:nth-child(2){
      float: right;
  }

</style>