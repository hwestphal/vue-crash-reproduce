import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Getter, namespace } from "vuex-class";
import { GetContent, SetContent } from "./store";

const ModuleGetter = namespace("myModule", Getter);

@Component()
export default class SomeComponent extends Vue {
    @ModuleGetter private getContent: GetContent;
    private watched = "original value";


    @Watch("getContent")
    public searchChanged() {
        this.watched = "it changed";
    }
}
