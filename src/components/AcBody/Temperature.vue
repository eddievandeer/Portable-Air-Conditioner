<template>
    <div class="w-20 h-6 border border-gray-200 rounded-md flex items-center justify-center">
        <i class=" h-4 fa fa-snowflake-o mx-0.5 text-blue-400" aria-hidden="true"
            :class="{'active' : power&&cording}"></i>
        <i class="fa fa-sun-o mx-0.5 text-yellow-500" aria-hidden="true" :class="{'active' : power&&heating}"></i>
        <div class="w-2/3 h-full rounded flex justify-center items-center bg-gray-100">
            <span class="temperature text-2xl text-green-500" :class="{'active' : power}">{{temperature}}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        computed,
        ComputedRef,
        defineComponent
    } from "vue";
    import {
        Store,
        useStore
    } from "vuex";

    export default defineComponent({
        name: 'Temperature',
        setup() {
            const store: Store < any > = useStore()

            const power: ComputedRef = computed(() => store.state.power),
                temperature: ComputedRef = computed(() => store.state.temperature),
                cording: ComputedRef = computed(() => store.state.cording),
                heating: ComputedRef = computed(() => store.state.heating)

            return {
                power,
                temperature,
                cording,
                heating
            }
        }
    })
</script>

<style scoped>
    .temperature {
        font-family: "Digital-7 Mono";
    }

    i {
        opacity: 0;
        transition: .5s opacity;
    }

    i.active {
        opacity: 1;
    }

    span {
        opacity: 0;
    }

    span.active {
        opacity: 1;
    }
</style>