import { createApp } from 'vue'
import App from './App.vue'
import router from './store/store'
import store from './store/store'

import './assets/tailwind.css'


createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
