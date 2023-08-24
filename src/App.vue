<template>
  <v-app>
    <header-component></header-component>
    <router-view />
    <footer-component></footer-component>
  </v-app>
</template>

<script setup>
  import HeaderComponent from './components/HeaderComponent.vue'
  import FooterComponent from './components/FooterComponent.vue'
</script>
