<template>
    <div class="buttonbar">
        <button v-on:click="$emit('callback1')">Cancel</button>
        <button v-on:click="$emit('callback2')">Ok</button>
    </div>
</template>

<script>

    export default{
        name: 'buttonbar'
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
    }

    .buttonbar button:hover{

        transition: var(--default-transition);
        opacity: var(--main-primary-opacity);
        background-color: var(--main-primary-color);
        cursor: pointer;
        color: var(--main-dark-txt);
    }

</style>