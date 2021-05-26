<template>
  <b-container>
    <div class="top">
      <h1 class="h2 mr-2">My cart</h1>
      <h1 class="h3 font-weight-light ml-3">{{ itemsInCart }} items</h1>
    </div>
    <empty v-if="itemsInCart == 0" />
  </b-container>
</template>

<script>
  import Empty from '../components/Cart/Empty.vue'
  export default {
    components: { Empty },
    props: ['itemsInCart']
  }
</script>

<style scoped>
  .top {
    color: #0d2522;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
