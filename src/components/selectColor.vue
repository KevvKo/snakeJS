<template>
    <div class='selectColor' v-bind:style="colorStyle">
        <div class="holder">
            <input type="radio" v-bind:checked="selected" value="green" v-model="colors"><label>green</label><br>
            <input type="radio" value="blue" v-model="colors"><label>blue</label><br>
            <input type="radio" value="red" v-model="colors"><label>red</label><br>
            <button v-on:click="storeColor">submit</button>
        </div>
    </div>
</template>

<script>

    export default{

        name: 'selectColor',

        data: function(){
            
            return {
                
                color: 'green',

                selected: true,
                colors: ['green', 'blue', 'red']
            }
        },

        computed: {
            
            colorStyle (){
                return {
                    opacity: this.$store.state.colorOpacity,
                    overflow: 'hidden'
                }
            },

            colorVisible (){

                return this.$store.state.colorVisible
            }
        },

        methods: {

            storeColor: function(){
                this.$store.state.db.setUsername(this.color)
                this.$store.state.colorVisible = false
                this.$store.state.colorHeight = '0'
            }
        }
    }

</script>

<style>

    .selectColor{
        z-index: 6;
        transition: 0.3s;
        background-color: var(--main-light-color);
        margin: auto;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 3px;
    }

    .selectColor input{
        margin-right: 12px;
    }

</style>