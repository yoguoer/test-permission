import { RouteRecordRaw } from 'vue-router'

export const basicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component:()=>import('@/views/login/index.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component:()=>import('@/views/login/index.vue'),
    },
]