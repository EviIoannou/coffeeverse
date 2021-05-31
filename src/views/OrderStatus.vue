<template>
  <b-container>
    <b-row>
      <b-col class="d-flex flex-column align-items-center">
        <h1 class="h2">Order Status</h1>
        <full-orders />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import FullOrders from '../components/Orders/FullOrders.vue'
  export default {
    components: { FullOrders }
  }
</script>

<style></style>
