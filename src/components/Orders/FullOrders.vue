<template>
  <b-container>
    <b-row class="top mb-5">
      <b-col class="d-flex flex-column align-items-center">
        <b-img
          class="illustration"
          src="https://firebasestorage.googleapis.com/v0/b/coffeeverse-by-evi.appspot.com/o/Website%20images%2Fdelivery%20man.png?alt=media&token=4ee1a665-60ce-4929-8947-0cd1b134e9b0"
          alt="delivery-person"
        >
        </b-img>
        <h2 class="h4">{{ orders.length }} ongoing orders</h2>
      </b-col>
    </b-row>
    <b-row
      align-h="center"
      class="mb-5"
      v-for="order in orders"
      :key="order.orderId"
    >
      <b-col class="d-flex flex-column align-items-center receipt" cols="6">
        <div>
          <h2 class="h5 mb-3">
            Delivered in <b-icon-clock></b-icon-clock> {{ order.countdown }}
          </h2>
          <p class="order-id">
            Order <span class="ml-3">#{{ order.orderId }}</span>
          </p>
          <div class="receipt-details">
            <p
              v-b-toggle="`details-${order.orderId}`"
              class="d-flex justify-content-between p-2 mb-0"
              role="button"
            >
              Receipt <span class="when-closed"><b-icon-chevron-down /> </span
              ><span class="when-opened"><b-icon-chevron-up /> </span>
            </p>
            <b-collapse
              :id="`details-${order.orderId}`"
              class="details p-3 m-0"
            >
              <div
                class="d-flex justify-content-between price"
                v-for="product in order.items"
                :key="product.id"
              >
                <p>{{ product.amount }}x {{ product.name }}</p>
                <p>{{ product.amount * product.price }} kr</p>
              </div>

              <p>Total: {{ totalPrice(order) }} kr</p>
            </b-collapse>
          </div>
        </div></b-col
      ></b-row
    >
    <b-row>
      <b-col class="my-2 text-center">
        <router-link to="/" class="homeLink"
          >Need something more ? Place a new order</router-link
        >
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    computed: {
      orders() {
        let allOrders = this.$store.state.orders
        allOrders.forEach((order) => {
          order.items.forEach((i) => {
            let product = this.$store.state[i.type].find(
              //find the product
              (p) => p.id == i.id
            )
            Object.assign(i, product)
          })
        })
        return allOrders
      }
    },

    methods: {
      totalPrice(order) {
        let productPrices = order.items
          .map((p) => p.price * p.amount)
          .reduce((a, b) => a + b)

        return productPrices
      }
    }
  }
</script>

<style scoped>
  a.homeLink {
    color: #39a88b;
  }
  h2.h5 {
    color: #0d2522;
  }
  .illustration {
    height: 150px;
  }
  .receipt-details {
    width: 300px;
  }
  .receipt-details > p {
    background-color: #87c6b2;
    color: #17433e;
  }

  .receipt-details .details {
    background-color: #f0f6f2;
    color: #0d2522;
  }

  .receipt .order-id {
    color: #0d2522;
  }
  .collapsed > .when-opened,
  :not(.collapsed) > .when-closed {
    display: none;
  }
</style>
