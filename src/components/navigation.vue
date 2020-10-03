<template>
  <div class="navigation">
    <router-link  v-on:click.native="reset" to="/" >Home</router-link>
    <navbarEntry @callback="showHighscores" text="HighScores" />
    <navbarEntry url="https://github.com/KevvKo/snakeJS" text="GitHub" />
    <navbarEntry url="https://github.com/KevvKo/snakeJS/issues" text="Report Bugs" />
    <grayout/>
    <highscoreBoard/>
    <selectColor/>
  </div>
</template>

<script>
  import navbarEntry from './navbarEntry'
  import grayout from './grayout'
  import selectColor from './selectColor'
  import highscoreBoard from './highscoreBoard'

  export default {
    name: 'navigation',

    components: {
      navbarEntry,
      grayout,
      selectColor,
      highscoreBoard
      
    },

    methods: {

      reset(){
        this.$store.commit('finisheGame')
                      this.$store.commit('resetGame')

      },

      showHighscores(){

        this.$store.state.highscoreBoardVisible = true
        this.$store.state.grayoutVisible = true
      }
    }
  }
</script>

<style>
  /*navigation-styling*/
  .navigation {
      height: min-content;

      background-color: var(--main-dark-color);

      font-size: 1.5vw;
      text-shadow: 3px 3px black;
  }

  .navigation a, .navbarEntry, router-link{
      display: inline-block;

  }

  .navigation a, router-link{
      padding: 18px; 
      text-decoration: none;
      color: var(--main-dark-txt);
  }

  a.router-link-exact-active {

    cursor: default;
    color: var(--main-light-txt);
    background-color: var(--main-light-color ); 
    opacity: 0.5;
    transition: var(--default-transition);
    text-shadow: none;
}

</style>