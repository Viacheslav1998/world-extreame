<template>
 <div class="header">
    <v-container>
      <v-sheet
        elevation="3"
        rounded="md"
        class="d-flex align-center px-4 py-2 mt-4"
      >
        <span class="text-h6 font-weight-bold">World-Extreame.com</span>
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
        <v-col align-self="end"  style="background-color: rgba(999, 999, 999, 0.7);">
          <v-sheet 
            color="transparent"
          >
            <h1 class="text-h2 font-weight-bold mt-4" style="color:rgba(000, 000, 000, 0.8)">Добро пожаловать</h1>
            <p class="text-h6 text-black">
              все новые экстримальные новости здесь
            </p>
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