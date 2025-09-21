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
        style="height: 300px;"
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
    <v-container>
      <v-row
        class="mb-6 bg-indigo"
        no-gutters
      >
        <v-col>
          <v-sheet class="pa-2 ma-2">
            col-auto
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2 ma-2">
            col-auto
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2 ma-2">
            col-auto
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2 ma-2">
            col-auto
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2 ma-2">
            col-auto
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
</style>