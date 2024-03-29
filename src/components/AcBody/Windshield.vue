<template>
    <div class="windshield w-10/12 h-6 relative">
        <div class="vertical-windshield w-full h-6 border border-gray-300 bg-white absolute z-10" ref="vertical"
            :class="start">
        </div>
        <div class="w-full h-6 flex justify-around absolute top-0 left-0 transform-gpu">
            <div class="horizontal-windshield horizontal-sweeping w-2 h-full border border-gray-300 bg-white"
                :class="{'horizontal-pause': !horizontalSweeping}"></div>
            <div class="horizontal-windshield horizontal-sweeping w-2 h-full border border-gray-300 bg-white"
                :class="{'horizontal-pause': !horizontalSweeping}"></div>
            <div class="horizontal-windshield horizontal-sweeping w-2 h-full border border-gray-300 bg-white"
                :class="{'horizontal-pause': !horizontalSweeping}"></div>
            <div class="horizontal-windshield horizontal-sweeping w-2 h-full border border-gray-300 bg-white"
                :class="{'horizontal-pause': !horizontalSweeping}"></div>
            <div class="horizontal-windshield horizontal-sweeping w-2 h-full border border-gray-300 bg-white"
                :class="{'horizontal-pause': !horizontalSweeping}"></div>
            <div class="horizontal-windshield horizontal-sweeping w-2 h-full border border-gray-300 bg-white"
                :class="{'horizontal-pause': !horizontalSweeping}"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        computed,
        ComputedRef,
        defineComponent,
        onMounted,
        reactive,
        ref,
        Ref,
        watch
    } from 'vue'

    import {
        Store,
        useStore
    } from 'vuex'

    import {
        CHANGE_VERTICAL_WINDSHIELD
    } from '@store/mutation-types'

    export default defineComponent({
        name: 'Windshield',
        setup() {
            const vertical: Ref = ref()
            const store: Store < any > = useStore()

            let timer: any
            let startTimer: any

            const startAnimation: Function = () => {
                startTimer = setTimeout(() => {
                    start['vertical-sweeping'] = true
                }, 5000)
            }

            const endOffAnimation: Function = () => {
                start['vertical-sweeping'] = false
                timer = setTimeout(() => {
                    vertical.value.classList.add('switch-off')
                })
            }

            const power: ComputedRef = computed(() => store.state.power),
                verticalPause: ComputedRef = computed(() => !store.state.verticalSweeping),
                horizontalSweeping: ComputedRef = computed(() => store.state.horizontalSweeping)

            const start = reactive({
                'vertical-pause': verticalPause,
                'switch-on': power,
                'vertical-sweeping': false
            })

            watch(() => store.state.power, (newValue) => {
                if (timer) clearTimeout(timer)
                if (startTimer) clearTimeout(startTimer)

                if (!newValue) {
                    // 触发关机
                    if (verticalPause.value) {
                        store.commit(CHANGE_VERTICAL_WINDSHIELD)
                    }
                    vertical.value.addEventListener('animationiteration', endOffAnimation)
                } else {
                    // 触发开机
                    // vertical.value.classList.add('vertical-sweeping')
                    startAnimation()
                    vertical.value.removeEventListener('animationiteration', endOffAnimation)
                    vertical.value.classList.remove('switch-off')
                }
            })

            onMounted(() => {
                vertical.value.classList.add('switch-off')
            })

            return {
                horizontalSweeping,
                vertical,
                start
            }
        }
    })
</script>


<style>
    .windshield {
        perspective: 500px;
    }

    .vertical-windshield {
        transform: rotateX(80deg);
        transform-style: preserve-3d;
        transition: 5s all;
    }

    .vertical-windshield.switch-off {
        transform: rotateX(180deg);
    }

    .switch-on {
        transform: rotateX(80deg);
    }

    .horizontal-windshield {
        transform: rotateY(20deg);
        transform-style: preserve-3d;
        transition: 1s all;
    }

    .vertical-sweeping {
        animation: 8s vertical-sweeping infinite ease-in-out;
    }

    .horizontal-sweeping {
        animation: 8s horizontal-sweeping infinite;
    }

    .vertical-pause,
    .horizontal-pause {
        animation-play-state: paused;
    }

    @keyframes vertical-sweeping {
        0% {
            transform: rotateX(80deg);
        }

        5% {
            transform: rotateX(80deg);
        }

        50% {
            transform: rotateX(20deg);
        }

        95% {
            transform: rotateX(80deg);
        }

        100% {
            transform: rotateX(80deg);
        }
    }

    @keyframes horizontal-sweeping {
        0% {
            transform: rotateY(160deg);
        }

        5% {
            transform: rotateY(160deg);
        }

        50% {
            transform: rotateY(20deg);
        }

        95% {
            transform: rotateY(160deg);
        }

        100% {
            transform: rotateY(160deg);
        }
    }
</style>