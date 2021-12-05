import * as Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Design from './components/Design.vue'
import './styles/Home.css'
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/designs',
      component: Design
    },
  ]
})

Vue.createApp(App).use(router).mount('#app')