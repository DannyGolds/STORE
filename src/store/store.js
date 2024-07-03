import { createStore } from "vuex"
import headerOptions from "./header_options"

import axios from "axios"

let store = createStore({
  state() {
    return {
      headerOptions,
      mainGallery: [],
      menu: [],
    }
  },
  mutations: {
    addBusketValue(state) {
      state.headerOptions.busketValue++
    },
    setMainGallery(state) {
      axios.get("/static/database.json").then((res) => {
        state.mainGallery = res.data.mainView
      })
    },
    setMenu(state) {
      axios.get("/static/database.json").then((res) => {
        state.menu = res.data.menu
      })
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
  },
})

export default store
