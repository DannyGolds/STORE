import { createRouter, createWebHistory } from "vue-router"
import mainPage from "@/components/screens/main-page/main-page.vue"
import menuPage from "@/components/screens/menu-page/menu-page.vue"
import aboutPage from "@/components/screens/about-page/about-page.vue"

const routes = [
  {
    path: "/STORE/",
    name: "main",
    component: mainPage,
  },
  {
    path: "/STORE/menu",
    name: "menu",
    component: menuPage,
  },
  {
    path: "/STORE/about",
    name: "about",
    component: aboutPage,
  },
]

export default createRouter({ history: createWebHistory(), routes })
