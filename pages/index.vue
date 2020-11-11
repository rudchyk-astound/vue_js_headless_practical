<template>
  <b-container fluid>
    <div class="hello">{{ hello }}</div>
    <div class="hello">products {{ products }}</div>
  </b-container>
</template>

<script lang="ts">
import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'
import getRequest from '~/utils/getRequest.ts'

export default defineComponent({
  setup() {
    const products: any = ref(null)
    const hello: string = 'Hello World!'

    useFetch(async () => {
      products.value = await getRequest('/api/products')
    })

    return {
      hello,
      products,
    }
  }
})
</script>

<style lang="scss">
.hello {
  font-size: 26px;
}
</style>
