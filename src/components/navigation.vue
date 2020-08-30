<template>
  <div class="navigation">
    <navbarEntry url="http://localhost:8080/" text="Home" />
    <navbarEntry text="HighScores" />
    <navbarEntry url="https://github.com/KevvKo/snakeJS" text="GitHub" />
    <navbarEntry url="https://github.com/KevvKo/snakeJS/issues" text="Report Bugs" />
  </div>
</template>

<script>

  import navbarEntry from './navbarEntry'

  export default {
    name: 'navigation',
    components: {
      navbarEntry
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

  .navigation a, .navbarEntry{
      display: inline-block;


  }

  .navigation a{
      padding: 18px; 
      text-decoration: none;
      color: var(--main-dark-txt);
  }

</style>