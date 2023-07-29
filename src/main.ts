import { createApp } from 'vue'
import './style.css'
import './assets/css/reset.css';
import App from './App.vue'
// @ts-ignore
import router from '@/router'

createApp(App)
.use(router)
.mount('#app')
