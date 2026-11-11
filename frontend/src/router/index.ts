import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/MainView.vue'),
    meta: { layout: 'main' }
  },
  // single{id}/{name} / items{}/ cats{}/ product{name}/{id}
  // {
  //   path: '/single',
  //   component: () => import('../views/Single.vue'),
  //   meta: { layout: 'default' }
  // },
  // {
  //   path: '/stats',
  //   component: () => import('../layouts/Statistics.vue'),
  //   meta: { layout: 'statistic' }
  // },
  {
    path: '/home',
    component: () => import('../views/HomeView.vue'),
    meta: { layout: 'home' }
  },
  {
    path: '/terms',
    component: () => import('../views/TermsView.vue'),
    meta: {layout: 'terms'}
  },
  {
    path: '/privacy-policy',
    component: () => import('../views/PrivacyPolicyView.vue'),
    meta: {layout: 'privacyPolicy'}
  },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: Register,
  //   meta: { hideLayout: true }
  // },
  // {
  //   path: '/adm/admin',
  //   name: 'Admin',
  //   component: Admin,
  //   meta: { hideLayout: true }
  // },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFoundView.vue'),
    meta: {layout: 'notFound'}
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