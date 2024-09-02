import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/**
 * Importamos enrutador
 * se exporta un único archivo desde router/index.js
 */
import router from './router'

createApp(App).use(router).mount('#app')
