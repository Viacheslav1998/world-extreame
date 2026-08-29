<template>
  <v-container>
    <div class="pl-header d-flex justify-space-between bg-blue-grey-lighten-4 px-4 py-4 rounded">
      <div class="bg-purple-darken-3">
        <h1>статистика</h1>
        <p>в реальном времени</p>
      </div>
       <div class="bg-purple-darken-4">
        <h1>узнай</h1>
        <p>сколько гонок и киломатража проехано</p>
      </div>
       <div class="bg-purple-darken-4">
        <h1>что то еще</h1>
        <p>какие то данные</p>
      </div>
    </div>
  </v-container>

  <v-container>
    <div class="bg-blue-grey-lighten-4 d-flex justify-start pa-2 rounded">
      <v-sheet
        v-for="n in 3"
        :key="n"
        color="purple-darken-4"
        class="flex-grow-1 ma-2 pa-4 rounded"
        elevation="2"
      >
        <h1 class="text-h5 text-white mb-2">
          main {{ n }}
        </h1>
        <p class="text-body-2 text-purple-lighten-4">
          title asdaskd a;skd a;lskd 
        </p>
      </v-sheet>
    </div>
  </v-container>
</template>

<style scoped>
  .pl-header {
    background-image: url('/main/mountain.jpg');
    background-position: center;
    background-size: cover;
  }
</style>

<script setup lang="ts">
console.log(123);
</script>