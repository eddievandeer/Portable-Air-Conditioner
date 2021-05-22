<template>
    <div class="w-full h-auto mt-4 mb-2 flex justify-center items-center relative">
        <div class="px-2 text-xs text-gray-300 absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white">
            风向
        </div>
        <div class="w-full h-auto p-0.5 divide-x border-2 rounded-2xl border-gray-200 box-border">
            <button
                class="w-1/2 h-6 text-base font-medium rounded-l-xl bg-gray-300 hover:bg-gray-200 active:outline-none focus:outline-none"
                @click="sweeping('vertical')">
                <i class="fa fa-sort" aria-hidden="true"></i>
            </button>
            <button
                class="w-1/2 h-6 text-base font-medium rounded-r-xl bg-gray-300 hover:bg-gray-200 active:outline-none focus:outline-none"
                @click="sweeping('horizontal')">
                <i class="fa fa-sort transform rotate-90" aria-hidden="true"></i>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        computed,
        ComputedRef,
        defineComponent,
        onMounted
    } from "vue";

    import {
        useStore
    } from "vuex";

    import {
        CHANGE_VERTICAL_WINDSHIELD,
        CHANGE_HORIZONTAL_WINDSHIELD
    } from '@store/mutation-types'

    import {
        playAudio
    } from '@utils/index'

    export default defineComponent({
        setup() {
            const store = useStore()

            const power: ComputedRef = computed(() => store.state.power)

            let di: HTMLAudioElement

            onMounted(() => {
                di = document.querySelector('#di') as HTMLAudioElement
            })

            function sweeping(direction: string) {
                if (power.value) {
                    playAudio(di)

                    if (direction === 'vertical') {
                        verticalSweeping()
                    } else if (direction === 'horizontal') {
                        horizontalSweeping()
                    }
                }
            }

            function verticalSweeping() {
                store.commit(CHANGE_VERTICAL_WINDSHIELD)
            }

            function horizontalSweeping() {
                store.commit(CHANGE_HORIZONTAL_WINDSHIELD)
            }

            return {
                sweeping
            }
        }
    })
</script>