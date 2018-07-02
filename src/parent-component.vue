<template>
    <div>
        <some-component v-for="(key, value) in elements" />
        <a @click="click">A link</a>
    </div>
</template>

<script lang="ts">
export { default } from "./parent-component"
</script>
