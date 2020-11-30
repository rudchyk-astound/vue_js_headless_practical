<template>
  <b-card no-body tag="article" class="mb-5">
    <NuxtLink :to="link" :title="name">
      <b-card-img :src="image" :alt="name" class="rounded-0"></b-card-img>
    </NuxtLink>
    <b-card-body>
      <b-card-title>
        <NuxtLink :to="link" :title="name">{{ name }}</NuxtLink>
      </b-card-title>
      <b-card-text>
        {{ description }}
      </b-card-text>
      <b-list-group class="mb-3">
        <b-list-group-item>Price: {{ formattedPrice }}</b-list-group-item>
        <b-list-group-item> Quantity: {{ quantity }} </b-list-group-item>
      </b-list-group>
    </b-card-body>
  </b-card>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
  setup(props) {
    const { sku, name, image, price, quantity, description } = props.data
    const link: Object = {
      path: `/product/${sku}`,
      query: props.data,
    }
    const formattedPrice = computed(() => `$${price}`)
    return {
      sku,
      name,
      image,
      description,
      formattedPrice,
      quantity,
      link,
    }
  },
})
</script>
