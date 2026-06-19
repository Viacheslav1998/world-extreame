<template>
  <v-container>
    <div>
      <v-breadcrumbs 
        bg-color="indigo-lighten-1"
        :items="items"
        divider="/"
      ></v-breadcrumbs>
    </div>
  </v-container>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router';

  const route = useRoute();
  const postId = route.params.id;
  console.log('Post ID:', postId);

  interface Item {
    title: string, 
    disabled: boolean,
    href: string
  }

  const items: Item[] = [
    {
      title: 'Главная',
      disabled: false, 
      href: '/'
    },
    {
      title: 'новости',
      disabled: false, 
      href: '/news'
    },
    {
      title: 'текущая новость',
      disabled: true, 
      href: '/current'
    },
  ]

</script>

<style scoped>

</style>
