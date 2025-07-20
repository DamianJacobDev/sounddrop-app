import {createApp} from 'vue'
import './style.css'
import {createWebHistory, createRouter} from 'vue-router'
import routes from './routes'
import App from './App.vue'
import {createPinia} from "pinia";

const router = createRouter({
    history: createWebHistory(),
    routes
})

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
