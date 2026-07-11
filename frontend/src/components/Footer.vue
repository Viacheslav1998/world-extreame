<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="indigo-lighten-1">
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon.name"
        :icon="icon.name"
        density="comfortable"
        variant="text"
      >
      </v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-weight-regular opacity-90">
     Международный чемпионат по разным экстремальным дисциплинам
			<br>
       новости - сообщество - снаряжение - партнеры
    </div>
    <v-divider class="my-2" thickness="2" width="50"></v-divider>
    <v-container>
      <div 
        class="d-flex justify-space-between mb-6"
      >
        <div v-for="n in 3" :key="n">
          <div class="">
            <div>
              <h4>партнеры</h4>
              <li>asd</li>
              <li>ddasd</li>
              <li>fqwsa</li>
              <li>fafafaf</li>
            </div>
          </div>
        </div>
      </div>
    </v-container>
    <div>
       {{ new Date().getFullYear() }}. <span>все права сохранены</span><br>
      <span class="text-h1 font-weight-bold">World-<span class="text-red-accent-1">Extreame</span>.com</span>
    </div>
  </v-footer>
</template>
<script setup lang="ts">
  interface icon {
      name: string
  }
  
  const icons: icon[] = [
    {  name: 'mdi-facebook' },
    {  name: 'mdi-twitter' },
    {  name: 'mdi-linkedin' },
    {  name: 'mdi-instagram' }
  ]

</script>
