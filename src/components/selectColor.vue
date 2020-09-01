<template>
        <transition name="fade">
            <div v-on:keydown.esc="closeColorMenu" v-on:keydown.enter="saveColor" class='selectColor' v-if="colorVisible" v-bind:style="colorStyle">

                    <div class="holder">
                        <div>Choose a snake color:</div>
                        <input type="radio"  value="green" v-model="selected"><label>green</label><br>
                        <input type="radio" value="blue" v-model="selected"><label>blue</label><br>
                        <input type="radio" value="red" v-model="selected"><label>red</label><br>
                        <buttonbar @callback1="closeColorMenu" @callback2="saveColor"/>
                    </div>
            </div>
            </transition>
</template>

<script>

    import buttonbar from './buttonbar'

    export default{

        name: 'selectColor',
        
        components: {

            buttonbar
        },

        data: function(){
            
            return {

                selected: 'green'
            }
        },

        computed: {
            
            colorStyle (){

                return {
                    overflow: 'hidden'
                }
            },

            colorVisible (){

                return this.$store.state.colorVisible
            }
        },

        methods: {

            saveColor: function(){
                console.log(this.selected)
                this.closeColorMenu()
                this.$store.state.db.setSnakeColor(this.selected)
            },

            closeColorMenu(){

                this.$store.state.colorVisible = false
                this.$store.state.grayoutVisible = false
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

    .selectColor{

        z-index: 6;
        transition: var(--default-transition);
        background-color: var(--main-light-color);
        margin: auto;
        width: 15%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 3px;
        overflow: auto;
        font-size: 1.2vw;
    }

    .holder{

        border-radius: 3px;
        margin: auto;
        margin-bottom: 5px;    
        overflow:auto;

    }
    
    .selectColor input{
        margin-right: 12px;
        padding: 5px;
    }

</style>