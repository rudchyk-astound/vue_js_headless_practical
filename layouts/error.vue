<template>
  <b-container fluid class="text-center">
    <h1 class="error-title">{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <NuxtLink to="/">Home page</NuxtLink>
  </b-container>
</template>

<script lang="ts">
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss">
.error-title {
  margin-top: 100px;
}
</style>