<template>
  <v-container class="d-flex flex-column fill-height pa-0" fluid>
    <v-sheet class="text-white" width="100%">
      <v-img 
        src="../public/terms/terms.jpg" 
        cover 
        height="150"
        gradient="to bottom, rgba(0,0,0,.5), rgba(0,0,0,.8)"
        class="text-white d-flex align-center"
      >
        <div class="d-flex justify-space-between align-center px-6 w-100">
          <div>
            <div class="text-h6 font-weight-bold">Политика соглашения</div>
            <div class="text-caption text-grey-lighten-1">version 2.1</div>
          </div>
    
          <div class="d-flex ga-2">
            <v-btn variant="text" density="comfortable">Главная</v-btn>
            <v-btn variant="text" density="comfortable">все новости</v-btn>
            <v-btn variant="text" density="comfortable">назад</v-btn>
          </div>
        </div>
      </v-img>
    </v-sheet>
  
    <v-sheet class="w-100 flex-grow-1 py-8 px-4 d-flex justify-center">

      <v-card class="pa-6 pa-md-10 elevation-2 w-100" max-width="900" rounded="lg">
        
        <v-card-title class="text-h4 font-weight-bold text-wrap text-neutral-darken-4 mb-2 pa-0">
          Пользовательское соглашение
        </v-card-title>

        <v-card-subtitle class="text-body-2 text-medium-emphasis mb-6 pa-0">
          Дата последнего обновления: [ 7 ноября 2026 г. ]
        </v-card-subtitle>

        <v-divider class="mb-8"></v-divider>

        <v-card-text class="text-body-1 text-high-emphasis pa-0">
          
          <p class="mb-6 leading-relaxed">
            Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения между владельцем сайта 
            <a href="#" class="text-primary text-decoration-none font-weight-medium">[ World-Extreame.com ]</a> 
            (далее — «Администрация») и любым лицом, посещающим или использующим данный Сайт (далее — «Пользователь»).
          </p>

          <p class="mb-8 leading-relaxed">
            Использование Сайта означает полное и безоговорочное согласие Пользователя с настоящим Соглашением. 
            Если вы не согласны с какими-либо условиями, пожалуйста, прекратите использование Сайта.
          </p>

          <div class="mb-8">
            <h2 class="text-h6 font-weight-bold mb-3 text-neutral-darken-3">1. Термины и определения</h2>
            <v-list lines="two" class="bg-transparent pa-0">
              <v-list-item class="px-0">
                <template v-slot:title><span class="font-weight-bold">Сайт</span></template>
                <template v-slot:subtitle>совокупность веб-страниц, размещенных в сети Интернет по адресу [ world-extreame.com ].</template>
              </v-list-item>
              <v-list-item class="px-0">
                <template v-slot:title><span class="font-weight-bold">Пользователь</span></template>
                <template v-slot:subtitle>любое физическое или юридическое лицо, получившее доступ к Сайту.</template>
              </v-list-item>
              <v-list-item class="px-0">
                <template v-slot:title><span class="font-weight-bold">Контент</span></template>
                <template v-slot:subtitle>любая информация, размещенная на Сайте, включая тексты, графику, дизайн, изображения, видео и программный код.</template>
              </v-list-item>
            </v-list>
          </div>

          <div class="mb-8">
            <h2 class="text-h6 font-weight-bold mb-3 text-neutral-darken-3">2. Права и обязанности Сторон</h2>
            
            <div class="mb-4">
              <div class="font-weight-medium mb-1">2.1. Пользователь имеет право:</div>
              <ul class="pl-5 custom-list">
                <li class="mb-1">Ознакомляться с материалами Сайта и использовать доступные сервисы в личных, некоммерческих целях.</li>
                <li>Задавать вопросы Администрации через доступные формы обратной связи.</li>
              </ul>
            </div>

            <div class="mb-4">
              <div class="font-weight-medium mb-1">2.2. Пользователю запрещается:</div>
              <ul class="pl-5 custom-list">
                <li class="mb-1">Использовать Сайт для распространения спама, вредоносного ПО или информации, нарушающей законодательство.</li>
                <li class="mb-1">Копировать, модифицировать или распространять Контент Сайта без предварительного письменного согласия Администрации.</li>
                <li>Нарушать нормальную работу Сайта с помощью технических средств.</li>
              </ul>
            </div>

            <div>
              <div class="font-weight-medium mb-1">2.3. Администрация имеет право:</div>
              <ul class="pl-5 custom-list">
                <li class="mb-1">В любое время изменять дизайн Сайта, его Контент, список сервисов и условия настоящего Соглашения без предварительного уведомления Пользователя.</li>
                <li>Ограничить доступ к Сайту Пользователю в случае нарушения им условий данного Соглашения.</li>
              </ul>
            </div>
          </div>

          <div class="mb-8">
            <h2 class="text-h6 font-weight-bold mb-3 text-neutral-darken-3">3. Ограничение ответственности</h2>
            <p class="mb-3 leading-relaxed">
              Сайт и весь его Контент предоставляются по принципу «как есть» (as is). Администрация не гарантирует, что Сайт будет соответствовать вашим требованиям или работать непрерывно и без ошибок.
            </p>
            <p class="mb-3 leading-relaxed">
              Администрация не несет ответственности за любые прямые или косвенные убытки, возникшие из-за использования или невозможности использования Сайта.
            </p>
            <p class="leading-relaxed">
              Сайт может содержать ссылки на сторонние ресурсы. Администрация не контролирует эти сайты и не несет ответственности за их содержание или конфиденциальность.
            </p>
          </div>

          <div class="mb-8">
            <h2 class="text-h6 font-weight-bold mb-3 text-neutral-darken-3">4. Персональные данные</h2>
            <p class="leading-relaxed">
              Сбор, обработка и защита персональных данных Пользователей осуществляются в соответствии с нашей 
              <a href="#" class="text-primary text-decoration-none font-weight-medium">Политикой конфиденциальности</a>.
            </p>
          </div>

          <div class="mb-8">
            <h2 class="text-h6 font-weight-bold mb-3 text-neutral-darken-3">5. Заключительные положения</h2>
            <p class="mb-3 leading-relaxed">
              Администрация оставляет за собой право изменять настоящее Соглашение в одностороннем порядке. Новая редакция Соглашения вступает в силу с момента ее публикации на этой странице.
            </p>
            <p class="leading-relaxed">
              Пользователь обязуется самостоятельно проверять Соглашение на предмет изменений. Продолжение использования Сайта после изменения условий означает их автоматическое принятие.
            </p>
          </div>

        </v-card-text>

        <v-divider class="my-6"></v-divider>

        <v-card-actions class="pa-0 d-flex flex-column align-start">
          <div class="text-subtitle-1 font-weight-bold mb-1">Контакты для связи:</div>
          <div class="text-body-2 text-medium-emphasis">
            Если у вас возникли вопросы по поводу данного Соглашения, вы можете связаться с нами по адресу: 
            <a href="mailto:support@world-extreame.com" class="text-primary text-decoration-none font-weight-medium">support@world-extreame.com</a>
          </div>
        </v-card-actions>

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
// router
</script>
