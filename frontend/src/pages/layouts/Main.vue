<template>
  <v-app>
    <v-main class="bg-purple-lighten-2">
      <v-container>
        <div class="text-h4">HELLO IT IS MAIN PAGEssS</div>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
</style>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

onUnmounted(() => {
  document.documentElement.style.overflow = '' // Safari
  document.body.style.overflow = '';
})

onMounted(() => {
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden';
})

</script>