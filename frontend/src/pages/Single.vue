<template>
  <v-container>
    
  </v-container>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const postId = route.params.id;
  console.log('Post ID:', postId);

</script>

<style scoped>

</style>
