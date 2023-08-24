
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import router from './router/index'

const app = createApp(App)

registerPlugins(app)

app.use(router).mount('#app')
