import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '../pages/Home.vue'
import Single from '../pages/Single.vue'
import Main from '../layouts/Main.vue'
import Statistics from '../layouts/Statistics.vue'
import NotFound from '../layouts/NotFound.vue'
import Register from '../layouts/Register.vue'
import Admin from '../layouts/Admin.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // single{id}/{name} / items{}/ cats{}/ product{name}/{id}
  {
    path: '/single',
    name: 'single',
    component: Single
  },
  {
    path: '/stat',
    name: 'statistics', 
    component: Statistics,
    meta: { hideLayout: true }
  },
  {
    path: '/main',
    name: 'main', 
    component: Main,
    meta: { hideLayout: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { hideLayout: true }
  },
  {
    path: '/adm/admin',
    name: 'Admin',
    component: Admin,
    meta: { hideLayout: true }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { hideLayout: true }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { 
      top: 0, 
      behavior: 'smooth'
    }
  }
})

export default router