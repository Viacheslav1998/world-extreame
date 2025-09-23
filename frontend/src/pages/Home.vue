<template>
	<!-- pheraps need slots? -->
	<v-container>
		<v-row no-gutters class="bg-blue-grey-lighten-5">
      <v-col cols="7">
        <v-row>
          <v-col>
            <v-sheet class="pa-2 ma-2 rounded">
              <h2 class="text-blue-grey">Быстрый магазин</h2>
            </v-sheet>
          </v-col>
        </v-row>
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

        <v-row>
          <div class="spacer pa-1 ma-1"></div>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <v-sheet class="pa-2 ma-2 rounded text-blue-grey">
              <h3>Последние новости:</h3>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>

      <v-col>
        <v-sheet class="pa-2 ma-2 rounded">
          .v-col-auto
          тут какие то быстрые решения
          рекламки баннеры
        </v-sheet>
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