<template>
    <div class="navbarEntry">
        <a> {{ msg }}</a>
    </div>
</template>

<script>
    export default {
        name: 'navbarEntry',
        props: {
            msg: String
        }

    }
</script>