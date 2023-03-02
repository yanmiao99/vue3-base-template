import {createApp} from 'vue'
import "@/assets/style/reset.css"
import '@/assets/style/common.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router/router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 引入 icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app
  .use(router)
  .use(ElementPlus)
  .use(createPinia())
app.mount('#app')

