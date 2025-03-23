import { createRouter, createWebHistory } from 'vue-router'
import VMain from '../views/VMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: VMain,
    }
  ],
})

export default router
