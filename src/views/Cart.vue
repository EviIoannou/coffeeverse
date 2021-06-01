<template>
  <b-container fluid>
    <b-row align-h="end" class="top mb-3">
      <b-col cols="12" md="5" lg="4" class="d-lg-flex title">
        <h1 class="h2 mr-2 text-center text-md-end">My cart</h1>
        <h1 class="h3 font-weight-light ml-3 text-center">
          {{ itemsInCart }} items
        </h1>
      </b-col>
      <b-col cols="12" md="4" lg="3" class="discard-btn text-center">
        <b-button
          class="mr-2"
          :disabled="itemsInCart == 0"
          variant="outline-danger"
          @click="functions.discardItems"
          ><b-icon-trash></b-icon-trash> Disard all</b-button
        >
      </b-col>
    </b-row>
    <empty-cart v-if="itemsInCart == 0" />
    <full-cart v-else />
  </b-container>
</template>

<script>
  import functions from '../../server/functions'
  import EmptyCart from '../components/Cart/EmptyCart.vue'
  import FullCart from '../components/Cart/FullCart.vue'
  export default {
    data() {
      return {
        functions: functions
      }
    },
    computed: {
      itemsInCart() {
        return this.$store.getters.itemsInCart()
      }
    },

    components: { EmptyCart, FullCart }
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
  .top div {
    width: 50%;
  }
  .top .title {
    align-items: center;
  }
</style>
