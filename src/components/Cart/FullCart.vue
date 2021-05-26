<template>
  <b-container>
    <b-row>
      <b-col v-for="product in addedInCart" :key="product.cartID">{{
        product.name
      }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    computed: {
      addedInCart() {
        let products = this.$store.state.cart.map((p) => p)
        let productsAdded = []
        products.forEach((p) => {
          if (p.category == 'drinks') {
            let product = this.$store.state.drinks.find((d) => d.id == p.id)
            productsAdded.push(
              Object.assign(product, { amount: p.amount, cartId: p.cartId })
            )
          } else {
            productsAdded.push(
              this.$store.state.snacks.find((s) => s.id == p.id)
            )
          }
        })
        return productsAdded
      }
    },
    mounted() {
      console.log(this.$store.state.cart)
      console.log(this.addedInCart)
    }
  }
</script>

<style scoped></style>
