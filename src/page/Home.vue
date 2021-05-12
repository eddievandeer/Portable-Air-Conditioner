<template>
    <div class="w-full flex flex-col items-center">
        <div class="py-6 flex flex-col items-center">
            <span class="mb-4 text-gray-600 text-4xl">便携式空调</span>
            <p class="text-sm text-gray-400">采用心静自然凉算法，让你在炎炎夏日里时刻保持清凉！</p>
        </div>
        <AcBody></AcBody>
        <AcController></AcController>
    </div>
    <Footer></Footer>
</template>

<script>
    import AcBody from '../components/AcBody/index.vue'
    import AcController from '../components/AcController/index.vue'
    import Footer from '../components/Footer.vue'

    export default {
        name: 'Home',
        components: {
            AcBody,
            AcController,
            Footer
        }
    }
</script>