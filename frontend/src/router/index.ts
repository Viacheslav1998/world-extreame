import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from "../pages/Home.vue"
import Single from "../pages/Single.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // single{id}/{name}
  {
    path: '/single',
    name: 'single',
    component: Single
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router