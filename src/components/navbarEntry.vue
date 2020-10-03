<template>
    <div class="navbarEntry">
        <a v-bind:href="url" v-on:click="$emit('callback')"> {{ text }}</a>
    </div>
</template>

<script>
    export default {
        name: 'navbarEntry',
        props: {
            url: String,
            text: String,
            callback: Function
        }

    }
</script>

<style>

    .navbarEntry a:hover, a:hover{
        cursor: pointer;
        color: var(--main-light-txt);
        background-color: var(--main-light-color ); 
        opacity: var(--main-light-opacity);
        transition: var(--default-transition);
        text-shadow: none;
    }

</style>