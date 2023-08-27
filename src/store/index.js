import { createStore } from "vuex";
import { cardsModule } from "./cardsModule";

export default createStore({
    modules: {
        cardsModule
    },
  });