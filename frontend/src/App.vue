<template>
  <v-app id="app">
    <Header v-if="!$route.meta.hideLayout" />

    <v-main class="content">
      <router-view />
    </v-main>
    
    <Footer v-if="!$route.meta.hideLayout" />
  
  </v-app>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
</script>