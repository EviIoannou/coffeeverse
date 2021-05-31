<template>
  <b-container>
    <b-row>
      <b-col class="d-flex flex-column align-items-center">
        <h1 class="h2">Order Status</h1>
        <empty-orders v-if="$store.state.orders.length == 0" />
        <full-orders v-else />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import EmptyOrders from '../components/Orders/EmptyOrders.vue'
  import FullOrders from '../components/Orders/FullOrders.vue'
  export default {
    components: { EmptyOrders, FullOrders }
  }
</script>

<style scoped>
  h1.h2 {
    color: #0d2522;
  }
</style>
