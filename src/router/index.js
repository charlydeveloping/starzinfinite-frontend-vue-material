import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import AdminLayout from '../layouts/admin.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: AdminLayout,
        children: [
            {
                path: '',
                component: HelloWorld
            }
        ]
    }
]

const router =  new VueRouter({
    routes,
    mode: 'history'
})

export default router;