<template>
    <div class='username' v-show='usernameVisible'>
        <input>
    </div>
</template>

<script>

    export default{

        name: 'username',

        computed: {
            
            usernameVisible (){

                return this.$store.state.usernameVisible
            }
        }
    }

</script>

<style>

    .username{
        transition: 0.3s;
    }
</style>