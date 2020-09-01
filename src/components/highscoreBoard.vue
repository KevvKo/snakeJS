<template>
    <transition name="fade">
        <div v-on:keydown.esc="closeHighscoreMenu" v-show="highscoreBoardVisible" id="highscoreBoard">
            <div id="upperbar">
                <div id="highscoreTitle">Highscore</div>
            </div>
            <div id="highscoreContent">
                <h2>Highscore</h2>
                <p>{{username}}: {{highscore}}</p>
            </div>
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

        data: function(){

            return {

                username: this.$store.state.db.getUsername(),
                highscore: this.$store.state.db.getHighScore()
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
        background-color:#E6E6E6;
        color: var(--main-dark-txt);
        margin: auto;
        width: 50%;
        height: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 3px;
        overflow: auto;
        font-size: 15px;

    }

    #upperbar{
        background-color: var(--main-dark-color);
        border-radius: 3px 3px 0px 0px;
        
    }

    #highscoreTitle{
        font-size: 25px;
        border-radius: 3px 3px 0 0 ;
        width: 90%;
        margin: auto;
    }

    #highscoreContent{

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2.3vw;
        border-radius: 3px;
        color: var(--main-light-txt)
    }

    #highscoreContent p{
        width: 70%;
        margin: auto;
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