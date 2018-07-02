import ParentComponent from "../parent-component.vue";
import { createLocalVue, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";

// This unit test is failing.
test("parent component", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store({
        modules: {
            myModule: {
                // In order to reproduce the error with `getters` of `undefined`, remove this line:
                namespaced: true,
                getters: {
                    getContent() { return "Some value"; }
                },
            }
        }
    });
    const wrapper = mount(ParentComponent, { localVue, store });
    expect(wrapper.element).toMatchSnapshot();
});
