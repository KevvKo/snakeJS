<template>
  <div class="navigation">
    <navbarEntry msg="HighScores" />
    <navbarEntry msg="Options" />
    <navbarEntry msg="GitHub" />
    <navbarEntry msg="Report Bugs" />
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