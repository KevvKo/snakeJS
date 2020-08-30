<template>
    <div class='username' v-bind:style="usernameStyle">
        <div class="holder">
            <input v-model="username" placeholder="username"><button v-on:click="storeUsername">submit</button>
        </div>
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
                    overflow: 'hidden',
                    opacity: this.$store.state.usernameOpacity
                }
            },

            usernameVisible (){

                return this.$store.state.usernameVisible
            }
        },

        methods: {

            storeUsername: function(){
                this.$store.state.db.setUsername(this.username)
                this.$store.state.grayoutVisible = false
                this.$store.state.usernameOpacity = '0'
            }
        }
    }

</script>

<style>

    .username{
        z-index: 5;
        transition: 0.3s;
        background-color: var(--main-light-color);
        margin: auto;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 3px;
    }
    
    .holder{
        padding: 10px;
    }

    .holder input{
        margin-right: 12px;
        background-color: white;
        border: none;
        border-radius: 3px;
    }

    .holder input{
        margin-right: 12px;
        background-color: white;
        border: none;
        border-radius: 3px;
    }

    .holder button{
        background-color: var(--main-dark-color);
        color: var(--main-dark-txt);
        border: none;
        border-radius: 3px;
    }

    .holder button:hover{
        transition: var(--default-transition);
        opacity: var(--main-primary-opacity);
        background-color: var(--main-primary-color);
        cursor: pointer;
        color: var(--main-dark-txt);
        border: none;
        border-radius: 3px;
    }

</style>