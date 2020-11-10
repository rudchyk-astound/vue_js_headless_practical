<template>
  <b-navbar type="dark" variant="info" class="justify-content-center">
    <b-navbar-brand href="#">
      {{ title }}
    </b-navbar-brand>
  </b-navbar>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const title: String = 'Vue Js Practical Module In Frames Of Headless Course'
    return {
      title
    }
  },
})
</script>