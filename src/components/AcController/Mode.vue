<template>
    <div class="w-full h-auto mt-2 flex justify-around">
        <button
            class="w-18 h-8 text-sm font-medium rounded-xl bg-blue-600 hover:bg-blue-500 active:outline-none focus:outline-none"
            @click="changeMode(true)">
            <i class=" h-4 fa fa-snowflake-o mr-1" aria-hidden="true"></i>制冷
        </button>
        <button
            class="w-18 h-8 text-sm font-medium rounded-xl bg-red-600 hover:bg-red-500 active:outline-none focus:outline-none"
            @click="changeMode(false)">
            <i class="fa fa-sun-o mr-1" aria-hidden="true"></i>制热
        </button>
    </div>
</template>

<script lang="ts">
    import {
        computed,
        ComputedRef,
        defineComponent
    } from 'vue'

    import {
        useStore
    } from 'vuex'

    import {
        CHANGE_MODE
    } from '@store/mutation-types'

    export default defineComponent({
        name: 'Mode',
        setup() {
            const store = useStore()

            const power: ComputedRef = computed(() => store.state.power)

            function changeMode(mode: boolean) {
                if (power.value) {
                    store.commit(CHANGE_MODE, mode)
                }
            }

            return {
                changeMode
            }
        }
    })
</script>