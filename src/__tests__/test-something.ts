import ParentComponent from "../parent-component.vue";
import { createLocalVue, mount } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";

test("a test", () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const storeMock = {
        state: { content: "" },
        namespaced: true,
        getters: {
            getContent: jest.fn()
        },
    };

    const store = new Vuex.Store({
        modules: {
            myModule: storeMock
        }
    });

    const wrapper = mount(ParentComponent, { localVue, store });
    wrapper.find("a").trigger("click");
    expect(wrapper.element).toMatchSnapshot();
});
