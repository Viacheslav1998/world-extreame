<template>
  <v-container fluid>
    <div class="px-2 py-2 mongo-box d-flex justify-space-between">
      <div class="d-flex ga-1">
        <v-btn
          v-for="theme in themes"
          :key="theme.name"
          icon
          width="25"
          height="25"
          :style="{ backgroundColor: theme.color }"
          :class="{ 'active-theme-border': currentTheme === theme.name }"
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
      <div>
        EN
      </div>
    </div>
    <div class="d-flex px-2 py-4 mt-8 mongo-box">
      <div>
        <v-icon
          class="mdi mdi-balloon icon-ballon-custom"
          size="large"
          color="error"
        >
        </v-icon>
      </div>
      <div>
         <div class="text-body-1">Проект: панель доски статистики</div>
         <div>Статистика по начислениям, гонкам, акциям, прогрессу</div>
      </div>
    </div>
  </v-container>

  <v-container fluid>
    <div class="mongo-box d-flex justify-start pa-2 ">
      <v-sheet
        v-for="n in 3"
        :key="n"
        color="purple-darken-4"
        class="flex-grow-1 ma-2 pa-4 "
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
    
    <v-card class="pa-4 mongo-box" variant="flat" >
      <v-card-title class="font-weight-bold">
        Мониторинг (Real-time из БД)
      </v-card-title>
      <v-card-text>
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
    <v-row no-gutters>
      <v-col cols="6" class="pr-1 py-1">
        <v-sheet class="h-100 pa-4" color="white" border >
          <div>Большой блок (Слева)</div>
        </v-sheet>
      </v-col>

      <v-col cols="6">
        <v-row no-gutters>
          <v-col cols="6" class="pl-1 py-1">
            <v-sheet class="pa-4" height="200" color="white" border >
              <div>$874</div>
            </v-sheet>
          </v-col>
          
          <v-col cols="6" class="pl-2 py-1">
            <v-sheet class="pa-4" height="200" color="white" border >
              <div>$1283</div>
            </v-sheet>
          </v-col>
          
          <v-col cols="6" class="pl-1 py-1">
            <v-sheet class="pa-4" height="200" color="white" border >
              <div>$1286</div>
            </v-sheet>
          </v-col>

          <v-col cols="6" class="pl-2 py-1">
            <v-sheet class="pa-4" height="200" color="white" border >
              <div>$564</div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid>
    <v-data-table
      class=""
      :headers="headers"
      :items="plants"
      density="compact"
      item-key="name"
    ></v-data-table>
  </v-container>

  <v-container fluid>
    <div class="pl-footer d-flex justify-space-between mongo-box px-4 py-4 ">
      <h4>Motostorm-statics</h4>
    </div>
  </v-container>

</template>

<style scoped>
.active-theme-border {
  outline: 2px solid #727272 !important;
  transition: outline 1.0s ease;
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

.icon-ballon-custom {
  padding: 20px;
  margin: 6px 20px 10px 20px;
  background-color: #e0e0e0;
}

.milk { background-color: #E2DDD4;}
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


// tables 
interface Header {
  title: string
  align?: 'start' | 'end' | 'center'
  sortable?: boolean
  key: string
}

// headers
const headers: Header[] = [
  { title: 'Гонщик', align: 'start', sortable: false, key: 'name'},
  { title: 'Машина', align: 'end', key: 'car' },
  { title: 'Дисциплина', align: 'end', key: 'сlass' },
  { title: 'Статус', align: 'end', key: 'status' },
  { title: 'Доход', align: 'end', key: 'profit' },
]

interface Plants {
  name: string
  car: string
  сlass: string
  status: string
  profit: number
}

const plants: Plants[] = [
   {
      name: 'Джон',
      car: 'Honda civic (2003)',
      сlass: 'Rally',
      status: 'выбыл',
      profit: -1200,
    },
    {
      name: 'Снэйк',
      car: 'Toyota yaris',
      сlass: 'Rally cross',
      status: 'участвует',
      profit: 2200,
    },
    {
      name: 'Монтана',
      car: 'Nissan 240sx',
      сlass: 'Drift',
      status: 'прошел',
      profit: 4000,
    },
    {
      name: 'Кандис',
      car: 'Mitsubishi evo',
      сlass: 'Drift',
      status: 'прошел',
      profit: 4400,
    },
    {
      name: 'Стас',
      car: 'Saab',
      сlass: 'Rally',
      status: 'учавствует',
      profit: 2000,
    },
    {
      name: 'Купер Н',
      car: 'Aston Martin',
      сlass: 'Grip',
      status: 'учавствует',
      profit: 5000,
    },
    {
      name: 'Артем',
      car: 'Nissan 370z',
      сlass: 'Drift',
      status: 'прошел',
      profit: 6000,
    },
    {
      name: 'Вячеслав',
      car: 'BMW E30',
      сlass: 'Rally',
      status: 'прошел',
      profit: 4100,
    },
    {
      name: 'Илья',
      car: 'Nissan r32',
      сlass: 'Rally',
      status: 'учавствует',
      profit: 6500,
    },
    {
      name: 'Максим',
      car: 'Vaz 2107',
      сlass: 'Rally',
      status: 'учавствует',
      profit: 2590,
    },
]
// end tables

// toogle themes
const setTheme = (themeName: string): void => {
  themeManager.global.name.value = themeName
}

const getIconColor = (themeName: string): string => {
  if (themeName === 'light') return '#000000'
  return '#FFFFFF'
}


const chartOptions = computed(() => {
  const isDark = themeManager.global.current.value.dark

  return {
    chart: {
      id: 'ts-realtime-stats',
      foreColor: isDark ? '#FFFFFF' : '#333333', 
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000 
        }
      },
      toolbar: { show: false }
    },
    theme: {
      mode: isDark ? 'dark' : 'light'
    },
    colors: [isDark ? 'orange' : 'red'],
    xaxis: {
      categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл']
    },
    stroke: {
      curve: 'smooth' 
    }
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
  
  chartSeries.value = [{
    name: 'Загрузка системы (%)',
    data: newData
  }]
}

onMounted(() => {
  intervalId = setInterval(fetchApiData, 3000)
})

// чистка на выхрде что бы не засорять память
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>