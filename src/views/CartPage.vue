<template>
    <v-container style="margin-top: 65px;">
      <v-row class="flex justify-space-between align-center">
        <h1 class="main-title">Ваша корзина</h1>
        <v-dialog tra nsition="dialog-top-transition" max-width="600" v-model="dialog">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" color="orange lighten-2" text>
              Подтвердить заказ
            </v-btn>
          </template>
            <v-card>
              <v-toolbar color="orange" dark>Заполните данные</v-toolbar>
              <v-card-text>
                <v-row
                  ><v-col cols="12"
                    ><form
                      @submit.prevent="
                        confirmOrder();
                        dialog = false;
                      "
                    >
                      <div class="mb-3">
                        <v-text-field
                          v-model="firstname"
                          required
                          color="orange"
                          label="ФИО"
                        ></v-text-field>
                      </div>
                      <div class="mb-3">
                        <v-text-field
                          v-model="phone"
                          required
                          :rules="phoneRules"
                          type="tel"
                          color="orange"
                          label="Номер телефона"
                        ></v-text-field>
                      </div>
                      <div class="mb-3">
                        <v-text-field
                          v-model="address"
                          required
                          color="orange"
                          label="Адрес"
                        ></v-text-field>
                      </div>
                      <div class="mb-3">
                        <v-text-field
                          v-model="city"
                          required
                          color="orange"
                          label="Город"
                        ></v-text-field>
                      </div>
                      <v-card-actions class="justify-end">
                        <v-btn
                          color="orange lighten-2"
                          text
                          @click="dialog = false"
                          >Отмена</v-btn
                        >
                        <v-btn type="submit" color="orange lighten-2" text>
                          Подтвердить заказ
                        </v-btn>
                      </v-card-actions>
                    </form></v-col
                  ></v-row
                >
              </v-card-text>
            </v-card>
        </v-dialog>
      </v-row>
      <div class="cards">
        <CartCardComponent
          v-for="product in this.$store.getters.getProductsInCart"
          v-bind:product="product"
          v-bind:key="product.id"
        ></CartCardComponent>
      </div>
    </v-container>
  </template>
  <script>
  import CartCardComponent from "@/components/CartCardComponent.vue";
  export default {
    data: () => ({
      dialog: false,
      valid: false,
      firstname: "",
      phone: "",
      address: "",
      city: "",
      phoneRules: [
        (v) =>
          /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/.test(v) ||
          "Номер телефона должен быть введен в формате +7(999)999-99-99",
      ],
    }),
    components: { CartCardComponent },
    methods: {
      confirmOrder() {
        this.$store.dispatch("deleteCartItems");
        console.log(this.$store.getters.getCartItems);
        localStorage.removeItem("shop_cart");
        this.$router.push({ path: "/order_success" });
      },
    },
  };
  </script>
  <style scoped>
  .cards {
    padding: 20px;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
  }
  .flex {
    padding: 10px;
  }
  </style>
  