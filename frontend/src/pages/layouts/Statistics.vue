<template>
  <v-container fluid>
    <div class="px-2 py-2 mongo-box">
      <div>
        <v-btn
          v-for="theme in themes"
          :key="theme.name"
          icon
          :style="{ backgroundColor: theme.color }"
          :class="{ 'active-theme-border': currentTheme === theme.name }"
          size="small"
          @click="setTheme(theme.name)"
        >
          <v-icon
            :color="getIconColor(theme.name)"
            size="small"
          >
            {{ theme.icon }}
          </v-icon>
        </v-btn>
      </div>
    </div>
    <div class="px-2 py-7 my-2 bg-grey-lighten-2">
      <div class="text-body-1">Проект: панель доски статистики</div>
      <div>Статистика по начислениям, гонкам, акциям, прогрессу</div>
    </div>
    <div class="d-flex justify-space-between bg-blue-grey-lighten-4 rounded px-2 py-2">
      <div class="rounded">
        <h1>статистика</h1>
        <p>в реальном времени</p>
      </div>
       <div class="rounded">
        <h1>узнай</h1>
        <p>сколько гонок и киломатража проехано</p>
      </div>
       <div class="rounded">
        <h1>что то еще</h1>
        <p>какие то данные</p>
      </div>
    </div>
  </v-container>

  <v-container fluid>
    <div class="bg-blue-grey-lighten-4 d-flex justify-start pa-2 rounded">
      <v-sheet
        v-for="n in 3"
        :key="n"
        color="purple-darken-4"
        class="flex-grow-1 ma-2 pa-4 rounded"
        elevation="2"
      >
        <h1 class="text-h5 text-white mb-2">
          main {{ n }}
        </h1>
        <p class="text-body-2 text-purple-lighten-4">
          title asdaskd a;skd a;lskd 
        </p>
      </v-sheet>
    </div>
  </v-container>

  <v-container fluid>
    <v-card class="pa-4 rounded-xl" variant="flat" color="purple-lighten-5">
      <v-card-title class="text-purple-darken-4 font-weight-bold">
        Мониторинг (Real-time из БД)
      </v-card-title>
      
      <v-card-text>
        <!--ApexCharts -->
        <apexchart
          type="line"
          height="350"
          :options="chartOptions"
          :series="chartSeries"
        ></apexchart>
      </v-card-text>
    </v-card>
  </v-container>

  <v-container fluid>
    <div class="pl-footer d-flex justify-space-between bg-blue-grey-lighten-4 px-4 py-4 rounded">
      <h2>gg</h2>
    </div>
  </v-container>
</template>

<style scoped>
.active-theme-border {
  outline: 3px solid #757575 !important;
  outline-offset: 2px;
  transition: outline 0.2s ease;
}

.mongo-box {
  background-color: rgb(var(--v-theme-mongoBase)); 
}

.v-application {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, outline-color 0.3s ease;
}

.mongo-box {
  transition: background-color 0.3s ease !important;
}

</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useTheme } from 'vuetify'

interface ThemeOption {
  name: string
  color: string
  icon: string
}

const themeManager = useTheme()

// get current active name theme
const currentTheme = computed<string>(() => themeManager.global.name.value)

// set themes
const themes: ThemeOption[] = [
  { name: 'light', color: '#FFFFFF', icon: 'mdi-white-balance-sunny'},
  { name: 'dark', color: '#121212', icon: 'mdi-weather-night'},
  { name: 'orange-theme', color: '#FF9800', icon: 'mdi-fruit-citrus'} 
]

// toogle themes
const setTheme = (themeName: string): void => {
  themeManager.global.name.value = themeName
}

const getIconColor = (themeName: string): string => {
  if (themeName === 'light') return '#000000'
  return '#FFFFFF' // Для темной и оранжевой сделаем белые иконки
}

const chartOptions = ref({
  chart: {
    id: 'ts-realtime-stats',
    animations: {
      enabled: true,
      easing: 'linear',
      dynamicAnimation: {
        speed: 1000 
      }
    },
    toolbar: { show: false }
  },
  colors: ['#4A148C'],
  xaxis: {
    categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл']
  },
  stroke: {
    curve: 'smooth' 
  }
})

//   данными из API)
interface ChartSeriesItem {
  name: string
  data: number[]
}

const chartSeries = ref<ChartSeriesItem[]>([
  {
    name: 'Загрузка системы (%)',
    data: [30, 40, 35, 50, 49, 60, 70]
  }
])

// 3.  Real-time работы с API
let intervalId: ReturnType<typeof setInterval> | null = null

const fetchApiData = (): void => {
  // Когда будете делать реальный запрос через fetch или axios:
  // const response = await axios.get<number[]>('/api/stats')
  // const newData = response.data
  
  // Генерируем новые случайные данные (строго массив чисел `number[]`)
  const newData: number[] = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100))
  
  // Присваиваем новое значение — реактивность Vue 3 сама обновит график
  chartSeries.value = [{
    name: 'Загрузка системы (%)',
    data: newData
  }]
}

// Запускаем опрос "сервера" при монтировании компонента
onMounted(() => {
  intervalId = setInterval(fetchApiData, 3000) // Обновление каждые 3 секунды
})

// Обязательно очищаем таймер, чтобы не нагружать браузер, если ушли со страницы
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>