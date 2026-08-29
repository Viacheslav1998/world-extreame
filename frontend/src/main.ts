import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'

createApp(App)
  .use(vuetify)
  .use(router)
  .use(VueApexCharts)
  .mount('#app')
