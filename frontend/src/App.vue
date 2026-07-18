<template>
  <div id="app">
    <Header v-if="!$route.meta.hideLayout" />

    <main class="content">
      <router-view />
    </main>
    
    <Footer v-if="!$route.meta.hideLayout" />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
</script>