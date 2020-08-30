<template>
    <div class='username' v-show="usernameVisible" v-bind:style="usernameStyle">
        <closebar @callback="closeUsernameMenu"/>
        <div class="holder">
            <input v-model="username" placeholder="username"><button v-on:click="saveUsername">submit</button>
        </div>
    </div>
</template>

<script>

    import closebar from './closebar'

    export default{

        name: 'username',

        components: {
            closebar
        },

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

            saveUsername: function(){
                this.closeUsernameMenu()
                this.$store.state.db.setUsername(this.username)
     
            },

            closeUsernameMenu: function(){

                this.$store.state.grayoutVisible = false
                this.$store.state.usernameVisible = false
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
        transition: var(--default-transition);
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
        opacity: var(--main-primary-opacity);
        background-color: var(--main-primary-color);
        cursor: pointer;
        color: var(--main-dark-txt);
    }

</style>