<template>
  <b-container class="mb-3" fluid style="width: 90vw">
    <h1 class="h2">Snacks</h1>
    <h2 class="h4 mb-4">{{ $store.state.snacks.length }} results</h2>
    <products products="snacks" />
  </b-container>
</template>

<script>
  import Products from '../components/Common/Products.vue'

  export default {
    components: { Products }
  }
</script>
