import ParentComponent from "../parent-component.vue";
import SomeComponent from "../some-component.vue";
import { createLocalVue, mount } from "@vue/test-utils";

// This unit test is failing.
test("parent component", () => {
    const localVue = createLocalVue();
    localVue.mixin({
        beforeCreate() {
            (this as any).$content = "some value";
        },
    });
    const wrapper = mount(ParentComponent, { localVue });
    expect(wrapper.element).toMatchSnapshot();
});
