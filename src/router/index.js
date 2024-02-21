import { createRouter, createWebHistory } from "vue-router"
import mainPage from "@/components/screens/main-page/main-page.vue"
import menuPage from "@/components/screens/menu-page/menu-page.vue"

const routes = [
  {
    path: "/",
    name: "main",
    component: mainPage,
  },
  {
    path: "/menu",
    name: "menu",
    component: menuPage,
  },
]

export default createRouter({ history: createWebHistory(), routes })
