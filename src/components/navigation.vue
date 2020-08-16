<template>
  <div class="navigation">
    <navbarEntry url="http://localhost:8080/" text="Home" />
    <navbarEntry text="HighScores" />
    <navbarEntry text="Options" />
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