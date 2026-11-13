<template>
  <v-container class="py-6" fluid>
    
    <!-- 1. ШАПКА / ПРИВЕТСТВИЕ -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card class="pa-4 pa-md-6 rounded-xl" elevation="1">
          <div class="d-flex flex-column flex-md-row justify-space-between align-md-center gap-4">
            <div>
              <div class="text-caption text-uppercase text-primary font-weight-bold tracking-wider mb-1">
                World-Extreme.com • Dashboard
              </div>
              <h1 class="text-h4 font-weight-bold mb-2">Комната статистики заездов</h1>
              <p class="text-body-2 text-medium-emphasis mb-0">
                Мониторинг параметров в реальном времени: износ шин, расходы на запчасти, топливо, кузов и рейтинг гонщиков.
              </p>
            </div>
            
            <!-- Переключатель тем / языков -->
            <div class="d-flex align-center gap-3">
              <v-btn
                v-for="theme in themes"
                :key="theme.name"
                icon
                size="small"
                variant="tonal"
                :class="{ 'border-primary': currentTheme === theme.name }"
                @click="setTheme(theme.name)"
              >
                <v-icon :icon="theme.icon" />
              </v-btn>
              <v-chip size="small" variant="outlined" class="font-weight-bold">EN / RU</v-chip>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- 2. БЫСТРАЯ НАВИГАЦИЯ -->
    <v-row class="mb-4">
      <v-col cols="12" md="4">
        <v-card class="pa-4 rounded-xl h-100" variant="outlined">
          <div class="d-flex align-center mb-2">
            <v-btn color="primary" icon="mdi-arrow-left" variant="text" density="comfortable" class="me-2" to="/home" />
            <span class="text-h6 font-weight-bold">На главную</span>
          </div>
          <p class="text-body-2 text-medium-emphasis pl-10 mb-0">Вернуться на домашнюю страницу</p>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4 rounded-xl h-100" variant="outlined">
          <div class="d-flex align-center mb-2">
            <v-btn color="error" icon="mdi-menu" variant="text" density="comfortable" class="me-2" to="/" />
            <span class="text-h6 font-weight-bold">В меню</span>
          </div>
          <p class="text-body-2 text-medium-emphasis pl-10 mb-0">Выбор категорий, магазина и новостей</p>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4 rounded-xl h-100" variant="outlined">
          <div class="d-flex align-center mb-2">
            <v-btn color="success" icon="mdi-information-outline" variant="text" density="comfortable" class="me-2" to="/terms" />
            <span class="text-h6 font-weight-bold">О нас</span>
          </div>
          <p class="text-body-2 text-medium-emphasis pl-10 mb-0">Контакты и контракты команды</p>
        </v-card>
      </v-col>
    </v-row>

    <!-- 3. ГЛАВНЫЙ ГРАФИК МОНИТОРИНГА В РЕАЛЬНОМ ВРЕМЕНИ -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card class="pa-4 pa-md-6 rounded-xl" elevation="1">
          <div class="d-flex justify-space-between align-center mb-4">
            <h3 class="text-h6 font-weight-bold">Мониторинг заездов (Live)</h3>
            <v-chip color="success" size="small" variant="flat" prepend-icon="mdi-checkbox-blank-circle">Обновление каждые 3с</v-chip>
          </div>
          <apexchart
            type="line"
            height="320"
            :options="realtimeChartOptions"
            :series="chartSeries"
          />
        </v-card>
      </v-col>
    </v-row>

    <!-- 4. СЕТКА АНАЛИТИКИ (1 большой график слева, 4 маленьких справа) -->
    <v-row class="mb-4">
      <!-- Левый большой график -->
      <v-col cols="12" lg="6">
        <v-card class="pa-4 rounded-xl h-100 d-flex flex-column" elevation="1">
          <h3 class="text-subtitle-1 font-weight-bold mb-3">Денежный поток (Cash Flow)</h3>
          <div class="flex-grow-1">
            <apexchart
              type="bar"
              height="340"
              :options="barChartOptions"
              :series="victories"
            />
          </div>
        </v-card>
      </v-col>

      <!-- Правые 4 маленьких графика -->
      <v-col cols="12" lg="6">
        <v-row>
          <v-col cols="12" sm="6" v-for="(stat, index) in smallStats" :key="index">
            <v-card class="pa-3 rounded-xl" elevation="1">
              <div class="text-caption font-weight-bold text-medium-emphasis mb-1">{{ stat.title }}</div>
              <apexchart
                type="bar"
                height="130"
                :options="barChartOptions"
                :series="stat.data"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- 5. ТАБЛИЦА ГОНЩИКОВ -->
    <v-row class="mb-4">
      <v-col cols="12">
        <v-card class="rounded-xl" elevation="1">
          <div class="pa-4 pb-2">
            <h3 class="text-h6 font-weight-bold">Участники заездов</h3>
          </div>
          <v-data-table
            :headers="headers"
            :items="racers"
            density="comfortable"
            item-key="name"
          >
            <!-- Кастомное оформление статуса в таблице -->
            <template v-slot:[`item.status`]="{ item }">
              <v-chip
                :color="getStatusColor(item.status)"
                size="small"
                variant="tonal"
              >
                {{ item.status }}
              </v-chip>
            </template>
            <!-- Форматирование дохода -->
            <template v-slot:[`item.profit`]="{ item }">
              <span :class="item.profit >= 0 ? 'text-success' : 'text-error'" class="font-weight-bold">
                {{ item.profit > 0 ? '+' : '' }}{{ item.profit }} $
              </span>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- 6. ФУТЕР СТРАНИЦЫ -->
    <v-row>
      <v-col cols="12">
        <div class="d-flex flex-wrap justify-space-between align-center px-4 py-3 text-caption text-medium-emphasis bg-surface rounded-xl border">
          <div>Motostorm-statics v2.1</div>
          <div>Apache-Host-Panel</div>
          <div>Special Statistics Office</div>
        </div>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useTheme } from 'vuetify'
