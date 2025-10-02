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
           <v-col
             v-for="post in posts"
             :key="post.id"
           >
            <v-sheet class="pa-2 ma-2 rounded">
              <v-card class="rounded hover:shadow-lg transition-all">
                <v-card-title class="text-lg front-bold">
                  {{ post.title }}
                </v-card-title>

                <v-img 
                  :src="'/main/' + post.image"
                  height="200"
                  cover
                  alt="alter"
                ></v-img>

                <v-card-text>
                  {{ post.text }}
                </v-card-text>

                <v-card-actions class="justify-end">
                  <v-btn
                    color="red-accent-4"
                    variant="outlined"
                    @click="goToPost(post.id)"
                  >
                    перейти
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-sheet>
           </v-col>
        </v-row>
      </v-col>
      <!-- right side -->
      <v-col>
        <v-sheet class="pa-2 ma-2 rounded text-blue-grey">
          <h4>Случайные комментарии:</h4>
        </v-sheet>
        <v-row no-gutters>
          <v-sheet class="pa-2 ma-2 rounded">
            <v-list lines="one">
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
	const posts = [
    {
      id: 1,
      title: 'Как выбрать рюкзак для похода',
      image: 'bcc.jpg',
      text: 'здесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительн'
    },
    {
      id: 2,
      title: 'Кросовки для ультрыбыстрого экстремального бега - ноги будут болеть но будут ли минусы ?',
      image: 'bcc.jpg',
      text: 'здесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительнздесь много место как оказалось и складывать сюда вещи очень не плохое решение данный текст используется как наполнительн'
    }
  ];

  function goToPost(id: number) {
    console.log('redirect to: ', id);
  }

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
.m-forest { background-image: url('/main/f.jpg');}
.m-bycucle { background-image: url('/main/bc.jpg');}
.m-cross { background-image: url('/main/c.jpg');}
</style>