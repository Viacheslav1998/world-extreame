<template>
  <!-- static SFC | don`t dynamic theme! -->
  <v-app>
    <v-main class="d-flex align-center ">
      <v-container class="md-6">
        <div class="text-button text-blue-grey-darken-4 font-weight-bold pb-2">
          Навигация по сайту и сервисы
        </div>

        <v-row justify="space-around">

          <v-col align-self="start">
            <v-row>
              <v-col class="d-flex flex-column ga-2">

                <v-card 
                  link 
                  @click="go" 
                  class="h-100 d-flex flex-column mb-5"
                  elevation="2"
                >
                  <v-img
                    src="https://picsum.photos/200/300?grayscale"
                    height="150"
                    cover
                    class="text-white"
                  >
                  </v-img>
                  <v-card-item class="flex-grow-1">
                    <div class="text-overline text-grey-darken-2 mb-1">
                      Экстрим - каждый день
                    </div>
                  </v-card-item>
                </v-card>

                <v-card 
                  link 
                  @click="go" 
                  class="h-100 d-flex flex-column"
                  elevation="2"
                >
                  <v-img
                      src="https://picsum.photos/id/237/200/300"
                      height="150"
                      cover
                      class="text-white"
                    >
                    <v-card-title>Магазин</v-card-title>
                  </v-img>
                  <v-card-item class="flex-grow-1">
                    <div class="text-overline text-grey-darken-2 mb-1">
                      Вело-мото ...
                    </div>
                  </v-card-item>
                </v-card>
              </v-col>
            </v-row>   
          </v-col>

          <v-col align-self="start">
            <v-row>
              <v-col class="d-flex flex-column ga-2">
                <v-card 
                  link 
                  @click="go" 
                  class="h-100 d-flex flex-column mb-5"
                  elevation="2"
                >
                  <v-img
                    src="https://picsum.photos/200/300?grayscale"
                    height="150"
                    cover
                    class="text-white"
                  >
                  </v-img>
                  <v-card-item class="flex-grow-1">
                    <div class="text-overline text-grey-darken-2 mb-1">
                      Экстрим - каждый день
                    </div>
                  </v-card-item>
                </v-card>

                <v-card 
                  link 
                  @click="go" 
                  class="h-100 d-flex flex-column"
                  elevation="2"
                >
                  <v-img
                      src="https://picsum.photos/id/237/200/300"
                      height="150"
                      cover
                      class="text-white"
                    >
                    <v-card-title>Магазин</v-card-title>
                  </v-img>
                  <v-card-item class="flex-grow-1">
                    <div class="text-overline text-grey-darken-2 mb-1">
                      Вело-мото ...
                    </div>
                  </v-card-item>
                </v-card>
              </v-col>
            </v-row>   
          </v-col>

          <v-col align-self="start">
            <v-row>
              <v-col class="d-flex flex-column ga-2">
                <v-card 
                  link 
                  @click="go" 
                  class="h-100 d-flex flex-column mb-5"
                  elevation="2"
                >
                  <v-img
                    src="https://picsum.photos/200/300?grayscale"
                    height="150"
                    cover
                    class="text-white"
                  >
                  </v-img>
                  <v-card-item class="flex-grow-1">
                    <div class="text-overline text-grey-darken-2 mb-1">
                      Экстрим - каждый день
                    </div>
                  </v-card-item>
                </v-card>

                <v-card 
                  link 
                  @click="go" 
                  class="h-100 d-flex flex-column"
                  elevation="2"
                >
                  <v-img
                      src="https://picsum.photos/id/237/200/300"
                      height="150"
                      cover
                      class="text-white"
                    >
                    <v-card-title>Магазин</v-card-title>
                  </v-img>
                  <v-card-item class="flex-grow-1">
                    <div class="text-overline text-grey-darken-2 mb-1">
                      Вело-мото ...
                    </div>
                  </v-card-item>
                </v-card>
              </v-col>
            </v-row>   
          </v-col>
          
          <v-date-picker
            class="ma-2"
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