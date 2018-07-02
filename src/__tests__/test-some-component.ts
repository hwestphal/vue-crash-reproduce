import SomeComponent from "../some-component.vue";
import { createLocalVue, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";

// This unit test is passing.
test("some component", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store({
        modules: {
            myModule: {
                namespaced: true,
                getters: {
                    getContent() { return "Some value"; }
                },
            }
        }
    });
    const wrapper = mount(SomeComponent, { localVue, store });
    expect(wrapper.element).toMatchSnapshot();
});
