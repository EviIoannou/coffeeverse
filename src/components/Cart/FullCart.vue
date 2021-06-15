<template>
  <b-container fluid>
    <b-row align-h="center" class="cart-items">
      <b-col
        class="mb-3"
        cols="12"
        sm="9"
        md="6"
        lg="4"
        v-for="product in addedInCart"
        :key="product.cartId"
      >
        <b-card class="product-card" no-body>
          <b-row no-gutters>
            <b-col lg="6">
              <b-card-img
                :src="product.image"
                alt="product-image"
                class="ml-2 mt-4 product-image rounded-0"
              ></b-card-img>
            </b-col>
            <b-col lg="6">
              <b-card-body>
                <b-card-title class="product-name text-capitalize">{{
                  product.name
                }}</b-card-title>
                <b-card-sub-title class="shop text-capitalize">{{
                  product.shop
                }}</b-card-sub-title>
                <div class="info my-3">
                  <b-card-text class="mb-1"
                    >{{ product.amount }} items</b-card-text
                  >
                  <b-card-text
                    >{{ product.amount * product.price }} kr</b-card-text
                  >
                </div>

                <b-button
                  v-b-modal="`${product.cartId}`"
                  variant="outline-danger"
                  ><b-icon-trash></b-icon-trash> Disard</b-button
                >
                <b-modal
                  centered
                  :id="`${product.cartId}`"
                  title="Discard item"
                  ok-title="Discard"
                  cancel-variant="info"
                  ok-variant="outline-danger"
                  @ok="functions.discardItem(product.cartId)"
                  >Do you want to discard this item from your cart?</b-modal
                >
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row align-h="center" class="my-4">
      <b-col
        class="d-flex flex-column align-items-center"
        cols="12"
        sm="6"
        md="3"
      >
        <p class="h4">Total: {{ totalPrice }} kr</p>
        <b-button class="checkout-link" @click="createOrder"
          >Checkout<b-icon-credit-card class="ml-3"></b-icon-credit-card>
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import functions from '../../../server/functions'

  export default {
    data() {
      return {
        functions: functions
      }
    },
    computed: {
      addedInCart() {
        let products = this.$store.state.cart
        let productsAdded = []
        products.forEach((p) => {
          //loop through all products in the cart
          let product = this.$store.state[p.type].find((i) => i.id == p.id) //find the product
          productsAdded.push(
            // push in the local array, plus assign two more necessary properties
            Object.assign(product, { amount: p.amount, cartId: p.cartId })
          )
        })
        return productsAdded
      },

      totalPrice() {
        let productPrices = this.addedInCart
          .map((p) => p.price * p.amount)
          .reduce((a, b) => a + b)

        return productPrices
      }
    },

    methods: {
      async createOrder() {
        // Add an object to the orders in Vuex store:
        await functions.addOrder()
        // Then empty the cart
        await functions.discardItems()
        // Last, go to view the orders
        await this.$router.push('/orders')
      }
    }
  }
</script>

<style scoped>
  .cart-items {
    height: 65vh;
    overflow-y: auto;
  }
  .card.product-card {
    border: none;
  }
  h4,
  h6,
  p {
    color: rgba(13, 37, 34, 0.8) !important;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .product-name {
    font-size: 20px;
  }

  .shop {
    font-family: 'Patrick Hand';
    font-size: 18px;
  }
  .checkout-link {
    background-color: #39a88b;
    border: none;
    border-radius: 10px;
    padding: 0.7em;
  }
  .checkout-link a {
    color: #f0f6f2;
    text-decoration: none;
  }
  @media only screen and (max-width: 768px) {
    .cart-items {
      height: 60vh;
      overflow-y: auto;
    }
  }
  @media only screen and (min-width: 1200px) {
    .card.product-card {
      width: 80%;
    }
  }
</style>
