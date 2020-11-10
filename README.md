# vue_js_headless_practical

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
# unit tests run
$ yarn test

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Links

* [Composition API Reference](https://composition-api.vuejs.org/api.html#setup)
* [Jest API Reference](https://jestjs.io/docs/en/api)
* [BootstrapVue Components](https://bootstrap-vue.org/docs/components)
* [Markdown Guide](https://www.markdownguide.org/basic-syntax/)

## Single File Components Template

```html
<template>
  <b-container fluid>
    <div class="hello">{{ hello }}</div>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import <COMPONENT> from '~/components/<COMPONENT>.vue'

export default defineComponent({
  components: {
    <COMPONENT>
  },
  props: {
    name: {
      type: Object,
      default: null
    }
  },
  setup(props, context) {
    const hello: string = 'Hello World!'
    console.log(props.name)
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
```