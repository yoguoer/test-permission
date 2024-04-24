import { createApp } from 'vue'
import './style.css'
import App from './views/App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { createPinia } from 'pinia'

const app = createApp(App);
// 实例化 Pinia
const pinia = createPinia()

app.use(router)
.use(ElementPlus, { locale: zhCn })
.use(pinia)
.mount('#app') //挂载路由

//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}



