<template>
  <b-container>
    <b-row class="top mb-3">
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
    <b-row v-for="order in orders" :key="order.orderId">
      <b-col>
        <div>
          <p>
            Delivered in <b-icon-clock></b-icon-clock> {{ order.countdown }}
          </p>
          <p>Order # {{ order.orderId }}</p>
          <div>
            <p v-b-toggle="`details-${order.orderId}`">Receipt</p>
            <b-collapse :id="`details-${order.orderId}`">
              <p v-for="product in order.products" :key="product.id">
                {{ product.amount }}x {{ product.name }}
                {{ product.amount * product.price }} kr
              </p>
              <p>Total: {{ totalPrice(order) }}</p>
            </b-collapse>
          </div>
        </div></b-col
      ></b-row
    >
  </b-container>
</template>

<script>
  export default {
    computed: {
      orders() {
        let allOrders = this.$store.state.orders
        allOrders.forEach((order) => {
          order.products = []
          order.items.forEach((i) => {
            if (i.category == 'drinks') {
              //if category is 'drinks', go to the drinks array
              let product = this.$store.state.drinks.find((d) => d.id == i.id) //find the product
              order.products.push(
                // push in the local array, plus assign two more necessary properties
                Object.assign(product, { amount: i.amount })
              )
            }
          })
        })
        return allOrders
      }
    },
    mounted() {
      console.log(this.$store.state.orders)
    },
    methods: {
      totalPrice(order) {
        let productPrices = order.products
          .map((p) => p.price * p.amount)
          .reduce((a, b) => a + b)

        return productPrices
      }
    }
  }
</script>

<style scoped>
  h2.h4 {
    color: #0d2522;
  }
  .illustration {
    height: 150px;
  }
</style>
