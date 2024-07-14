import { createRouter, createWebHistory } from "vue-router"
import mainPage from "@/components/screens/main-page/main-page.vue"
import menuPage from "@/components/screens/menu-page/menu-page.vue"
import aboutPage from "@/components/screens/about-page/about-page.vue"
import CommonMenu from "@/components/screens/menu-page/children/common.vue"
import MenuCart from "@/components/screens/menu-page/children/product-full.vue"
import err from "@/components/screens/err/err.vue"

const routes = [
  {
    path: "/",
    alias: ["/home", "/hm", "/main", "/mn"],
    name: "main",
    meta: {
      title: "Zira",
    },
    component: mainPage,
  },
  {
    path: "/menu",
    meta: {
      title: "Zira - меню",
    },
    alias: ["/mn", "/mnu", "/meu", "/nu"],
    component: menuPage,
    children: [
      {
        path: "cmn",
        name: "menu",
        component: CommonMenu,
      },
      {
        path: "cart/:id",
        name: "cart",
        component: MenuCart,
        meta: {
          title: "Zira - описание карточки товара",
        },
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "Zira - о нас",
    },
    alias: ["/abt", "/abot"],
    component: aboutPage,
  },
  {
    path: "/sorry",
    name: "error",
    meta: {
      title: "Извините, 404",
    },
    component: err,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { path: "/sorry" },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Zira"
  next()
})

export default router
