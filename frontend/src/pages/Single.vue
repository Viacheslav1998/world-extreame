<template>
  <v-container>
    <div>
      <v-breadcrumbs 
        bg-color="indigo-lighten-1"
        :items="items"
        divider="/"
      ></v-breadcrumbs>
    </div>
    <v-row no-gutters class="bg-blue-grey-lighten-5">
      <v-col cols="12">
        <v-sheet class="pa-6 bg-blue-grey-lighten-5">
          <div class="d-flex justify-space-between align-center mb-4">
            <span class="text-overline text-blue-grey front-weight-bold">категория: ралли кросс</span>
            <span class="text-caption text-grey">18 августа 2020</span>
          </div>
          <div class="text-h4 text-blue-grey-darken-1 font-weight-bold md-6">
             WRC: Subaru VS Evolution
          </div>
          <!-- space for content ↓ -->
          <v-img
            src="https://picsum.photos/1"
            alt="ралли коммент к иллюстрации"
            class="rounded-lg mb-6"
            max-height="400"
            cover
          >
          </v-img>
          <p class="text-body-1 text-blue-grey-darken-2 font-weight-medium mb-4">
            какой то там оьзадц обычно выделячется чуть крупнее нежели другие вещички
          </p>
          <!-- use editor html/universal -->
          <v-row class="my-4">
            <v-col cols="12" sm="6">
              <v-img src="https://picsum.photos/4" class="rounded" cover></v-img>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img src="https://picsum.photos/1" class="rounded" cover></v-img>
            </v-col>
          </v-row>
          <!-- space for content ↑ -->
        </v-sheet>
      </v-col>
    </v-row>
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
