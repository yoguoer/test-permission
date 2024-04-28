import { RouteRecordRaw } from 'vue-router'

export const asyncRoutes: Array<RouteRecordRaw> = [
    {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component:()=>import('@/views/HelloWorld.vue'),
    },
    {
        path: '/badWorld',
        name: 'badWorld',
        component:()=>import('@/views/badWorld.vue'),
    },
    {
        path: '/goodWorld',
        name: 'goodWorld',
        component:()=>import('@/views/goodWorld.vue'),
    },
]