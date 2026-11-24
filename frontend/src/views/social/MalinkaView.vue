<template>
  <section class="bg-pink py-2">
    <v-container>
      <v-row class="d-flex justify-space-between">
        <v-col  class="">
          <div>
            <h1>Malinca.cute</h1>
          </div>
          <div class="text-caption" >Загружай а не воображай</div> 
        </v-col>
        <v-col cols="4" class="">
          Внутренний блок
        </v-col>
      </v-row>
    </v-container>
  </section>

  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        v-for="v in 10"
        :key="v"
      >
        <v-img
          src="/navi/m2.jpg"
          height="160"
          cover
        />
        <v-card 
          title="Новость века"
          subtitle="новинка"
          text="хедер замени на норм картинку - сделай с право кнопки - вернуться - о нас - политика с право лого какое то большое с пояснением
           - фон сделай белый - кнопки попап выпад с статикой - огранить текст в карточках - 
           добавь просмотры клазки
           соц иконку поменяй на малинку.
           " 
        >
          <v-card-actions>
            <v-btn variant="text" color="primary" to="/details">
              смотреть
            </v-btn>
            <v-spacer />
            <v-btn icon="mdi-heart-outline" variant="text" />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <section class="bg-black"> 
    <v-container>
      <v-row>
        <v-col>
          <div> 
            <h6>Учебный проект для портфолио. Не является настоящей социальной сетью <span style="color: orangered">Pet-Project</span></h6>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
</script>

<style scoped>

</style>
