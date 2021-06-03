<template>
  <b-container>
    <b-row>
      <b-col class="d-flex flex-column align-items-center">
        <h1 class="h2">Order Status</h1>
        <empty-state
          v-if="$store.state.orders.length == 0"
          img="https://firebasestorage.googleapis.com/v0/b/coffeeverse-by-evi.appspot.com/o/Website%20images%2Fclip-shopping-online.png?alt=media&token=708262b5-23d6-4f51-bd6a-4bb45af37662"
          message="You have no ongoing orders"
          linkText="Place a new order"
        />
        <full-orders v-else />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import EmptyState from '../components/Common/EmptyState.vue'
  import FullOrders from '../components/Orders/FullOrders.vue'
  export default {
    components: { EmptyState, FullOrders }
  }
</script>

<style scoped>
  h1.h2 {
    color: #0d2522;
  }
</style>
