import SomeComponent from "./some-component.vue";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Getter, namespace } from "vuex-class";
import { GetContent, SetContent } from "./store";

const ModuleGetter = namespace("myModule", Getter);

@Component({
    components: { "some-component": SomeComponent },
})
export default class ParentComponent extends Vue {
    private elements: string[] = [];

    public click() {
        this.elements = ["a", "b", "c"];
    }
}

