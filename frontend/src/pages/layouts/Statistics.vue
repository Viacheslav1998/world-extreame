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
          class="mt-2 mdi mdi-balloon icon-ballon-custom"
          size="large"
          color="error"
        >
        </v-icon>
      </div>
      <div>
        <div class=" pt-1 font-weight-thin">Комната статистики</div>
        <div class="font-weight-thin">здесь есть - процент побед, износ ресурсов, покрышек, рейтинг и прочее</div>
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
        Мониторинг заездов:
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

  <v-container fluid class="pa-4">
    <div class="mb-4">статистика побед: износ шин, траты на запчасти, топливо, кузов</div>
    
    <v-row no-gutters class="mongo-box">      

      <!-- ЛЕВАЯ ЧАСТЬ: Один большой график -->
      <v-col cols="12" md="6" class="pa-2">
        <v-card variant="outlined" style="height: 337px;" class="pa-0">
          <apexchart
            :key="`big-${chartKeyCounter}`"
            type="bar"
            height="100%"
            width="100%"
            :options="TyresChartOptions"
            :series="victories"
          ></apexchart>
        </v-card>
      </v-col>

      <!-- ПРАВАЯ ЧАСТЬ: 4 маленьких графика -->
      <v-col cols="12" md="6">
        <v-row no-gutters>

          <v-col cols="6" class="pa-2">
            <v-card variant="outlined" style="height: 160px;" class="pa-0">
              <apexchart
                :key="`small-1-${chartKeyCounter}`"
                type="bar"
                height="160"
                width="100%"
                :options="TyresChartOptions"
                :series="tireWear"
              ></apexchart>
            </v-card>
          </v-col>

          <v-col cols="6" class="pa-2">
            <v-card variant="outlined" style="height: 160px;" class="pa-0">
              <apexchart
              :key="`small-1-${chartKeyCounter}`"
                type="bar"
                height="160"
                width="100%"
                :options="TyresChartOptions"
                :series="spareParts"
              ></apexchart>
            </v-card>
          </v-col>

          <v-col cols="6" class="pa-2">
            <v-card variant="outlined" style="height: 160px;" class="pa-0">
              <apexchart
              :key="`small-1-${chartKeyCounter}`"
                type="bar"
                height="160"
                width="100%"
                :options="TyresChartOptions"
                :series="fuel"
              ></apexchart>
            </v-card>
          </v-col>

          <v-col cols="6" class="pa-2">
            <v-card variant="outlined" style="height: 160px;" class="pa-0">
              <apexchart
              :key="`small-1-${chartKeyCounter}`"
                type="bar"
                height="160"
                width="100%"
                :options="TyresChartOptions"
                :series="bodyworkExpenses"
              ></apexchart>
            </v-card>
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
import { ref, nextTick, onMounted, onUnmounted, computed } from 'vue'
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
// решение проблемы с багом когда меняется тема все улетает без данного кода
// Создаем простой счетчик для принудительного обновления графиков
const chartKeyCounter = ref<number>(0)

const setTheme = async (themeName: string): Promise<void> => {

  // 1. Мгновенно меняем тему Vuetify
  themeManager.global.name.value = themeName
  
  // 2. Ждем, пока Vuetify полностью обновит DOM, применит все стили, 
  // карточки встанут на свои места и их размеры стабилизируются
  await nextTick()
  
  // Дополнительно даем микро-задержку в 50-100мс, чтобы браузер успел отрендерить CSS transitions
  setTimeout(() => {
    // 3. Пиннаем счетчик! Все графики увидят изменение ключа и перерисуются 
    // уже в ИДЕАЛЬНО стабильном и готовом DOM-контейнере
    chartKeyCounter.value++
  }, 50)
}

const getIconColor = (themeName: string): string => {
  if (themeName === 'light') return '#000000'
  return '#FFFFFF'
}


// big panel left
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


interface SeriesData {
  name: string
  data: number[]
}

