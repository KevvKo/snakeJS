<template>
    <transition name="fade">
        <div class='username' v-bind:style="usernameStyle">
            <div class="holder">
                <label>Username: </label><input v-model="username" placeholder="name" maxlength="5">
                <div class="error" v-if="emptyField">{{rule}}</div>
                <div id="buttons">
                    <button v-on:click="goToHome">Home</button>
                    <button v-on:click="restartGame" >Restart</button>
                </div>

            </div>
        </div>
    </transition>
</template>

<script>

    export default{

        name: 'username',

        data: function(){
            
            return {
                
                username: 'AAAAA',
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
            
            saveHighScore(){

                let score = this.$store.state.scoreHandler.score
                this.$store.state.db.setPlayerStats(this.username, score)

                this.$store.state.db.setHighScore()
                
            },

            goToHome(){

                this.saveHighScore()
                this.$store.commit('resetGame')
                this.$router.push('/')

            },

            restartGame(){

                this.saveHighScore()
                this.$store.state.showGameOver = false
                this.$store.commit('resetGame')
                this.$store.state.game.init()
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
        margin: auto;
        border-radius: 3px;
        font-size: 1.4vw;
        text-shadow: none;
    
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

    .gameOver button{
        
        background-color: var(--main-dark-color);
        color: var(--main-dark-txt);
        border: none;

        padding: 7px;
        border-radius: 3px;
        font-size: 1.2vw;
        width: 40%;
        margin: 10px;
        font-family: var(--default-font);
    }

    #buttons{

        margin: 20px;
    }

    .gameOver button:hover{
        
        cursor: pointer;
        background-color: var(--main-light-color);
        color: var(--main-light-txt);
        opacity: var(--main-light-opacity);
        border-radius: 3px;
        transition: var(--default-transition);

    }
</style>