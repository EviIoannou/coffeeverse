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
        :key="product.cartID"
      >
        <b-card class="product-card" no-body>
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img
                :src="product.image"
                alt="Image"
                class="ml-2 mt-4 product-image rounded-0"
              ></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body>
                <b-card-title class="product-name text-capitalize">{{
                  product.name
                }}</b-card-title>
                <b-card-sub-title class="shop text-capitalize">{{
                  product.shop
                }}</b-card-sub-title>
                <div class="info mt-3">
                  <b-card-text class="mr-4"
                    >{{ product.amount }} items</b-card-text
                  >
                  <b-card-text
                    >{{ product.amount * product.price }} kr</b-card-text
                  >
                </div>

                <b-button variant="outline-danger"
                  ><b-icon-trash></b-icon-trash> Disard</b-button
                >
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row align-h="center" class="my-4">
      <p class="h4">Total: {{ totalPrice }} kr</p></b-row
    >
  </b-container>
</template>

<script>
  export default {
    computed: {
      addedInCart() {
        let products = this.$store.state.cart.map((p) => p)
        let productsAdded = []
        products.forEach((p) => {
          //loop through all products in the cart
          if (p.category == 'drinks') {
            //if category is 'drinks', go to the drinks array
            let product = this.$store.state.drinks.find((d) => d.id == p.id) //find the product
            productsAdded.push(
              // push in the local array, plus assign two more necessary properties
              Object.assign(product, { amount: p.amount, cartId: p.cartId })
            )
          } else {
            //if category is 'snacks', go to the snacks array
            productsAdded.push(
              this.$store.state.snacks.find((s) => s.id == p.id)
            )
          }
        })
        return productsAdded
      },

      totalPrice() {
        let productPrices = this.addedInCart
          .map((p) => p.price * p.amount)
          .reduce((a, b) => a + b)

        return productPrices
      }
    }
  }
</script>

<style scoped>
  .cart-items {
    height: 70vh;
    overflow-y: auto;
  }
  .card.product-card {
    border: none;
    width: 80%;
  }
  h4,
  h6,
  p {
    color: rgba(13, 37, 34, 0.8) !important;
  }

  .info {
    display: flex;
  }

  .product-name {
    font-size: 20px;
  }

  .shop {
    font-family: 'Patrick Hand';
    font-size: 18px;
  }

  @media only screen and (max-width: 768px) {
    .cart-items {
      height: 60vh;
      overflow-y: auto;
    }
  }
  @media only screen and (min-width: 768px) {
    .product-image {
      width: 10vw;
    }
  }
</style>
