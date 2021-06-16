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
          v-b-modal.discard
          ><b-icon-trash></b-icon-trash> Disard all</b-button
        >
        <b-modal
          content-class="your-class"
          id="discard"
          title="Discard items"
          centered
          >Do you want to discard all items from your cart?
          <template #modal-footer="{ ok, cancel }">
            <p>
              <b-button @click="cancel()" class="cancel-btn">Cancel</b-button>
            </p>
            <p>
              <b-button
                @click="
                  ok()
                  functions.discardItems()
                "
                class="ok-btn"
                >Discard</b-button
              >
            </p>
          </template></b-modal
        >
      </b-col>
    </b-row>
    <empty-state
      v-if="itemsInCart == 0"
      img="https://firebasestorage.googleapis.com/v0/b/coffeeverse-by-evi.appspot.com/o/Website%20images%2Fshopping%20cart.png?alt=media&token=4c3f5075-fa0f-48a3-b72a-bd31a7fa4b67"
      message="Your cart is empty"
      linkText="Start shopping"
    />
    <full-cart v-else />
  </b-container>
</template>

<script>
  import functions from '../../../server/functions'
  import EmptyState from '../Common/EmptyState.vue'
  import FullCart from '../Cart/FullCart.vue'
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

    components: { EmptyState, FullCart }
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
