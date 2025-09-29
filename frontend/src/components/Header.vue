<template>
 <div class="header">
    <v-container>
      <v-sheet
        elevation="3"
        rounded="md"
        class="d-flex align-center px-4 py-2 mt-4"
      >
        <span class="text-h6 font-weight-bold">World-<span class="text-red-darken-4">Extreame</span>.com</span>
        <v-spacer />
        <v-btn variant="text">Главная</v-btn>
        <v-btn variant="text">Статистика</v-btn>
        <v-btn variant="text">Контакты</v-btn>
      </v-sheet>
    </v-container>
    <v-container class="text-center">
      <v-row 
        no-gutters
        style="height: 200px;"
      >
        <v-col align-self="center" style="background-color: rgba(999, 999, 999, 0.7);">
          <v-sheet 
            color="transparent"
          >
            <h1 class="text-h3 font-weight-bold mt-4" style="color:rgba(000, 000, 000, 0.8)">Добро пожаловать</h1>
            <p class="text-h6 text-black">
              все новые экстримальные новости здесь
            </p>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-sheet
        color="rgba(999, 999, 999, 0.7)"
      >
        <v-row no-gutters>
          <v-col color="indigo">
            <v-sheet 
              color="indigo"
              elevation="1"
              class="my-10 mx-2 pa-3"
            >
              <v-text-field
                label="Что надо искать?"
                color="orange"
                hide-details
              >
              </v-text-field>
            </v-sheet>
          </v-col>
           <v-col color="indigo">
            <v-sheet 
              color="indigo"
              elevation="1"
              class="my-10 mx-2 pa-3"
            >
              <v-text-field
                label="Место"
                color="orange"
                hide-details
              >
              </v-text-field>
            </v-sheet>
          </v-col>
           <v-col color="indigo">
            <v-sheet 
              color="indigo"
              elevation="1"
              class="my-10 mx-2 pa-3"
            >
              <v-text-field
                label="Категория"
                color="orange"
                hide-details
              >
              </v-text-field>
            </v-sheet>
          </v-col>
          <v-col cols="auto">
            <v-sheet elevation="1" class="my-10 mx-2 pa-3" color="blue-grey">
              <v-btn size="x-large" color="red-darken-4" style="margin-top: 3.5px;">
                Найти ...
              </v-btn>
            </v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
    <br>
    <v-container>
      <v-row
        class="rounded"
        no-gutters
      >
        <v-col class="p-2 m-5">
          <v-sheet class="pa-2 ma-2 custom-bg-rbga-w rounded">
            <div class="text-center">
              <img src="/icons/bike.png" alt="ico">
              <div class="pb-2">
                <p>Все новости</p>
              </div>
              <v-chip 
                color="red"
                variant="flat"
              >
                3,045
              </v-chip>
            </div>
          </v-sheet>
        </v-col>
         <v-col class="p-2 m-5">
          <v-sheet class="pa-2 ma-2 custom-bg-rbga-w rounded">
            <div class="text-center">
              <img src="/icons/frontal-truck.png" alt="ico">
              <div class="pb-2">
                <p>Всего поставок</p>
              </div>
              <v-chip 
                color="red"
                variant="flat"
              >
                352
              </v-chip>
            </div>
          </v-sheet>
        </v-col>
         <v-col class="p-2 m-5">
          <v-sheet class="pa-2 ma-2 custom-bg-rbga-w rounded">
            <div class="text-center">
              <img src="/icons/mountain.png" alt="ico">
              <div class="pb-2">
                <p>места</p>
              </div>
              <v-chip 
                color="red"
                variant="flat"
              >
                76
              </v-chip>
            </div>
          </v-sheet>
        </v-col>
         <v-col class="p-2 m-5">
          <v-sheet class="pa-2 ma-2 custom-bg-rbga-w rounded">
            <div class="text-center">
              <img src="/icons/parking.png" alt="ico">
              <div class="pb-2">
                <p>Rally-Cross</p>
              </div>
              <v-chip 
                color="red"
                variant="flat"
              >
                736
              </v-chip>
            </div>
          </v-sheet>
        </v-col>
         <v-col class="p-2 m-5">
          <v-sheet class="pa-2 ma-2 custom-bg-rbga-w rounded">
            <div class="text-center">
              <img src="/icons/thunderstorm.png" alt="ico">
              <div class="pb-2">
                <p>Условия</p>
              </div>
              <v-chip 
                color="red"
                variant="flat"
              >
                276
              </v-chip>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
 
</template>

<style scoped>
.header {
  height: 800px;
  background-image: url('/main/mountain.jpg');
  background-position: 0 -70px;
  background-size: cover;
}

.custom-bg-rbga-w {
  background-color: rgba(238, 238, 238, 0.856);
}
</style>