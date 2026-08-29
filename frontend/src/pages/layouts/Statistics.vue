<template>
  <v-container>
    <div class="pl-header d-flex justify-space-between bg-blue-grey-lighten-4 px-4 py-4 rounded">
      <div class="x-panel rounded elevation-4">
        <h1>статистика</h1>
        <p>в реальном времени</p>
      </div>
       <div class="x-panel rounded elevation-4">
        <h1>узнай</h1>
        <p>сколько гонок и киломатража проехано</p>
      </div>
       <div class="x-panel rounded elevation-4">
        <h1>что то еще</h1>
        <p>какие то данные</p>
      </div>
    </div>
  </v-container>

  <v-container>
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

  <v-container>
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


  <v-container>
    <div class="pl-footer d-flex justify-space-between bg-blue-grey-lighten-4 px-4 py-4 rounded">
      <h2>gg</h2>
    </div>
  </v-container>
</template>


<style scoped>
  .pl-header {
    background-image: url('/stats/mix1.jpg');
    background-position: center;
    background-size: cover;
  }
  .x-panel {
    padding: 20px;
    background-color: rgba(8, 6, 49, 0.8);
  }
  .x-panel h1 { color: rgb(207, 8, 124);}
  .x-panel p { color: rgb(241, 228, 204);}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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