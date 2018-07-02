import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const myModule = {
    namespaced: true,
    state: {
        content: "",
    },
    getters: {
        getContent(state: any): string {
            return state.content;
        }
    },
};

export type GetContent = () => string

export default new Vuex.Store({
    modules: {
        myModule,
    },
});
