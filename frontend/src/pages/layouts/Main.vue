<template>
  <!-- static SFC | don`t dynamic theme! -->
  <v-app>
    <v-main class="d-flex align-center ">
      <v-container class="md-6">
        <div class="text-button text-grey-darken-1 font-weight-bold pb-2">
          Навигация по сайту и сервисы
        </div>
        <v-row justify="space-around">
          <v-col 
            align-self="start"
            v-for="(column, colIndex) in optionsCards"
            :key="colIndex"
          >
            <v-row>
              <v-col class="d-flex flex-column ga-2">

                <v-card
                  v-for="card in column"
                  :key="card.id"
                  :disabled="card.disabled"
                  :to="card.link"
                  class="h-100 d-flex flex-column mb-5"
                  elevation="2"
                >
                  <v-img
                    :src="card.image"
                    height="150"
                    cover
                    class="text-white"
                  ></v-img>
                  <v-card-item :class="['flex-grow-1', card.color]">
                    <div class="text-overline">
                      {{ card.title }}
                    </div>
                  </v-card-item>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-date-picker
            class="ma-2 text-grey-darken-1"
            v-model="date"
            :allowed-dates="allowedDates"
            :min="minDate"
            :max="maxDate"
          ></v-date-picker>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped> 
</style>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

interface OptionsCard {
  id: number;
  link: string;
  title: string;
  image: string;
  color: string;
  disabled?: boolean;
}

const optionsCards = ref<OptionsCard[][]>([
  [
    {
      id: 1,
      link: '/',
      title: 'Главные новости спорта',  
      image: '../../public/navi/m6.jpg',
      color: 'bg-purple',
      disabled: false
    },
    {
      id: 2,
      link: '/news1',
      title: 'Магазин вело-мото',  
      image: '../../public/navi/m3.jpg',
      color: 'bg-blue-grey-darken-4',
      disabled: false
    },
  ],
  //
  [
    {
      id: 3,
      link: '/news1',
      title: 'Спортивный инвентарь',  
      image: '../../public/navi/m4.jpg',
      color: 'bg-indigo-darken-2',
      disabled: true
    },
    { 
      id: 4,
      link: '/news1',
      title: 'Партнеры',  
      image: '../../public/navi/m5.jpg',
      color: 'bg-teal',
      disabled: true
    },
  ],
  //
  [
    {
      id: 5,
      link: '/news1',
      title: 'Мерч',  
      image: '../../public/navi/m1.jpg',
      color: 'bg-pink',
      disabled: true
    },
    {
      id: 6,
      link: '/news1',
      title: 'Сообщества',  
      image: '../../public/navi/m2.jpg',
      color: 'bg-deep-orange',
      disabled: true
    },
  ]
]);

const date = ref<Date>(new Date())

const minDate = new Date('2020-00-00');
const maxDate = new Date('2030-00-00');

const allowedDates = (val: unknown): boolean => {
  if (val instanceof Date) {
    const day = val.getDay();
    return day !== 0 && day !== 6;
  }
  return false;
};

onUnmounted(() => {
  document.documentElement.style.overflow = '' // Safari
  document.body.style.overflow = '';
})

onMounted(() => {
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden';
})

</script>