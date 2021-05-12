<template>
    <div class="windshield w-10/12 h-6 relative">
        <div class="vertical-windshield w-full h-6 border border-gray-300 bg-white absolute z-10"
            :class="[{'vertical-sweeping': verticalSweeping}, {'vertical-pause': power && !verticalSweeping}, power ? 'switch-on':'switch-off']">
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
        ref,
        Ref,
    } from 'vue'

    import {
        Store,
        useStore
    } from 'vuex'

    export default defineComponent({
        name: 'Windshield',
        setup() {
            const store: Store < any > = useStore()

            const power: ComputedRef = computed(() => store.state.power),
                verticalSweeping: ComputedRef = computed(() => store.state.verticalSweeping),
                horizontalSweeping: ComputedRef = computed(() => store.state.horizontalSweeping)

            return {
                power,
                verticalSweeping,
                horizontalSweeping
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

    .switch-on {
        transform: rotateX(80deg);
    }

    .switch-off {
        transform: rotateX(180deg);
    }

    .horizontal-windshield {
        transform: rotateY(20deg);
        transform-style: preserve-3d;
        transition: 1s all;
    }

    .vertical-sweeping {
        animation: 8s 5s vertical-sweeping infinite ease-in-out;
    }

    .horizontal-sweeping {
        animation: 8s 5s horizontal-sweeping infinite;
    }

    .vertical-pause,
    .horizontal-pause {
        animation-play-state: paused;
    }

    @keyframes switch-off {
        from {
            transform: rotateX(80deg);
        }

        to {
            transform: rotateX(180deg);
        }
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