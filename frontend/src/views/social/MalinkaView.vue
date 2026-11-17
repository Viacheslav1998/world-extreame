<template>
  <section class="bg-pink-lighten-2 py-6">
    <v-container>
      <v-row class="d-flex justify-space-between">
        <v-col  class="bg-white">
          <div>
            <span>asdads</span>
            <h1>Malinca.compunity</h1>
          </div>
          <div>
            <h2>asdads</h2>
          </div>
        </v-col>
        <v-col cols="2" class="bg-black">
          Внутренний блок
        </v-col>
      </v-row>
    </v-container>
  </section>

  <v-container>
    <v-row>
      <v-col
        v-for="v in 10"
        :key="v"
      >
        <v-card title="Card title" subtitle="Subtitle" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus explicabo sapiente fuga quia dolores officia quaerat consectetur. Quisquam, omnis!">
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <section> 
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