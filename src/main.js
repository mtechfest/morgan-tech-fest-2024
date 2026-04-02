import 'ant-design-vue/dist/antd.css'
import '@/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'

import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/reset.css'

const app = createApp(App)

app.use(router)
app.use(Antd)
app.use(VueScrollTo, {
  container: 'body',
  duration: 2000,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

app.mount('#app')
