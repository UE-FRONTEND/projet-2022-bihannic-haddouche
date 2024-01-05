import { createWebHistory, createRouter } from "vue-router";
import App from "@/App";
import Home from "@/components/Home.vue";
import Historique from "@/components/Historique.vue";
import Game from "@/components/Game.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/jeu",
        name: "Jeu",
        component: Game,
    },
    {
        path: "/historique",
        name: "historique",
        component: Historique,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
