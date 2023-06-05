import { createRouter, createWebHistory } from "vue-router";
import Home from "../App.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/home.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/register.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
