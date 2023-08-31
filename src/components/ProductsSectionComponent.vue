<template>
    <v-container>
      <h1 class="main-title">Товары</h1>
      <v-row class="flex">
        <ProductCardComponent
          v-for="product in productItems"
          :product="product"
          :key="product.id"
        ></ProductCardComponent>
      </v-row>
      <v-row class="flex"
        ><v-btn
          color="orange lighten-2"
          text
          class="mx-auto"
          @click="loadMoreProducts"
          v-if="productItems.length < this.$store.getters.getAllProducts.length"
          >Посмотреть еще</v-btn
        ></v-row
      >
    </v-container>
  </template>
  <script>
  import ProductCardComponent from "@/components/ProductCardComponent.vue";
  export default {
    components: { 
      ProductCardComponent 
    },
    data: () => ({
      counter: 1,
    }),
    computed: {
      productItems() {
        return this.$store.getters.getAllProducts.slice(
          0,
          this.limitProduct * this.counter
        );
      },
      limitProduct() {
        if (document.documentElement.clientWidth >= 1200) {
          return 6
        } else if (document.documentElement.clientWidth > 768 || document.documentElement.clientWidth < 1200) {
          return 4
        } else { 
          return 2
        }
      },
    },
    methods: {
      loadMoreProducts() {
        this.counter++;
      },
    },
  };
  </script>
  
  <style scoped></style>
  