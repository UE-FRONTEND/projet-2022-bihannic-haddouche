import { createWebHistory, createRouter } from "vue-router";
import App from "@/App";
import Jeu from "@/Jeu.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: App, /* <--- Change it */
    },
    {
        path: "/jeu",
        name: "Jeu",
        component: Jeu,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
