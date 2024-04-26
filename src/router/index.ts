import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
 
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'login',
        component:()=>import('@/views/login/index.vue'),
    },
    {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component:()=>import('@/views/HelloWorld.vue'),
    },
]

// 创建一个可以被 Vue 应用程序使用的路由实例 
const router = createRouter({
    // 创建一个 hash 历史记录
    history: createWebHistory(),
    // 应该添加到路由的初始路由列表
    routes
})
 
export default router