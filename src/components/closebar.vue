<template>
    <div class="closebar">
        <div id='closeButton' v-on:click="$emit('callback')">X</div>
    </div>    
</template>

<script>

    import Vue from 'vue'
    import Vuex from 'vuex'
    
    Vue.use(Vuex)

    export default{

        name: 'closebar'

        
    }

</script>

<style>

    .closebar{
        width: 100%;
        background-color: var(--main-dark-color);
        color: var(--main-dark-txt);
        -webkit-transition: all 0.2s ease-in;
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
        overflow: auto;
        border-radius: 3px 3px 0 0;
    }

    #closeButton{

        padding: 0 5px;
        float: right;
        border-radius: 3px;
    }

    #closeButton:hover{
        
        transition: var(--default-transition);
        cursor: pointer;
        background-color: var(--main-primary-color);
        opacity: var(--main-primary-opacity);
        color: var(--main-primary-txt);
    }

</style>