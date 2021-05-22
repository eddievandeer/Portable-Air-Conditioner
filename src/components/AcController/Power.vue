<template>
    <div class="w-full h-auto flex justify-between items-end">
        <button
            class="switch w-12 h-12 text-2xl rounded-3xl flex justify-center items-center active:outline-none focus:outline-none"
            :class="{'acitve' : power}" @click="acSwitch">
            <i class="fa fa-power-off" aria-hidden="true"></i>
        </button>
        <button
            class="w-12 h-8 text-base font-semibold rounded-xl flex justify-center items-center bg-yellow-500 hover:bg-yellow-400 active:outline-none focus:outline-none"
            @click="acOptimum">
            26℃
        </button>
    </div>
</template>

<script lang="ts">
    import {
        computed,
        ComputedRef,
        defineComponent
    } from "vue";
    import {
        useStore
    } from 'vuex'

    import {
        POWER_ON,
        POWER_OFF,
        OPTIMUM_TEMPERATURE
    } from '@store/mutation-types'

    export default defineComponent({
        name: 'Power',
        setup() {
            let lock: boolean = false

            const store = useStore()

            const power: ComputedRef = computed(() => store.state.power)

            function acSwitch(): void {
                if (!lock) {
                    lock = true
                    if (store.state.power) {
                        store.commit(POWER_OFF)
                    } else {
                        store.commit(POWER_ON)
                    }

                    setTimeout(() => {
                        lock = false
                    }, 2000)
                }
            }

            function acOptimum(): void {
                store.commit(OPTIMUM_TEMPERATURE)
            }

            return {
                power,
                acSwitch,
                acOptimum
            }
        }
    })
</script>

<style scoped>
    .switch {
        background-color: #059669;
    }

    .switch:hover {
        background-color: #10B981;
    }

    .switch.acitve {
        background-color: #DC2626;
    }

    .switch.acitve:hover {
        background-color: #EF4444;
    }
</style>