<template>
  <b-container class="pt-5 pb-5">
    <b-card no-body class="overflow-hidden product">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="image" :alt="name" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="name">
            <b-card-text>
              {{ description }}
            </b-card-text>
            <b-list-group class="mb-3">
              <b-list-group-item>Price: {{ formattedPrice }}</b-list-group-item>
              <b-list-group-item>Quantity: {{ quantity }} </b-list-group-item>
            </b-list-group>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, context) {
    const product = context.root.$route.query
    const { name, image, price, quantity, description } = product
    const formattedPrice = computed(() => `$${price}`)

    return {
      name,
      image,
      formattedPrice,
      quantity,
      description,
    }
  },
})
</script>

<style lang="scss">
.product {
  border: none;
}
</style>
