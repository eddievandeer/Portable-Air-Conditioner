<template>
    <div>
        <audio ref="open"
            src="https://cdn.jsdelivr.net/gh/eddievandeer/Portable-Air-Conditioner/public/assets/ac-work.mp3"
            preload="auto"></audio>
        <audio ref="work"
            src="https://cdn.jsdelivr.net/gh/eddievandeer/Portable-Air-Conditioner/public/assets/air-extractor-fan.mp3"
            preload="auto"></audio>
        <audio ref="di" src="https://cdn.jsdelivr.net/gh/eddievandeer/Portable-Air-Conditioner/public/assets/di.mp3"
            preload="auto"></audio>
    </div>
</template>

<script lang="ts">
    import {
        ref,
        watch,
        defineComponent,
        Ref,
        onMounted
    } from 'vue'
    import {
        Store,
        useStore
    } from 'vuex'

    import {
        playDi,
        playOpenSound,
        playTurnOffSound
    } from '@utils/index'

    export default defineComponent({
        name: 'Voice',
        setup() {
            const store: Store < any > = useStore()

            const open: Ref = ref(),
                work: Ref = ref(),
                di: Ref = ref()

            onMounted(() => {
                open.value.volume = 0.1
                work.value.volume = 0.2
            })

            watch(() => store.state.power, (newValue: boolean) => {
                playDi(di.value)
                if (newValue) {
                    playOpenSound(open.value, work.value)
                } else {
                    playTurnOffSound(open.value, work.value)
                }
            })

            watch(() => store.state.temperature, () => {
                playDi(di.value)
            })

            return {
                open,
                work,
                di
            }
        }
    })
</script>

<style scoped>
    audio {
        display: none;
    }
</style>