import type { ApexOptions } from 'apexcharts'

const themeManager = useTheme()
const currentTheme = computed(() => themeManager.global.name.value)

const themes = [
  { name: 'light', icon: 'mdi-white-balance-sunny' },
  { name: 'dark', icon: 'mdi-weather-night' },
]

const setTheme = (name: string) => {
  themeManager.global.name.value = name
}

// --- ТАБЛИЦА ---
const headers = [
  { title: 'Гонщик', key: 'name', align: 'start' as const },
  { title: 'Машина', key: 'car', align: 'start' as const },
  { title: 'Дисциплина', key: 'class', align: 'start' as const },
  { title: 'Статус', key: 'status', align: 'center' as const },
  { title: 'Доход', key: 'profit', align: 'end' as const },
]

const racers = [
  { name: 'Джон', car: 'Honda Civic (2003)', class: 'Rally', status: 'выбыл', profit: -1200 },
  { name: 'Снэйк', car: 'Toyota Yaris', class: 'Rally cross', status: 'участвует', profit: 2200 },
  { name: 'Монтана', car: 'Nissan 240SX', class: 'Drift', status: 'прошел', profit: 4000 },
  { name: 'Кандис', car: 'Mitsubishi Evo', class: 'Drift', status: 'прошел', profit: 4400 },
  { name: 'Артем', car: 'Nissan 370Z', class: 'Drift', status: 'прошел', profit: 6000 },
  { name: 'Илья', car: 'Nissan R32', class: 'Rally', status: 'участвует', profit: 6500 },
]

const getStatusColor = (status: string) => {
  if (status === 'прошел') return 'success'
  if (status === 'участвует') return 'primary'
  return 'error'
}

// --- ГРАФИКИ ---

// Данные для реалтайм графика
const chartSeries = ref([
  { name: 'Загрузка системы (%)', data: [30, 40, 35, 50, 49, 60, 70] }
])

let intervalId: any = null
onMounted(() => {
  intervalId = setInterval(() => {
    chartSeries.value = [{
      name: 'Загрузка системы (%)',
      data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 80) + 20)
    }]
  }, 3000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

// Настройки основного реалтайм графика
const realtimeChartOptions = computed<ApexOptions>(() => {
  const isDark = themeManager.global.current.value.dark
  return {
    chart: { toolbar: { show: false }, animations: { enabled: true } },
    theme: { mode: isDark ? 'dark' : 'light' },
    colors: ['#FF9800'],
    stroke: { curve: 'smooth', width: 3 },
    xaxis: { categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл'] },
    grid: { borderColor: isDark ? '#333' : '#e0e0e0' }
  }
})

// Общие настройки для столбчатых графиков
const barChartOptions = computed<ApexOptions>(() => {
  const isDark = themeManager.global.current.value.dark
  return {
    chart: { toolbar: { show: false } },
    theme: { mode: isDark ? 'dark' : 'light' },
    colors: ['#2196F3'],
    plotOptions: { bar: { columnWidth: '60%', borderRadius: 4 } },
    dataLabels: { enabled: false },
    xaxis: { categories: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'] },
    grid: { show: false }
  }
})

// Бутафорские данные для маленьких графиков
const victories = ref([{ name: 'Cash Flow', data: [14, 25, 18, 30, -5, 22] }])
const smallStats = [
  { title: 'Износ шин', data: [{ name: 'Tyres', data: [10, 20, 35, 50, 65, 80] }] },
  { title: 'Запчасти', data: [{ name: 'Parts', data: [5, 12, 8, 25, 30, 45] }] },
  { title: 'Топливо', data: [{ name: 'Fuel', data: [40, 35, 30, 25, 20, 15] }] },
  { title: 'Кузовные расходы', data: [{ name: 'Body', data: [2, 15, 8, 22, 10, 33] }] },
]
</script>

<style scoped>
.tracking-wider {
  letter-spacing: 1px;
}
.gap-4 {
  gap: 16px;
}
.gap-3 {
  gap: 12px;
}
.border-primary {
  border-color: rgb(var(--v-theme-primary)) !important;
}
</style>