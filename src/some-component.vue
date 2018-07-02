<template>
    <div>
        <p>{{ getContent }}</p>
    </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import Vue from "vue";

// When removing the `Vue.extend` the error is gone.
export default Vue.extend({
    watch: {},
    computed: {
        // In order to reproduce the error with `getters` of `undefined`,
        // Simply replace this line with `...mapGetters("myModule", ["getContent"]),`.
        ...mapGetters("myModule", ["getContent"]),
    },
});
</script>
