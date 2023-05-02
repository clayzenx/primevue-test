import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import PrimeVue from 'primevue/config'
import App from './App.vue'

import './styles/main.css'
import 'uno.css'
// primevue
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.use(PrimeVue)
app.mount('#app')
