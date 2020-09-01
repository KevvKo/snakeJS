<template>
    <transition name="fade">
        <div class='username' v-on:keydown.esc="closeUsernameMenu" v-on:keydown.enter="saveUsername" v-show="usernameVisible" v-bind:style="usernameStyle">
            <div class="holder">
                <div>Choose your name:</div>
                <input v-model="username" placeholder="username">
                <transition name="fade">
                    <div class="error" v-if="emptyField">{{rule}}</div>
                </transition>
                <buttonbar @callback1="closeUsernameMenu"  @callback2="saveUsername"/>
            </div>
        </div>
    </transition>
</template>

<script>

    import buttonbar from './buttonbar'

    export default{

        name: 'username',

        components: {
            
            buttonbar
        },

        data: function(){
            
            return {
                
                username: null,
                rule: 'Please enter a new username.',
                emptyField: null

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
                
                if(this.username != null){
     
                    this.closeUsernameMenu()
                    this.$store.state.db.setUsername(this.username)
                    this.emptyField = false
                } else {

                    this.emptyField = true
                }
            },

            closeUsernameMenu: function(){

                this.emptyField = null
                this.$store.state.grayoutVisible = false
                this.$store.state.usernameVisible = false
            }
        }
    }

</script>

<style>

    .fade-enter-active, .fade-leave-active {
        transition: opacity var(--default-transition);
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .username{
        z-index: 5;
        transition: var(--default-transition);
        background-color: var(--main-light-color);
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 3px;
        font-size: 1.4vw;
    }
    
    .holder{
        border-radius: 3px;
        padding: 10px;
    }

    .holder input{
        margin-right: 12px;
        background-color: white;
        border: none;
        border-radius: 3px;
        padding: 5px;
    }

    .error{
        color: red
    }

</style>