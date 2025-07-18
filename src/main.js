import { createApp } from 'vue'
import './style.css'
import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
.use(router)
.mount('#app')
