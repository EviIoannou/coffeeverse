<template>
  <b-container fluid>
    <div class="top mb-3">
      <h1 class="h2 mr-2">My cart</h1>
      <h1 class="h3 font-weight-light ml-3">{{ itemsInCart }} items</h1>
    </div>
    <empty v-if="itemsInCart == 0" />
    <full-cart v-else />
  </b-container>
</template>

<script>
  import Empty from '../components/Cart/Empty.vue'
  import FullCart from '../components/Cart/FullCart.vue'
  export default {
    components: { Empty, FullCart },
    props: ['itemsInCart']
  }
</script>

<style scoped>
  p.h4 {
    color: #0d2522;
  }
  .top {
    color: #0d2522;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
