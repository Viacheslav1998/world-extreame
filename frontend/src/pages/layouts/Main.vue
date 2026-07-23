<template>
  <!-- static SFC | don`t dynamic theme! -->
 <v-app>
    <v-main class="d-flex align-center">
      <v-container>
        <div class="text-button text-grey-darken-1 font-weight-bold pb-2">
          Навигация по сайту и сервисы
        </div>
        <v-row justify="center">
          <v-col cols="12" md="9">
            <v-row>
              <v-col 
                v-for="(column, colIndex) in optionsCards"
                :key="colIndex"
                cols="12"
                sm="4"
                md="4"
              >
                <div class="d-flex flex-column ga-4 h-100">
                  <v-card
                    v-for="card in column"
                    :key="card.id"
                    :disabled="card.disabled"
                    :to="card.link"
                    class="card-item d-flex flex-column"
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
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="3" class="d-flex justify-center justify-md-start">
            <v-date-picker
              class="ma-2 text-grey-darken-1 w-100"
              style="max-width: 320px;"
              v-model="date"
              :allowed-dates="allowedDates"
              :min="minDate"
              :max="maxDate"
            ></v-date-picker>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped> 
 .card-item {
    flex: 1 1 0%;
  }
</style>

<script setup lang="ts">
import { ref } from 'vue';

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
      image: '/navi/m6.jpg',
      color: 'bg-purple',
      disabled: false
    },
    {
      id: 2,
      link: '/news1',
      title: 'Магазин вело-мото',  
      image: '/navi/m3.jpg',
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
      image: '/navi/m4.jpg',
      color: 'bg-indigo-darken-2',
      disabled: true
    },
    { 
      id: 4,
      link: '/news1',
      title: 'Партнеры',  
      image: '/navi/m5.jpg',
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
      image: '/navi/m1.jpg',
      color: 'bg-pink',
      disabled: true
    },
    {
      id: 6,
      link: '/news1',
      title: 'Сообщества',  
      image: '/navi/m2.jpg',
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
</script>