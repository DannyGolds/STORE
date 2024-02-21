import { createApp } from "vue"
import App from "./components/app/App.vue"
import store from "./store/store.js"
import router from "./router"
import "@/assets/styles/main.scss"

createApp(App).use(router).use(store).mount("#app")
