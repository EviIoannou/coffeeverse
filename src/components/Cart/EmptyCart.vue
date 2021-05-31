<template>
  <b-container>
    <b-row>
      <b-col class="content"
        ><b-img
          class="illustration"
          src="https://firebasestorage.googleapis.com/v0/b/coffeeverse-by-evi.appspot.com/o/Website%20images%2Fshopping%20cart.png?alt=media&token=4c3f5075-fa0f-48a3-b72a-bd31a7fa4b67"
        ></b-img>
        <p class="h4">Your cart is empty</p>
        <router-link to="/" class="homeLink">Start shopping</router-link></b-col
      >
    </b-row>
  </b-container>
</template>

<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .homeLink {
    color: #39a88b;
  }
  .illustration {
    height: 70vh;
  }
</style>
