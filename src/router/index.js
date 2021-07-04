import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import Login from '../pages/auth/login.vue'

import AdminLayout from '../layouts/admin.vue'
import BlankLayout from '../layouts/blank.vue'
import { sistema } from './sistema'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: BlankLayout,
        children: [
            {
                path: '',
                component: Login
            }
        ] 
    },
    ...sistema,
    {
        path: '/',
        name: 'home',
        component: AdminLayout,
        children: [
            {
                path: '',
                meta: { auth: true },
                component: HelloWorld
            }
        ]
    }
]

const router =  new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("access_token");

    if (to.meta.auth) {
        if (token) {
            next();    
        } else {
            next({ name: "login" });    
        }
    }

    next()

});

export default router;