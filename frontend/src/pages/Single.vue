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

            <p class="text-body-1 text-grey-darken-3 mb-4">
              основной сгенерированный текст можно хоть столько тегов еслу у тебя есть редактор 
              можно генерировать статьи
            </p>

            <p class="text-body-1 text-grey-darken-3 mb-6">
              сколько угодно обзадцев опять таки если есть нужный редактор
            </p>

            <v-divider class="my-4"></v-divider>

            <div class="d-flex flex-wrap align-center justify-space-between ga-4 mt-6">

              <div class="d-flex flex-wrap ga-1">
                <v-chip size="small" color="purple-darken-4" variant="flat">#wrc</v-chip>
                <v-chip size="small" color="purple-darken-4" variant="flat">#rally</v-chip>
                <v-chip size="small" color="purple-darken-4" variant="flat">#subaru</v-chip>
                <v-chip size="small" color="purple-darken-4" variant="flat">#impreza</v-chip>
                <v-chip size="small" color="purple-darken-4" variant="flat">#evo</v-chip>
                <v-chip size="small" color="purple-darken-4" variant="flat">#шторм</v-chip>
              </div>


              <div class="d-flex align-center ga-1">
                <span class="text-caption text-grey-darken-1 me-2 font-weight-medium">Поделится: </span>

                <v-btn
                  v-for="icon in icons"
                  :key="icon.name"
                  :icon="icon.name"
                  :color="icon.color"
                  :href="icon.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  density="comfortable"
                  variant="text"
                ></v-btn>
              </div>

            </div>
            
         
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

  interface SocialIcon {
    name: string 
    url: string 
    color: string
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

  const icons: SocialIcon[] = [
    { name: 'mdi-facebook', url: 'https://facebook.com', color: 'blue-darken-3' },
    { name: 'mdi-twitter', url: 'https://twitter.com', color: 'blue-lighten-1' },
    { name: 'mdi-linkedin', url: 'https://linkedin.com', color: 'blue-darken-2' },
    { name: 'mdi-instagram', url: 'https://instagram.com', color: 'pink-darken-1' },
  ]

</script>

<style scoped>

</style>
