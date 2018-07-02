import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const myModule = {
    // In order to reproduce the error with `getters` of `undefined`, remove this line:
    namespaced: true,
    state: {
        content: "Some value",
    },
    getters: {
        getContent(state: any) {
            return state.content;
        }
    },
};

export default new Vuex.Store({
    modules: {
        myModule,
    },
});
