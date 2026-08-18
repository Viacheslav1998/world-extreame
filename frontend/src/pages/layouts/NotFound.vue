<template>
 <v-app >
    <v-main
      style="background-image: url('/notfound/404.jpg');"
      class="d-flex align-center error-page">
      <v-container>
        <div class="text-white mb-5">
          <h1>Такой страницы нет</h1>
          <h2>404</h2>
        </div>
        <div>
         <v-btn 
           variant="outlined"
           class="text-white"
           to="/">
             выход от сюда
          </v-btn>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped> 
.error-page {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

<script setup lang="ts">
</script>

