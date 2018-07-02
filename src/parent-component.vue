<template>
    <div>
        <some-component />
    </div>
</template>

<script lang="ts">
import SomeComponent from "./some-component.vue";
import Vue from "vue";

export default Vue.extend({
    components: {
        SomeComponent,
    },
});
</script>
