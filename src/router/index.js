import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue')
    },
    {
        path: '/error',
        name: 'error',
        component: () => import(/* webpackChunkName: "error" */ '../views/404.vue')
    },
    {
        path: '/sing-in',
        name: 'sing-in',
        component: () => import(/* webpackChunkName: "sing-in" */ '../views/sing-in.vue')
    },
    {
        path: '/sing-up',
        name: 'sing-up',
        component: () => import(/* webpackChunkName: "sing-up" */ '../views/sing-up.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

