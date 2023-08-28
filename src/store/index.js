import { createStore } from "vuex";
import { cardsModule } from "./cardsModule";
import { cartModule } from "./cartModule";
import { feedbackModule } from "./feedbackModule";
import { newsModule } from "./newsModule";

export default createStore({
    modules: {
        cardsModule,
        cartModule,
        feedbackModule,
        newsModule,
    },
  });