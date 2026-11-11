<template>
  <v-container class="d-flex flex-column fill-height pa-0" fluid>
    <v-sheet class="text-white" width="100%">
      <v-img 
        src="../public/privacy/private.jpg" 
        cover 
        height="250"
        gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.2)"
        class="text-white d-flex align-center"
      >
        <div class="d-flex justify-space-between align-center px-6 w-100">
          <div>
            <div class="text-h6 font-weight-bold">Конфиденциальность</div>
          </div>
    
          <div class="d-flex ga-2">
            <v-btn to="/" variant="text" density="comfortable">Главная</v-btn>
            <v-btn to="/home" variant="text" density="comfortable">все новости</v-btn>
            <v-btn 
              variant="text"
              density="comfortable"
              @click="goBack"
            >назад</v-btn>
          </div>
        </div>
      </v-img>
    </v-sheet>
  
    <v-sheet class="w-100 flex-grow-1 py-8 px-4 d-flex justify-center">

      <v-card class="pa-6 pa-md-10 elevation-2 w-100" max-width="900" rounded="lg">
        
        <v-card-title class="text-h4 font-weight-bold text-wrap text-neutral-darken-4 mb-2 pa-0">
          ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
        </v-card-title>

        <v-card-subtitle class="text-body-2 text-medium-emphasis mb-6 pa-0">
          Дата последнего обновления: [ 10 ноября 2026 г. ]
        </v-card-subtitle>

        <v-divider class="mb-8"></v-divider>

        <v-card-text class="text-body-1 text-high-emphasis pa-0">
          <p class="mb-6 leading-relaxed">
            Настоящая Политика конфиденциальности описывает, как веб-приложение
            <v-btn to="/about" class="text-primary text-decoration-none font-weight-medium">[ World-Extreame.com ]</v-btn> 
             (далее — «Сервис») собирает, использует и хранит информацию о пользователях. Используя Сервис, вы соглашаетесь с условиями данного документа.
          </p>
          <p class="mb-8 leading-relaxed">
              1. Статус проекта

              • Учебный характер. Сервис является некоммерческим пет-проектом, созданным в образовательных и демонстрационных целях.
              • Безопасность данных. Мы рекомендуем не использовать ваши реальные пароли от других сервисов и не загружать конфиденциальную личную информацию при тестировании приложения.
          </p>
          <p class="mb-8 leading-relaxed">
            2. Какие данные мы собираем

            • Данные аккаунта. При регистрации мы сохраняем ваш адрес электронной почты (e-mail), имя пользователя и зашифрованный пароль для работы авторизации.
            • Технические данные. Сервис может автоматически сохранять стандартную техническую информацию (IP-адрес, тип браузера, файлы cookie и данные localStorage), необходимую для корректной работы интерфейса и сохранения вашей сессии.
          </p>
          <p class="mb-8 leading-relaxed">
            3. Как мы используем данные

            • Работа функционала. Собранные данные используются исключительно для входа в систему, сохранения ваших настроек и контента внутри приложения.
            • Защита от передачи. Мы не продаем, не обмениваем и не передаем ваши личные данные третьим лицам, а также не используем их для рекламных рассылок.
          </p>
          <p class="mb-8 leading-relaxed">
            4. Хранение и удаление

            • Условия хранения. Данные проекта размещаются на стандартных облачных серверах с использованием защищенного протокола передачи данных (HTTPS).
            • Удаление аккаунта. Вы можете в любой момент прекратить использование Сервиса и запросить полное удаление вашего аккаунта и всех связанных с ним данных.
          </p>
          <p class="mb-8 leading-relaxed">
            5. Контактная информация
            Если у вас возникли вопросы по поводу работы Сервиса или вы хотите удалить свои данные, свяжитесь с разработчиком по электронной почте: <a href="mailto:support@world-extreame.com" class="text-primary text-decoration-none font-weight-medium">support@world-extreame.com</a>.
          </p>
        </v-card-text>
      </v-card>
    </v-sheet>
    <v-sheet class="bg-blue-grey-darken-4 text-center" height="30px" width="100%"> 
    </v-sheet>
  </v-container>
</template>

<style scoped>

.leading-relaxed {
  line-height: 1.625 !important;
}

.custom-list {
  list-style-type: disc;
}
.custom-list li {
  line-height: 1.6;
  margin-bottom: 4px;
}
</style>

<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>
