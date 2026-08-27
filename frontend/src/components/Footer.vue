<template>
  <v-container>
    <div class="bg-indigo-lighten-2 d-flex align-center px-4 py-2">
      <div class="py-2 pl-2"> 
        <span class="font-weight-bold">быстрая навигация:</span> 
      </div>
      <v-spacer></v-spacer>
      <!-- btn faster navi -->   
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
        />
        <v-tooltip
          activator="parent" location="top"
        >
        {{ getTooltipText(item.action) }}
        </v-tooltip>
      </v-btn>
      <!-- end btn navi -->
    </div>
  </v-container>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="indigo-lighten-1">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon.name"
        :icon="icon.name"
        density="comfortable"
        variant="text"
      >
      </v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-90">
     Международный чемпионат по разным экстремальным дисциплинам
			<br>
       новости - сообщество - снаряжение - партнеры
       <br>
        Казахстан - Греция - Италия 
    </div>
    <v-divider class="my-2" thickness="2" width="50"></v-divider>
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
          <div v-for="item in column.items" :key="item" class="mb-1">
            <a href="#" class="custom-line-menu">{{ item }}</a>
          </div>
        </v-col>
      </v-row>
    </div>
    <v-divider thickness="2" width="50"></v-divider>
    <div>
       <span class="text-red-accent-1 font-weight-bold">{{ new Date().getFullYear() }}. </span><span>Все права сохранены.</span><br><br>
      <span class="text-h1 font-weight-bold">World-<span class="text-red-accent-1">Extreame</span>.com</span>
    </div>
  </v-footer>
</template>

<style>
.custom-list-none {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.custom-list li {
  text-align: left;
}

.custom-line-menu {
  font-size: 13px;
  color: wheat;
  text-decoration: none;
}

.custom-line-menu:hover {
  color: #FF8A80;
  font-weight: bold;
}
</style>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

interface icon {
  name: string
}

interface MenuColumn {
  title: string, 
  items: string[]
}

type ActionType = 'admin' | 'toggle-page'

interface NavItem {
  icon: string
  action: ActionType
}

const router = useRouter()
const route = useRoute()

const navItems = ref<NavItem[]>([
  { icon: '/news/settings.png', action: 'admin' },
  { icon: '/news/back.png', action: 'toggle-page' } 
])

// current page
const currentPage = computed(() => route.path === '/')

// alt title / dynamic change
const getTooltipText = (action: ActionType): string => {
  if (action === 'admin') return 'Админ-панель'
  return currentPage.value ? 'к прошлой новости' : 'На главную'
}

// fast navigation
const handleAction = (actionType: ActionType): void => {
  if (actionType === 'admin') {
    router.push('/admin')
  } else if (actionType === 'toggle-page') {
    if (route.path === '/single') {
      router.push('/')
    } 
    else {
      router.push('/single')
    }
  }
}

const icons: icon[] = [
  {  name: 'mdi-facebook' },
  {  name: 'mdi-twitter' },
  {  name: 'mdi-linkedin' },
  {  name: 'mdi-instagram' }
]

const MenuColumns: MenuColumn[] = [
  {
    title: 'Партнеры',
    items: ['KSW7', 'WebStrom', 'Kikdown', 'GameGround']
  },
  {
    title: 'Компания',
    items: ['О нас', 'Вакансии', 'Контакты'] 
  },
  {
    title: 'Разработчики',
    items: ['SilentStrom', 'Ak4ella']
  },
  {
    title: 'Магазины',
    items: ['Bclcross', 'TGready', 'Adventures']
  },
  {
    title: 'Документы',
    items: ['Политика', 'Оферта']
  }
]

</script>
