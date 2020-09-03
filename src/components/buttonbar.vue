<template>
    <div class="buttonbar">
        <button v-on:click="$emit('callback1')">{{text1}}</button>
        <button v-on:click="$emit('callback2')">{{text2}}</button>
    </div>
</template>

<script>

    export default{
        name: 'buttonbar',

        props: {
            text1: String,
            text2: String
        }
    }
</script>
<style>

    .buttonbar{

        display: flex;
        justify-content: right;
        margin-top: 10px;
    }

    .buttonbar button{
        
        border: none;
        margin-right: 5px;
        background-color: var(--main-dark-color);
        color: var(--main-dark-txt);
        border-radius: 3px;
        padding: 6px;
        font-family: var(--default-font);
    }

    .buttonbar button:hover{

        transition: var(--default-transition);
        opacity: var(--main-primary-opacity);
        background-color: var(--main-primary-color);
        cursor: pointer;
        color: var(--main-dark-txt);
    }

</style>