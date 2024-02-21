import { createStore } from "vuex";
import headerOptions from "./header_options";
import mainCarts from "./main_carts";

let store = createStore({
    state() {
        return {
            headerOptions,
            mainCarts,
        };
    },
    mutations: {
        addBasketValue(state) {
            state.headerOptions.basketValue++;
        },
        setMainCarts(state, payload) {
            state.mainCarts = mainCarts.concat(payload);
        },
    },
    getters: {
        HEADER_OPTIONS(state) {
            return state.headerOptions;
        },
    },
    actions: {
        ADD_BASKET_VALUE({ commit }) {
            commit("addBasketValue");
        },
    },
});

export default store;
