<template>
  <div class="scorebar" v-bind:style='{width: width}'>
    <div>
      <span>Your Highscore:</span>
      <span id='highscore'>{{highscore}}</span>
    </div>
    <div>
      <span>Your Score:</span>
      <span id="score">{{score}}</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'scorebar',

    computed: {

        score(){
          return this.$store.state.scoreHandler.score
        },

        highscore(){
          return this.$store.state.scoreHandler.highscore
        },

                    
        width (){
            
            return this.$store.state.width +'px'
        }
    }
  }
  

</script>

<style>
  /*scorebar-styling*/
  .scorebar{
      background-color: var(--main-primary-color);
      color: var(--main-primary-txt);
      height: 30px;
      padding: 0 10px;
  } 

  .scorebar div{
    display: inline-block;
  }

  .scorebar div:nth-child(1){
      float: left;
  }

  .scorebar div:nth-child(2){
      float: right;
  }

  #highscore, #score{
    margin-left: 10px;
  }
</style>