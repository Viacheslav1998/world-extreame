<template>
 <Header />

  <v-layout>
    <v-main>
      <slot />
    </v-main>
  </v-layout>

  <Footer />
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>