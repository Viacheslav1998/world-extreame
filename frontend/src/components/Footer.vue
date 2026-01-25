<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="indigo-lighten-1">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-90">
     Международный чемпионат по разным эсктримальным дисциплинам
			<br>
       новости - сообщество - снаряжение
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>
    <v-divider></v-divider>
    <div>
       {{ new Date().getFullYear() }} <br>
      <span class="text-h1 font-weight-bold">World-<span class="text-red-darken-4">Extreame</span>.com</span>
    </div>
  </v-footer>
</template>
<script setup>
  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]
</script>