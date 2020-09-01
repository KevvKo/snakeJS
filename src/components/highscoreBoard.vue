<template>
    <transition name="fade">
        <div v-on:keydown.esc="closeHighscoreMenu" v-show="highscoreBoardVisible" id="highscoreBoard">
            <div id="highscoreTitle">Highscores:</div>
            <button v-on:click="closeHighscoreMenu" >Close</button>
        </div>
    </transition>
</template>

<script>

    export default{
        
        name: 'highscoreBoard',

        computed: {

            highscoreBoardVisible(){
                return this.$store.state.highscoreBoardVisible
            }
        },

        methods:{

            closeHighscoreMenu(){

                this.$store.state.highscoreBoardVisible = false
                this.$store.state.grayoutVisible = false
            }
        }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity var(--default-main);
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    #highscoreBoard{

        z-index: 6;
        transition: var(--default-transition);
        background-color: var(--main-light-color);
        margin: auto;
        width: 500px;
        height: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 3px;
        overflow: auto;
        font-size: 15px;
        padding: 30px;
    }

    #highscoreTitle{
        font-size: 25px;
    }

    #highscoreBoard button{
        
        border: none;
        margin-right: 5px;
        background-color: var(--main-dark-color);
        color: var(--main-dark-txt);
        border-radius: 3px;
        padding: 6px;
        position: absolute;
        bottom: 5%;
        right: 5%;
    }

        #highscoreBoard button:hover{
        
        transition: var(--default-transition);
        opacity: var(--main-primary-opacity);
        background-color: var(--main-primary-color);
        cursor: pointer;
        color: var(--main-dark-txt);

    }
    
</style>