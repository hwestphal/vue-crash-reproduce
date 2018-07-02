<template>
    <div>
        <p>{{ content }}</p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

// When removing the `Vue.extend` the error is gone.
export default Vue.extend({
  computed: {
    content(): string {
      return (this as any).$content.toUpperCase();
    }
  }
});
</script>