// end big panel left

// =================

// big stats params
const victories = ref<SeriesData[]>([
  {
    name: 'Cash Flow',
    data: [
      1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09,
      0.34, 3.88, 13.07, 5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8,
      -27.03, -50.4, -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6,
      -29.4, -21.4, -2.4,
    ],
  },
])


// 1 stats params

const tireWear = ref<SeriesData[]>([
  {
    name: 'Revenue Growth',
    data: [
      3.21, 5.44, 8.91, 11.23, 14.56, 18.22, 22.11, 25.43, 21.09, 23.45,
      27.89, 31.42, 35.67, 39.12, 42.05, 45.18, 48.99, 52.31, 55.45, 50.12,
      45.67, 30.21, 15.43, 8.92, -2.34, -10.56, -15.21, -8.43, 2.11, 5.67,
      12.34, 18.91, 24.56
    ],
  },
])

// 2 stats params

const spareParts = ref<SeriesData[]>([
  {
    name: 'Market Share',
    data: [
      -5.2, -3.15, 2.4, 8.65, 14.2, 11.8, 5.43, -1.22, -8.95, -14.3,
      -10.2, -4.15, 3.6, 9.42, 15.1, 12.35, 6.12, -0.5, -7.8, -13.9,
      -11.1, -5.3, 2.85, 8.9, 13.54, 10.9, 4.23, -2.1, -9.45, -15.2,
      -8.3, -2.15, 4.4
    ],
  },
])

// 3 stats params

const fuel = ref<SeriesData[]>([
  {
    name: 'Operational Expenses',
    data: [
      25.4, 22.1, 18.6, 12.3, 5.4, -2.1, -9.5, -15.4, -22.1, -28.4,
      -35.2, -41.6, -38.2, -30.5, -22.4, -14.1, -5.3, 2.6, 10.4, 18.9,
      26.5, 32.1, 28.4, 20.2, 12.5, 4.1, -3.6, -11.2, -19.4, -25.6,
      -31.2, -36.8, -42.5
    ],
  },
])

// 4 stats params


const bodyworkExpenses = ref<SeriesData[]>([
  {
    name: 'Net Profit',
    data: [
      -45.2, -41.35, -38.6, -32.15, -28.4, -22.1, -15.35, -9.2, -4.1, 2.35,
      8.6, 14.2, 11.55, 5.3, -1.2, -8.65, -14.3, -20.1, -25.65, -31.4,
      -36.2, -42.15, -48.4, -45.1, -39.35, -32.6, -26.4, -19.15, -12.3, -5.1,
      1.45, 7.8, 13.25
    ],
  },
])
// ==============


// mini widget
const TyresChartOptions = computed<ApexOptions>(() => {
  const isDark = themeManager.global.current.value.dark

  return {
    chart: {
      type: 'bar',
      height: 350,
      foreColor: isDark ? '#FFFFFF' : '#333333',
      defaultLocale: 'ru',
      locales: [{
        name: 'ru',
        options: {
           months: [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
          ],
          shortMonths: [
            'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 
            'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
          ],
          days: [
            'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 
            'Четверг', 'Пятница', 'Суббота'
          ],
          shortDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
          toolbar: {
            download: 'Скачать SVG',
            selection: 'Выбор',
            selectionZoom: 'Масштаб выбора',
            zoomIn: 'Увеличить',
            zoomOut: 'Уменьшить',
            pan: 'Панорамирование',
            reset: 'Сбросить масштаб',
          }
        }
      }]
    },
    theme: {
      mode: isDark ? 'dark' : 'light'
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
        style: {
          color: isDark ? '#FFFFFF' : '#333333'
        }
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
  }
})
// end mini widget 


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

<!-- я знаю что когда много js кода лучше делать части тех же виджетов графиков - 
 но ради одного файла я решил так не делать ибо это долго
 главное принцип и пример работы 
 остальное мелочи 
 -->