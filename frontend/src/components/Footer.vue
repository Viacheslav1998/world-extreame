<template>
  <v-footer class="d-flex flex-column p-0" color="indigo-lighten-1">
    <!-- faster navi -->
    <div class="w-100 bg-indigo-lighten-2 d-flex align-center px-4 py-2">
      <div class="py-2 pl-2"> 
        <span class="font-weight-bold">быстрая навигация:</span> 
      </div>
      <v-spacer></v-spacer>
      
      <v-btn
        v-for="(item, index) in navItems"
        :key="index"
        icon
        size="small"
        density="compact"
        class="ms-2"
        @click="handleAction(item.action)"
      >
        <img 
          :src="item.icon"
          width="12"
          height="12"
          alt="icon"
        />
        <v-tooltip activator="parent" location="top">
          {{ getTooltipText(item.action) }}
        </v-tooltip>
      </v-btn>
    </div>

    <!-- main content footer -->
    <div class="text-center d-flex flex-column ga-2 py-4 w-100">
      <div class="d-flex ga-3 justify-center">
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          :icon="icon.name"
          density="comfortable"
          variant="text"
        ></v-btn>
      </div>

      <v-divider class="my-2 mx-auto" thickness="2" width="50"></v-divider>

      <div class="text-caption font-weight-regular opacity-95">
        Международный чемпионат по разным экстремальным дисциплинам
        <br>
        новости - сообщество - снаряжение - партнеры
        <br>
        Казахстан - Греция - Италия 
      </div>

      <v-divider class="my-2 mx-auto" thickness="2" width="50"></v-divider>

      <div class="w-100 px-4">
        <v-row justify="space-around">
          <v-col
            v-for="column in MenuColumns"
            :key="column.title"
            cols="12"
            sm="2"
            class="text-left"
          >
            <h4 class="text-white mb-2">{{ column.title }}</h4>
            
            <div class="d-flex flex-column align-start ga-1">
            <v-btn
                v-for="item in column.items"
                :key="item.title"
                :to="item.to"
                variant="text"
                density="compact"
                height="auto"
                :ripple="false"
                class="pa-0 pb-2 ma-0 min-w-0 justify-start text-body-2 font-weight-regular  text-none custom-line-menu"
              >
                {{ item.title }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-divider class="my-2 mx-auto" thickness="2" width="50"></v-divider>

      <div>
        <span class="text-red-accent-1 font-weight-bold">{{ new Date().getFullYear() }}. </span>
        <span>Все права сохранены.</span><br><br>
        <span class="text-h4 font-weight-bold">World-<span class="text-red-accent-1">Extreame</span>.com</span>
      </div>
    </div>
  </v-footer>
</template>

<style>

</style>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

interface Icon {
  name: string
}

interface MenuItem {
  title: string,
  to: string
}

interface MenuColumn {
  title: string,
  items: MenuItem[]
}


type ActionType = 'admin' | 'toggle-page' | 'enter'

interface NavItem {
  icon: string
  action: ActionType
}

const router = useRouter()
const route = useRoute()

const navItems = ref<NavItem[]>([
  { icon: '/news/settings.png', action: 'admin' },
  { icon: '/news/back.png', action: 'toggle-page' }, 
  { icon: '/news/enter.png', action: 'enter' },
])

// current page
const currentPage = computed(() => route.path === '/')

// alt title / dynamic change
const getTooltipText = (action: ActionType): string => {
  if (action === 'admin') return 'Админ-панель'
  if (action === 'enter') return 'Регистрация/вход'
  return currentPage.value ? 'к прошлой новости' : 'На главную'
}

// fast navigation  
const handleAction = (actionType: ActionType): void => {
  switch(actionType) {
    case 'admin':
      router.push('/adm/main');
      break;

      case 'toggle-page':
        if (route.path === '/home') {
          router.push('/')
        } else {
          router.push('/home')
        }
      break;

    case 'enter':
      router.push('/register')
      break;
  }
}

const icons: Icon[] = [
  {  name: 'mdi-facebook' },
  {  name: 'mdi-twitter' },
  {  name: 'mdi-linkedin' },
  {  name: 'mdi-instagram' }
]

const MenuColumns: MenuColumn[] = [
  {
    title: 'Партнеры',
    items: [
      { title: 'KSW7', to: '/partners/ksw7' },
      { title: 'WebStrom', to: '/partners/webstrom' },
      { title: 'Kikdown', to: '/partners/kikdown' },
      { title: 'GameGround', to: '/partners/gameground' }
    ]
  },
  {
    title: 'Компания',
    items: [
      { title: 'О нас', to: '/about' },
      { title: 'Вакансии', to: '/jobs' },
      { title: 'Контакты', to: '/contacts' }
    ]
  },
  {
    title: 'Разработчики',
    items: [
      { title: 'SilentStrom', to: '/devs/silentstrom' },
      { title: 'Ak4ella', to: '/devs/ak4ella' }
    ]
  },
  {
    title: 'Магазины',
    items: [
      { title: 'Bclcross', to: '/shops/bclcross' },
      { title: 'TGready', to: '/shops/tgready' },
      { title: 'Adventures', to: '/shops/adventures' }
    ]
  },
  {
    title: 'Документы',
    items: [
      { title: 'Политика', to: '/privacy-policy' },
      { title: 'Условия использования', to: '/terms' }
    ]
  }
]

</script>
