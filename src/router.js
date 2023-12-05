import { createWebHistory, createRouter } from "vue-router";
import App from "@/App";
import Jeu from "@/components/Jeu.vue";
import Home from "@/components/Home.vue";
import Historique from "@/components/Historique.vue";
import Findepartie from "@/components/Findepartie.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/jeu",
        name: "Jeu",
        component: Jeu,
    },
    {
        path: "/historique",
        name: "historique",
        component: Historique,
    },
    {
        path: "/findepartie",
        name: "findepartie",
        component: Findepartie,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
