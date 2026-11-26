import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/MainView.vue'),
    meta: { layout: 'main' }
  },
  // single{id}/{name} / items{}/ cats{}/ product{name}/{id}
  {
    path: '/single',
    component: () => import('../views/SingleView.vue'),
    meta: { layout: 'single' }
  },
  {
    path: '/stat',
    component: () => import('../views/StatisticsView.vue'),
    meta: { layout: 'statistic' }
  },
  {
    path: '/home',
    component: () => import('../views/HomeView.vue'),
    meta: { layout: 'home' }
  },
  {
    path: '/terms',
    component: () => import('../views/TermsView.vue'),
    meta: { layout: 'terms' }
  },
  {
    path: '/privacy-policy',
    component: () => import('../views/PrivacyPolicyView.vue'),
    meta: { layout: 'privacyPolicy' }
  },
  {
    path: '/register',
    component: () => import('../views/RegisterView.vue'),
    meta: { layout: 'register' }
  },
  // {
  //   path: '/adm/admin',
  //   name: 'Admin',
  //   component: Admin,
  //   meta: { hideLayout: true }
  // },
  {
    path: '/malinka',
    component: () => import('../views/social/MalinkaView.vue'),
    meta: {layout: "malinka"}
  },
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