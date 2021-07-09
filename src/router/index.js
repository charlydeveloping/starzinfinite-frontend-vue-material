import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/auth/login.vue";

import AdminLayout from "../layouts/admin.vue";
import BlankLayout from "../layouts/blank.vue";
import { sistema } from "./sistema";
import { usuario } from "./usuario";
import { rol } from "./rol";

Vue.use(VueRouter);

const routes = [
    {
        path: "/auth",
        name: "auth",
        component: BlankLayout,
        children: [
            {
                path: "login",
                name: "auth.login",
                component: Login,
            },
        ],
    },
    ...sistema,
    ...usuario,
    ...rol,
    {
        path: "/",
        name: "home",
        component: AdminLayout,
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("access_token");

    if (to.meta.auth) {
        if (token) {
            next();
        } else {
            next({ name: "login" });
        }
    }

    next();
});

export default router;
