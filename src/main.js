import '@/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// No component library and no scroll library: the only thing either was used for
// was the mobile nav, which is now a native disclosure, and anchor scrolling,
// which the platform does natively via `scroll-behavior` + `scroll-margin-top`.
createApp(App).use(router).mount('#app')
