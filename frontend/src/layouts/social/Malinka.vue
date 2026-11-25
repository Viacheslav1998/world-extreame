<template>
  <v-app id="malinka">
    <v-layout>
      <v-main class="bg-area">
        <slot />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
</script>
<style scoped>
.bg-area {
  background-color: pink;
  /* background-image: url('/socials/malinka/leo.jpg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
