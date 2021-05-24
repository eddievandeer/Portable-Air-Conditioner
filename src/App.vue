<template>
  <Home></Home>
</template>

<script lang="ts">
  import {
    defineComponent
  } from 'vue'

  import {
    Store,
    useStore
  } from 'vuex'

  import Home from './page/Home.vue'
  import State from './types/state.type'
  import {
    INIT_AC
  } from '@store/mutation-types'

  export default defineComponent({
    name: 'App',
    components: {
      Home
    },
    setup() {
      const store: Store < any > = useStore()

      const state: State = {
        temperature: localStorage.getItem('temperature') ?
          parseInt(localStorage.getItem('temperature') as string) : null,
        mode: localStorage.getItem('mode') ?
          localStorage.getItem('mode') as string === 'cooling' : null,
        verticalSweeping: localStorage.getItem('verticalSweeping') ?
          localStorage.getItem('verticalSweeping') as string === 'true' : null,
        horizontalSweeping: localStorage.getItem('horizontalSweeping') ?
          localStorage.getItem('horizontalSweeping') as string === 'true' : null
      }

      store.commit(INIT_AC, state)

      console.log(
        `%c ☁️ air-conditioner %c https://github.com/eddievandeer/Portable-Air-Conditioner`,
        "color: white; background: #0078E7; padding:5px 0;",
        "padding:4px;border:1px solid #0078E7;"
      );
      console.log(
        `%c ☁️ @ Vivek %c http://cavalheiro.cn/`,
        "color: white; background: #0078E7; padding:5px 0;",
        "padding:4px;border:1px solid #0078E7;"
      );
    }
  })
</script>