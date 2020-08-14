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