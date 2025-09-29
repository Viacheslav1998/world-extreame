<template>
	<!-- pheraps need slots? -->
	<v-container>
		<v-row no-gutters class="bg-blue-grey-lighten-5">
      <v-col cols="7">
        <v-sheet class="pa-2 ma-2 rounded">
          <h2 class="text-blue-grey">Быстрый магазин</h2>
        </v-sheet>
        <v-row no-gutters>
          <v-col>
            <v-sheet class="pa-2 ma-2 rounded m-forest">
              <h4>магазин</h4>
              <p>Туристический набор</p>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2 rounded m-bycucle">
              <h4>Магазин</h4>
              <p>Для велосипедов</p>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="pa-2 ma-2 rounded m-cross">
              <h4>Магазин</h4>
              <p>Детали, двигателя ...</p>
            </v-sheet>
          </v-col>
        </v-row>
        <v-sheet class="pa-2 ma-2 rounded text-blue-grey">
          <h4>Последние новости:</h4>
        </v-sheet>
        <v-row no-gutters>
          <v-card
            class=" pa-2 ma-2"
            prepend-icon="$vuetify"
            subtitle="the #1 vue UI Library"
            flat
          >
            <template v-slot:title>
              <span class="font-weight-black">Welcome to vuetify</span>
            </template>

            <v-card-text class="bg-surface-light pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet dolores et laboriosam repellendus facilis quis in voluptatibus ex rem ea nesciunt nemo ipsa quae recusandae, repellat atque. Error, distinctio!
              Recusandae, blanditiis? Magnam veritatis iste distinctio fugit, a, earum quam atque molestias obcaecati eius voluptas ipsum minus. Nemo hic excepturi cum obcaecati vel exercitationem, ea facilis, possimus praesentium reprehenderit soluta.
              Praesentium veritatis illo quos cum, fuga molestiae. Tenetur corrupti eveniet molestias magnam sit, soluta esse dolorem porro quos! Quasi vel nisi repellat, ut architecto quam alias eligendi sunt qui illum!
              Dolor laborum a harum enim fugit dolorem tempore qui similique corrupti in, saepe minima ducimus consequuntur eveniet quod, aperiam sed iusto, omnis quos nisi fugiat dicta totam. Et, omnis voluptas?
              Labore dolores aspernatur ullam odit error eaque soluta qui, praesentium quas quos harum, nisi in eveniet minima. Asperiores mollitia repellat cumque maxime tempore magnam impedit? Sint temporibus ipsa quas iure!
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <!-- right side -->
      <v-col>
        <v-sheet class="pa-2 ma-2 rounded text-blue-grey">
          <h4>Случайные комментарии:</h4>
        </v-sheet>
        <v-row no-gutters>
          <v-sheet class="pa-2 ma-2 rounded">
            <v-list lines="one" class="">
              <v-list-item 
                class="bg-indigo ma-2 py-4 rounded"
                v-for="n in 8"
                :key="n"
                :title="'тема: ' + n"
                subtitle="какой то комментарий пользователя на последний пост с горнолыжки"
              >
              </v-list-item>
            </v-list>
          </v-sheet>
        </v-row>
      </v-col>
    </v-row>
	</v-container>
</template>

<script setup lang="ts">
	
</script>

<style scoped>
.m-bycucle, .m-forest, .m-cross {
  height: 100px;
  background-size: cover;
  background-position: center;
  transition: all 0.4s ease;
}

.m-bycucle:hover, .m-forest:hover, .m-cross:hover {
  color: white;
  border-bottom: 2px solid white;
  cursor: pointer;
  background-image: url('/main/pex.jpg');
  box-shadow: 0 1px 20px rgba(46, 46, 46, 0.633);
} 

.m-forest {
  background-image: url('/main/f.jpg');
}
.m-bycucle {
  background-image: url('/main/bc.jpg');
}
.m-cross {
  background-image: url('/main/c.jpg');
}
</style>