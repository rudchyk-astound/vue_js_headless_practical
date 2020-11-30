<template>
  <b-container>
    <b-card-group columns class="pt-5">
      <ProductTile
        v-for="product in products"
        :key="product.sku"
        :data="product"
      />
    </b-card-group>
  </b-container>
</template>

<script lang="ts">
import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'
import getRequest from '~/utils/getRequest.ts'
import ProductTile from '~/components/ProductTile.vue'

export default defineComponent({
  components: {
    ProductTile,
  },
  setup() {
    const products: any = ref(null)

    useFetch(async () => {
      products.value = await getRequest('/api/products')
    })

    return {
      products,
    }
  },
})
</script>
