<template>
    <transition name="fade">

        <div tabindex="0" @keydown.esc="closeHighscoreMenu" v-show="highscoreBoardVisible" id="highscoreBoard">
            <div id="upperbar">
                <div id="highscoreTitle">Highscore</div>
            </div>
            <div id="highscoreContent">
                <div class="flexbox">
                    <table id="highscoreTable">
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Highscore</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="highscore of highscores" :key="highscore.username">
                                <td>{{highscore.username}}</td>
                                <td>{{highscore.score}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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

                highscores: this.$store.state.db.getHighScores()
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

    /* general styling */
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

    #highscoreContent{

        margin-top: 15px;
        width: 100%;
        position: absolute;
        font-size: 2.3vw;
        border-radius: 3px;
        color: var(--main-light-txt);
        display: flex;
        justify-content: center;
    }

    .flexbox{
        width: 80%;
    }

    #highscoreContent p{
        width: 70%;
        margin: auto;
    }

    #highscoreTitle{
        padding: 10px;
        font-size: 2.4vw;
    }

    /*tabl-styling*/

    #highscoreTable{
        width: 100%;
        text-align: center;
        border-collapse: collapse;
    }

    #highscoreTable thead{

        background-color: var(--main-light-color);
        color: var(--main-light-txt);
    }   

    #highscoreBoard button{
        
        font-family: var(--default-font);
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