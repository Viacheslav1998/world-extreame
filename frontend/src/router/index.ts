import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from "../pages/Home.vue"
import Single from "../pages/Single.vue"
import Main from "../pages/layouts/Main.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    meta: { hideLayout: true }
  },
  // single{id}/{name} / items{}/ cats{}/ product{name}/{id}
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