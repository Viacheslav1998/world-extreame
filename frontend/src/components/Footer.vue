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
       <br>
        Казахстан - Греция - Италия 
    </div>
    <v-divider class="my-2" thickness="2" width="50"></v-divider>
    <v-container>
      <div 
        class="d-flex justify-space-around mb-6"
      >
        <div
          v-for="column in MenuColumns"
          :key="column.title"
          class="column"
        >
           <h4>{{ column.title }}</h4>
           <ul class="custom-list-none custom-list">
              <li
                v-for="item in column.items"
                :item="item"
              >
                <a href="#" class="custom-line-menu custom-line-menu">{{ item }}</a>
              </li>
           </ul>
        </div>
      </div>
    </v-container>
    <v-divider thickness="2" width="50"></v-divider>
    <div>
       <span class="text-red-accent-1 font-weight-bold">{{ new Date().getFullYear() }}. </span><span>Все права сохранены.</span><br><br>
      <span class="text-h1 font-weight-bold">World-<span class="text-red-accent-1">Extreame</span>.com</span>
    </div>
  </v-footer>
</template>

<style>
.custom-list-none {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.custom-list li {
  text-align: left;
}

.custom-line-menu {
  font-size: 13px;
  color: wheat;
  text-decoration: none;
}

.custom-line-menu:hover {
  color: rgb(215, 233, 52);
  font-weight: bold;
}


</style>

<script setup lang="ts">
  interface icon {
      name: string
  }

  interface MenuColumn {
    title: string, 
    items: string[]
  }

  const icons: icon[] = [
    {  name: 'mdi-facebook' },
    {  name: 'mdi-twitter' },
    {  name: 'mdi-linkedin' },
    {  name: 'mdi-instagram' }
  ]

  const MenuColumns: MenuColumn[] = [
    {
      title: 'Партнеры',
      items: ['KSW7', 'WebStrom', 'Kikdown', 'GameGround']
    },
    {
      title: 'Компания',
      items: ['О нас', 'Вакансии', 'Контакты'] 
    },
    {
      title: 'Разработчики',
      items: ['SilentStrom', 'Ak4ella']
    },
     {
      title: 'Магазины',
      items: ['Bclcross', 'TGready', 'Adventures']
    },
    {
      title: 'Документы',
      items: ['Политика', 'Оферта']
    }
  ]

</script>
