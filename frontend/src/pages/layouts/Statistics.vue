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
        <br>
        <div class="font-weight-thin ml-1">
          <p> World-Extreame.com </p>
        </div>
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
        <div class="text-body-1 pt-1">Проект: панель доски статистики</div>
        <div>Статистика по начислениям, гонкам, акциям, прогрессу</div>
      </div>
    </div>
  </v-container>

  <v-container fluid>
    <div class="mongo-box d-flex justify-start pa-2 ">
      
     <v-sheet class="flex-grow-1 ma-2 pa-4" rounded="lg" border>
      <div class="d-flex align-center mb-2">
        <v-btn
          color="primary"
          icon="mdi-arrow-left"
          variant="text"
          density="comfortable"
          class="me-2"
          :to="{ name: 'Home' }" 
        ></v-btn>
        
        <h1 class="text-h5 mb-0 text-primary">
          вернуться 
        </h1>
      </div>
      
      <p class="text-body-2 text-medium-emphasis">
        просто и быстро
      </p>
    </v-sheet>

    <v-sheet class="flex-grow-1 ma-2 pa-4" rounded="lg" border>
      <div class="d-flex align-center mb-2">
        <v-btn
          color="red"
          icon="mdi-arrow-left"
          variant="text"
          density="comfortable"
          class="me-2"
          :to="{ name: 'main' }" 
        ></v-btn>
        
        <h1 class="text-h5 mb-0  text-red">
          в меню 
        </h1>
      </div>
      
      <p class="text-body-2 text-medium-emphasis">
        выбери категорию, магазин или новости
      </p>
    </v-sheet>

    <v-sheet class="flex-grow-1 ma-2 pa-4" rounded="lg" border>
      <div class="d-flex align-center mb-2">
        <v-btn
          color="success"
          icon="mdi-arrow-left"
          variant="text"
          density="comfortable"
          class="me-2"
          :to="{ name: 'Home' }" 
        ></v-btn>
        
        <h1 class="text-h5 mb-0 text-success">
          о нас 
        </h1>
      </div>
      
      <p class="text-body-2 text-medium-emphasis">
        контакты и контракты
      </p>
    </v-sheet>
      
    </div>
  </v-container>

  <v-container fluid>
    <v-card class="pa-4 mongo-box" variant="flat">
      <v-card-title class="font-weight-bold">
        Мониторинг (Real-time)
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
          <div>
             <div>
              <apexchart
                type="bar"
                height="350"
                :options="TyresChartOptions"
                :series="typeTires"
              ></apexchart>
            </div>
          </div>
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
      :headers="headers"
      :items="plants"
      density="compact"
      item-key="name"
    ></v-data-table>
  </v-container>

  <v-container fluid>
    <div class="pl-footer d-flex justify-start mongo-box px-4 py-4">
      <div class="ma-2">
        <h4 class="font-weight-thin">Motostorm-statics</h4>
      </div>
      <div class="ma-2 font-weight-thin">
        <p>Apache-Host-Panel</p>
      </div>
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
import type { ApexOptions } from 'apexcharts'

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


// big panel left
interface SeriesData {
  name: string
  data: number[]
}

const typeTires = ref<SeriesData[]>([
  {
    name: 'Cash Flow',
    data: [
      1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09,
      0.34, 3.88, 13.07, 5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8,
      -27.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6,
      -29.4, -21.4, -2.4,
    ],
  },
])

const TyresChartOptions = ref<ApexOptions>({
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      colors: {
        ranges: [
          {
            from: -100,
            to: -46,
            color: '#F15B46',
          },
          {
            from: -45,
            to: 0,
            color: '#FEB019',
          },
        ],
      },
      columnWidth: '80%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    title: {
      text: 'Growth',
    },
    labels: {
      formatter: function (y: number) {
        return y.toFixed(0) + '%'
      },
    },
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2024-03-01', '2024-04-01', '2024-05-01', '2024-06-01', '2024-07-01',
      '2024-08-01', '2024-09-01', '2024-10-01', '2024-11-01', '2024-12-01',
      '2025-01-01', '2025-02-01', '2025-03-01', '2025-04-01', '2025-05-01',
      '2025-06-01', '2025-07-01', '2025-08-01', '2025-09-01', '2025-10-01',
      '2025-11-01', '2025-12-01', '2026-01-01', '2026-02-01', '2026-03-01',
      '2026-04-01', '2026-05-01', '2026-06-01', '2026-07-01', '2026-08-01',
      '2026-09-01', '2026-10-01', '2026-11-01', '2026-12-01',
    ],
    labels: {
      rotate: -90,
    },
  },
})

// end big panel left

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