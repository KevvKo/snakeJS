<template>
    <div class="footbar">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: 'footbar',
        props: {
            url: String,
            text: String
        }
    }
</script>

<style>
    /*footbar-styling*/
    .footbar{
        font-size:0.9vw;
        height: min-content;

    }
</style>