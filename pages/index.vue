<template>
  <b-container fluid>
    <div class="hello">{{ hello }}</div>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(props, context) {
    const hello: string = 'Hello World!'
    console.log(context.attrs)
    console.log(context.slots)
    console.log(context.emit)
    return {
      hello
    }
  },
})
</script>

<style lang="scss">
.hello {
  font-size: 26px;
}
</style>
