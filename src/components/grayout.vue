<template>
    <div class="grayout" v-show="grayoutVisible">
    </div>
</template>
<script>

    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

    export default{

        name: 'grayout',

        computed: {
            grayoutVisible(){
                return this.$store.state.grayoutVisible
            }
        }
    }
</script>

<style>

    .grayout{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: black;
        opacity: 50%;
        z-index: 1;
    }
</style>