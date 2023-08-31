<template>
    <v-card class="card" max-width="335" width="100%">
      <v-img contain class="img" :src="product.image" height="200px"></v-img>
      <router-link
        :to="{
          name: 'productSpecifications',
          params: { id: this.product.id },
        }"
        >
            <v-card-title>
            {{ product.title }}
            </v-card-title>
        </router-link>
  
      <v-card-actions class="card__actions">
        <v-card-title> {{ product.price }}$ </v-card-title>
        <v-spacer></v-spacer>
        <v-btn @click="addToCart" variant="elevated">
          Купить
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  <script>
  export default {
    name: 'ProductCardComponent',
    props: {
      product: {},
    },
    methods: {
      addToCart() {
        this.$store.dispatch("addToCart", [this.product.id, 1]);
      },
    },
  };
  </script>
  
  <style scoped>
  a {
    color: black;
    text-decoration: none;
  }
  .card {
    margin: 0px 10px 10px 10px;
    position: relative;
    padding-bottom: 60px;
  }
  
  .card__actions {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  </style>
  