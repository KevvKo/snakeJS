<template>
    <div class='selectColor' v-show="colorVisible" v-bind:style="colorStyle">
        <closebar @callback="closeColorMenu"/>
        <div class="holder">
            <div>Choose a snake color:</div>
            <input type="radio" v-bind:checked="selected" value="green" v-model="colors"><label>green</label><br>
            <input type="radio" value="blue" v-model="colors"><label>blue</label><br>
            <input type="radio" value="red" v-model="colors"><label>red</label><br>
            <div class='buttonHolder'>
                <button v-on:click="saveColor">Cancel</button>
                <button v-on:click="closeColorMenu">Ok</button>
            </div>
        </div>
    </div>
</template>

<script>

    import closebar from './closebar'

    export default{

        name: 'selectColor',
        
        components: {
            closebar
        },

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

            saveColor: function(){

                this.closeColorMenu()
                this.$store.state.db.setUsername(this.color)
            },

            closeColorMenu(){

                this.$store.state.colorHeight = '0'
                this.$store.state.colorVisible = false
                this.$store.state.grayoutVisible = false
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
        width: 15%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 3px;
        overflow: auto;
        transition: var(--default-transition);
    }

    .holder{
        transition: var(--default-transition);
        border-radius: 3px;
        margin: auto;
        margin-bottom: 5px;    
        overflow:auto;

    }
    
    .selectColor input{
        margin-right: 12px;
    }

    .buttonHolder{
        margin-top: 10px;
        display: flex;
        justify-content: right;
    }

    .selectColor button{

        margin-right: 5px;    
    }

</style>