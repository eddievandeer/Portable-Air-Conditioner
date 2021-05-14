<template>
    <button
        class="switch w-12 h-12 text-2xl rounded-3xl flex justify-center items-center active:outline-none focus:outline-none"
        :class="{'acitve' : power}" @click="acSwitch">
        <i class="fa fa-power-off" aria-hidden="true"></i>
    </button>
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
        POWER_OFF
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
                    }, 3000)
                }
            }

            return {
                power,
                acSwitch
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