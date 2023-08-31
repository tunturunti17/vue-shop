import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from '@/plugins'
import router from './router/index'
import store from './store/index'
import axios from "axios";
import VueAxios from "vue-axios";


const app = createApp(App)

registerPlugins(app)

app
.use(store, router, axios, VueAxios).mount('#app')
