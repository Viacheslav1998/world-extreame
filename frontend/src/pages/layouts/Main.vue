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
                  @click="go(card.link)"
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
import { GoToSymbol } from 'vuetify/lib/composables/goto';

interface OptionsCard {
  id: number;
  link: string;
  title: string;
  image: string;
  color: string;
}

const optionsCards = ref<OptionsCard[][]>([
  [
    {
      id: 1,
      link: '/news1',
      title: 'Главные новости спорта',  
      image: 'https://picsum.photos/id/237/200/300',
      color: 'bg-deep-orange-accent-3'
    },
    {
      id: 2,
      link: '/news1',
      title: 'Новости 2',  
      image: 'https://picsum.photos/id/237/200/300',
      color: 'bg-blue-grey-darken-3'
    },
  ],
  //
  [
    {
      id: 3,
      link: '/news1',
      title: 'Новости 3',  
      image: 'https://picsum.photos/id/237/200/300',
      color: 'bg-yellow-accent-2'
    },
    { 
      id: 4,
      link: '/news1',
      title: 'Новости 4',  
      image: 'https://picsum.photos/id/237/200/300',
      color: 'bg-green-darken-4'
    },
  ],
  //
  [
    {
      id: 5,
      link: '/news1',
      title: 'Новости 5',  
      image: 'https://picsum.photos/id/237/200/300',
      color: 'bg-pink'
    },
    {
      id: 6,
      link: '/news1',
      title: 'Новости 6',  
      image: 'https://picsum.photos/id/237/200/300',
      color: 'bg-purple-darken-4'
    },
  ]
]);


const date = ref<Date | null>(null);

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