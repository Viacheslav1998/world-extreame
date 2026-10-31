<template>
  <v-app id="admin">
    <v-layout>
    
    <!-- Сайдбар лежит на верхнем уровне, вне контейнеров -->
    <v-navigation-drawer
      image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      theme="dark"
      permanent
    >
      <v-list nav>
        <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
        <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors" value="supervisors"></v-list-item>
        <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- v-main автоматически сделает отступ справа от сайдбара -->
    <v-main>
      <v-container>
        <p>asdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
        
        <!-- правая часть line-header или slot/router-view -->
      </v-container>
    </v-main>

  </v-layout>
</v-app>
</template>

<script setup lang="ts">
import Sitebar from "../components/admin/Sitebar.vue"
</script>