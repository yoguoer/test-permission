import { createApp } from 'vue'
import './style.css'
import App from './views/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { createPinia } from 'pinia'
import { XElementPlusInstall } from 'xw-ui/element-plus'
import { options } from "./permission" 
import initPermission from "vivien-permission"
import router from "@/router"

const app = createApp(App);
const pinia = createPinia()

app
.use(router)
.use(ElementPlus, { locale: zhCn })
.use(pinia)

// 注册XElementPlus所有组件
XElementPlusInstall(app)

await initPermission(app, options)

app.mount('#app')
//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}



