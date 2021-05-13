<template>
    <div>
        <audio ref="open" src="/assets/ac-work.mp3" preload="auto"></audio>
        <audio ref="work" src="/assets/air-extractor-fan.mp3" preload="auto"></audio>
        <audio ref="di" src="/assets/di.mp3" preload="auto"></audio>
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

    let timeoutId: any;
    let intervalId: any;

    const noiseStartTime = 2;
    const noiseDuration = 56;

    function playDi(di: HTMLAudioElement) {
        di.play()
    }

    function playOpenSound(open: HTMLAudioElement) {
        open.currentTime = 0
        open.play()
    }

    function playWorkSound(work: HTMLAudioElement) {
        work.currentTime = 0
        work.play()

        timeoutId = setTimeout(() => {
            intervalId = setInterval(() => {
                work.currentTime = noiseStartTime
            }, noiseDuration * 1000)
        }, noiseStartTime * 1000)
    }

    function playTurnOffSound(open: HTMLAudioElement, work: HTMLAudioElement) {
        if (timeoutId) clearTimeout(timeoutId)
        if (intervalId) clearInterval(intervalId)

        open.pause()

        work.currentTime = noiseStartTime + noiseDuration
    }

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
                    playOpenSound(open.value)

                    timeoutId = setTimeout(() => {
                        playWorkSound(work.value);
                    }, 8000);
                } else {
                    playTurnOffSound(open.value, work.value)
                }
            })

            watch(() => store.state.temperature, (newValue: number) => {
                playDi(di.value)
            })

            watch(() => store.state.verticalSweeping, () => {
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