import Dashboard from './pages/Dashboard'
import User from './pages/User'
import Product from './pages/Product'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Dashborad',
        component: Dashboard
    },
    {
        path: '/users',
        name: 'users',
        component: User
    },
    {
        path: '/products',
        name: 'products',
        component: Product
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router