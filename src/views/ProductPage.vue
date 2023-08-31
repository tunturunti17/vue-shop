<template>
    <v-container style="margin-top: 200px">
      <v-img contain class="img" :src="product.image" height="200px"></v-img>
      <div v-if="!product.id">
        Загрузка...
      </div>
      <div v-if="product.id">
        <h1 class="main-title">{{ product.title }}</h1>
        <ProductPageStartComponent
          v-bind:product="product"
        />
        <ProductPageToolBarComponent
          v-bind:product="product"
        />
        <ProductsTopComponent />
      </div>
    </v-container>
  </template>
  <script>
  import ProductPageStartComponent from "@/components/ProductPageStartComponent.vue";
  import ProductPageToolBarComponent from "@/components/ProductPageToolBarComponent.vue";
  import ProductsTopComponent from "@/components/ProductsTopComponent.vue";
  
  export default {
    components: {
      ProductPageStartComponent,
      ProductPageToolBarComponent,
      ProductsTopComponent,
    },
    data() {
      return {
        product: {},
      };
    },
    props: ["id"],
    async created() {
      if (this.$store.getters.getAllProducts.length > 0) {
        this.product = this.$store.getters.getAllProducts.filter(
          (product) => product.id == this.id
        )[0];
      } else {
        setTimeout(
          () =>
            (this.product = this.$store.getters.getAllProducts.filter(
              (product) => product.id == this.id
            )[0]),
          1000
        );
      }
    },
    watch: {
      async "$route.path"() {
        this.product = this.$store.getters.getAllProducts.filter(
          (product) => product.id == this.id
        )[0];
      },
    },
  };
  </script>
  <style scoped>
  .product {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  </style>
  