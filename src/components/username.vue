<template>
    <transition name="fade">
        <div class='username' v-on:keydown.esc="closeUsernameMenu" v-on:keydown.enter="saveUsername" v-show="usernameVisible" v-bind:style="usernameStyle">
            <div class="holder">
                <div>Choose your name:</div>
                <input v-model="username" placeholder="username">
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

         directives: {
            focus: {
                inserted(el) {
                    el.focus()
                }
            }
        },

        methods: {

            saveUsername: function(){
                this.closeUsernameMenu()
                this.$store.state.db.setUsername(this.username)
                console.log("jo")
            },

            closeUsernameMenu: function(){

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


</style>