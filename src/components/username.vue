<template>
    <div class='username' v-bind:style="usernameStyle">
        <input v-model="username" placeholder="username"><button v-on:click="storeUsername">submit</button>
    </div>
</template>

<script>

    export default{

        name: 'username',

        data: function(){
            
            return {
                
                username: null
            }
        },

        computed: {
            
            usernameStyle (){
                return {
                    height: this.$store.state.usernameHeight,
                    overflow: 'hidden'
                }
            },

            usernameVisible (){

                return this.$store.state.usernameVisible
            }
        },

        methods: {

            storeUsername: function(){
                this.$store.state.db.setUsername(this.username)
                this.$store.state.usernameVisible = false
                this.$store.state.usernameHeight = '0'
            }
        }
    }

</script>

<style>

    .username{
        transition: 0.3s;
        background-color: var(--main-dark-color);
        margin: auto;
        width: 35%;
        border-radius: 5px;
    }

    .username input{
        margin-right: 12px;
    }

</style>