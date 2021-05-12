import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import './index.css'
import 'font-awesome/css/font-awesome.min.css'

createApp(App)
    .use(store)
    .mount('#app')
