<template>
  <v-app>
    <HeaderComponent></HeaderComponent>
    <router-view />
    <FooterComponent></FooterComponent>
  </v-app>
</template>

<script>
  import HeaderComponent from './components/HeaderComponent.vue'
  import FooterComponent from './components/FooterComponent.vue'
  export default {
    name: "App",
    components: { HeaderComponent, FooterComponent },
    mounted() {
      this.$store.dispatch("fetchProducts");
  },
};
</script>
