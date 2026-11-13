<template>
  <component :is="currentLayout">
    <router-view/>
  </component>
</template>

<script setup lang="ts"> 
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();

// import dynamic layouts
const layouts = {
  main: defineAsyncComponent(() => import('./layouts/MainLayout.vue')),
  home: defineAsyncComponent(() => import('./layouts/HomeLayout.vue')),
  privacyPolicy: defineAsyncComponent(() => import('./layouts/PrivacyPolicyLayout.vue')),
  terms: defineAsyncComponent(() => import('./layouts/TermsLayouts.vue')),
  admin: defineAsyncComponent(() => import('./layouts/Admin.vue')),
  notFound: defineAsyncComponent(() => import('./layouts/NotFoundLayout.vue')),
  register: defineAsyncComponent(() => import('./layouts/RegisterLayout.vue')),
  statistic: defineAsyncComponent(() => import('./layouts/StatisticLayout.vue')),
  user: defineAsyncComponent(() => import('./layouts/User.vue'))
}

// define how template use - [ use default ]
const currentLayout = computed(() => {
  const layoutName = route.meta.layout as keyof typeof layouts
  return layouts[layoutName] || layouts.main
})
</script>