<template>
    <div
        class="air-conditioner w-full h-40 md:w-100 rounded-t-xl rounded-b-3xl shadow-md border overflow-hidden border-gray-300 relative">
        <div class="energy transform scale-90 absolute top-4 left-10">
            <Energy></Energy>
        </div>
        <div class="temperature absolute top-12 right-8">
            <Temperature></Temperature>
        </div>
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <img class="w-16" src="/icon/midea.png" alt="">
        </div>
        <div class="w-full h-px border border-gray-300 absolute bottom-6"></div>
        <div class="ac-bottom w-full h-auto flex absolute bottom-0 bg-gray-400">
            <div class="w-1/12 h-6 border-r border-gray-300 bg-white"></div>
            <Windshield></Windshield>
            <div class="w-1/12 h-6 border-l border-gray-300 bg-white"></div>
        </div>
        <Voice></Voice>
    </div>
</template>

<script>
    import Energy from './Energy.vue'
    import Windshield from './Windshield.vue'
    import Voice from './Voice.vue'
    import Temperature from './Temperature.vue'

    export default {
        name: 'AcBody',
        components: {
            Energy,
            Windshield,
            Voice,
            Temperature
        }
    }
</script>