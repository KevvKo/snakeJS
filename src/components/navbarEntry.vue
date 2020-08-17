<template>
    <div class="navbarEntry">
        <a v-bind:href="url"> {{ text }}</a>
    </div>
</template>

<script>
    export default {
        name: 'navbarEntry',
        props: {
            url: String,
            text: String
        }

    }
</script>

<style>

    .navbarEntry:hover{
        cursor: pointer;
        background-color: var(--main-light-color);
        transition: var(--default-transition);
    }

</style>