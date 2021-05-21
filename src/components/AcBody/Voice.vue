<template>
    <div>
        <audio id="open" ref="open"
            src="https://cdn.jsdelivr.net/gh/eddievandeer/Portable-Air-Conditioner/public/assets/ac-work.mp3"
            preload="auto"></audio>
        <audio id="work" ref="work"
            src="https://cdn.jsdelivr.net/gh/eddievandeer/Portable-Air-Conditioner/public/assets/air-extractor-fan.mp3"
            preload="auto"></audio>
        <audio id="di" ref="di"
            src="https://cdn.jsdelivr.net/gh/eddievandeer/Portable-Air-Conditioner/public/assets/di.mp3"
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
        playAudio,
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
                playAudio(di.value)
                if (newValue) {
                    playOpenSound(open.value, work.value)
                } else {
                    playTurnOffSound(open.value, work.value)
                }
            })

            watch(() => [store.state.temperature, store.state.cording, store.state.heating], () => {
                playAudio(di.value)
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