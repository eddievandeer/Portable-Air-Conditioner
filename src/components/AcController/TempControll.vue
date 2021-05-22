<template>
    <div class="divide-y">
        <button
            class="w-12 h-12 text-3xl rounded-t-3xl flex justify-center items-center bg-gray-300 hover:bg-gray-200 active:outline-none focus:outline-none"
            @click="turnUp">
            <i class="fa fa-caret-up" aria-hidden="true"></i>
        </button>
        <button
            class="w-12 h-12 text-3xl rounded-b-3xl flex justify-center items-center bg-gray-300 hover:bg-gray-200 active:outline-none focus:outline-none"
            @click="turnDown">
            <i class="fa fa-caret-down" aria-hidden="true"></i>
        </button>
    </div>
</template>

<script lang="ts">
    import {
        defineComponent
    } from "vue";
    import {
        useStore
    } from "vuex";

    import {
        TURN_UP,
        TURN_DOWN
    } from '@store/mutation-types'

    export default defineComponent({
        name: 'TempControll',
        setup() {
            const store = useStore()

            function turnUp(): void {
                store.commit(TURN_UP)
            }

            function turnDown(): void {
                store.commit(TURN_DOWN)
            }

            return {
                turnUp,
                turnDown
            }
        }
    })
</script>