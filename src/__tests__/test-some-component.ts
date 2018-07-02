import SomeComponent from "../some-component.vue";
import { createLocalVue, mount } from "@vue/test-utils";

// This unit test is passing.
test("some component", () => {
    const localVue = createLocalVue();
    localVue.mixin({
        beforeCreate() {
            (this as any).$content = "some value";
        },
    });
    const wrapper = mount(SomeComponent, { localVue });
    expect(wrapper.element).toMatchSnapshot();
});
