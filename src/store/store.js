import { createStore } from "vuex"
import headerOptions from "./header_options"
import menuOptions from "./menu_options"

import axios from "axios"

async function getData() {
  return await axios.get("http://localhost:8080/static/database.json")
}

let store = createStore({
  state() {
    return {
      headerOptions,
      menuOptions,
      menuOptions,
      mainGallery: [],
      menu: [],
      lastSeenProductFull,
    }
  },
  mutations: {
    addBusketValue(state) {
      state.headerOptions.busketValue++
    },
    setMainGallery(state) {
      getData().then((res) => {
        state.mainGallery = res.data.mainView
      })
    },
    setMenu(state) {
      getData().then((res) => {
        state.menu = res.data.menu
      })
    },
    setMenuOptions(state, payload) {
      for (let [key, value] of Object.entries(payload)) {
        state.menuOptions[key] = value
      }
    },
  },
  getters: {
    getHeaderOptions(state) {
      return state.headerOptions
    },
    getMainGallery(state) {
      return state.mainGallery
    },
    getMenu(state) {
      return state.menu
    },
    getMenuOptions(state) {
      return state.menuOptions
    },
  },
  actions: {
    pushToBusket({ commit }) {
      commit("addBusketValue")
    },
    initMainGallery({ commit }) {
      commit("setMainGallery")
    },
    initMenuPage({ commit }) {
      commit("setMenu")
    },
    setMenuOptions({ commit }, payload) {
      commit("setMenuOptions", payload)
    },
  },
})

export default store
