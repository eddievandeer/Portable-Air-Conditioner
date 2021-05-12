<template>
    <div
        class="w-52 h-100 p-6 mt-16 text-white border-double border-4 rounded-xl flex flex-col justify-between items-center">
        <Power></Power>
        <TempControll></TempControll>
        <img class="w-12" src="/icon/midea-logo-cn.png" alt="">
    </div>
</template>

<script lang="ts">
    import {
        defineComponent
    } from "vue";

    import Power from './Power.vue'
    import TempControll from './TempControll.vue'

    export default defineComponent({
        name: 'AcController',
        components: {
            Power,
            TempControll
        }
    })
</script>