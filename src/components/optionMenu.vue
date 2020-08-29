<template>
    <div class="optionMenu" v-show="optionIsVisible">
        <form>
            <input>
        </form>
    </div>
</template>

<script>

    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

    export default{

        name: 'optionMenu',

        computed: {

        }
    }

</script>

<style>


</style>