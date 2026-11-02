<template>
  <div class="header">
    <!-- navi panel -->
  <v-container>
    <v-sheet
      elevation="3"
      rounded="md"
      class="d-flex align-center px-4 py-2 mt-4"
    >
      <span class="text-subtitle-1 text-sm-h6 font-weight-bold text-truncate">
        World-<span class="text-deep-orange-darken-1">Extreame</span>.com
      </span>

      <v-spacer />

      <div class="d-none d-sm-flex align-center ga-1">
        <v-btn to="/" variant="text">Главная</v-btn>
        <v-btn to="/stat" variant="text">Статистика</v-btn>
        <v-btn to="/contact" variant="text">Контакты</v-btn>
      </div>

      <div class="d-flex d-sm-none">
        <v-menu location="bottom end">
          <template #activator="{ props }">
            <v-btn icon="mdi-menu" variant="text" v-bind="props"></v-btn>
          </template>
          
          <v-list density="compact" class="mt-2">
            <v-list-item to="/" title="Главная" prepend-icon="mdi-home"></v-list-item>
            <v-list-item to="/stat" title="Статистика" prepend-icon="mdi-chart-bar"></v-list-item>
            <v-list-item to="/contact" title="Контакты" prepend-icon="mdi-email"></v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-sheet>
  </v-container>

    <v-container class="text-center">
      <v-row no-gutters justify="center" style="height: 150px;">
        <v-col cols="12" sm="8" align-self="center">
          <v-sheet class="pa-4 rounded" style="background-color: rgba(255, 255, 255, 0.85);">
            <h1 class="text-h5 font-weight-bold text-grey-darken-4">
              Многофункциональный информационный портал
            </h1>
            <p class="text-subtitle-1 text-black mt-1">
              | магазин | новости | нужные вещи | запчасти | мерч |
            </p>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

    <!-- place search -->
    <v-container>
      <v-sheet class="rounded bg-transparent">
        <v-row justify="center" dense>
          <v-col cols="12" md="2" class="d-flex align-center">
            <v-text-field
              label="Что надо искать?"
              color="orange"
              variant="outlined"
              bg-color="white"
              hide-details
            ></v-text-field>
          </v-col>
          
          <v-col cols="12" md="3">
            <v-text-field
              label="Место"
              color="orange"
              variant="outlined"
              bg-color="white"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              label="Категория"
              color="orange"
              variant="outlined"
              bg-color="white"
              hide-details
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="2" class="d-flex align-center">
            <v-btn block size="large" color="deep-orange-darken-1" height="56">
              Найти...
            </v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>

    <br>

    <!-- statisticss / icons -->
    <v-container>
      <v-row class="rounded" justify="center" dense>
        <v-col 
          v-for="(stat, index) in stats" 
          :key="index"
          cols="12"
          sm="4"
          md="2"
        >
          <v-sheet class="pa-3 text-center custom-bg-rgba-w rounded elevation-1">
            <img :src="stat.icon" alt="ico" width="32" height="32" class="mb-1">
            <div class="pb-1 text-body-2 font-weight-medium">
              <p class="mb-0">{{ stat.title }}</p>
            </div>
            <v-chip 
              color="deep-orange-darken-1"
              variant="flat"
              size="small"
            >
              {{ stat.value }}
            </v-chip>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    
  </div>
</template>

<script setup lang="ts">
interface StatItem {
  icon: string
  title: string
  value: string
}

const stats: StatItem[] = [
  { icon: '/icons/bike.png', title: 'Все новости', value: '3,045' },
  { icon: '/icons/frontal-truck.png', title: 'Всего поставок', value: '352' },
  { icon: '/icons/mountain.png', title: 'Места', value: '76' },
  { icon: '/icons/parking.png', title: 'Rally-Cross', value: '736' },
  { icon: '/icons/thunderstorm.png', title: 'Условия', value: '276' }
]
</script>

<style scoped>
.header {
  min-height: 300px;
  background-image: url('/main/mountain.jpg');
  background-position: center;
  background-size: cover;
  padding-bottom: 40px;
}

.custom-bg-rgba-w {
  background-color: rgba(238, 238, 238, 0.9);
}
</style>