<template>
  <div id="app">
    <b-navbar toggleable="md">
      <b-navbar-brand to="/">
        <b-img
          class="logo"
          src="https://firebasestorage.googleapis.com/v0/b/coffeeverse-by-evi.appspot.com/o/Website%20images%2FCoffeeVerseLogo.png?alt=media&token=f43f1ff9-b409-4a4a-b9af-ef2eb184ba1b"
          alt="coffeeverse-logo"
        >
        </b-img>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" class="ml-auto"></b-navbar-toggle>
      <!-- Show the cart nav-item HERE when screen is smaller than 768px -->
      <b-navbar-nav class="d-md-none">
        <b-nav-item class="mr-2 ml-3" to="/cart"
          ><b-icon-cart-fill></b-icon-cart-fill>
          <span class="amount">{{
            $store.getters.itemsInCart()
          }}</span></b-nav-item
        >
      </b-navbar-nav>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-md-auto m-0">
          <b-nav-item
            class="mr-3"
            to="/"
            :class="{ active: $route.name === 'Home' }"
            >Home</b-nav-item
          >
          <b-nav-item
            class="mr-3"
            to="/drinks"
            :class="{ active: $route.name === 'Drinks' }"
            >Drinks</b-nav-item
          >
          <b-nav-item
            class="mr-3"
            to="/snacks"
            :class="{ active: $route.name === 'Snacks' }"
            >Snacks</b-nav-item
          >
          <b-nav-item
            class="mr-3"
            to="/orders"
            :class="{ active: $route.name === 'Order Status' }"
            >Order status</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
      <!-- Show the cart nav-item HERE when screen is larger than 768px -->
      <b-navbar-nav class="d-none d-md-block">
        <b-nav-item class="mr-3" to="/cart"
          ><b-icon-cart-fill></b-icon-cart-fill>
          <span class="amount">{{ $store.getters.itemsInCart() }}</span>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>
<script>
  import functions from '../server/functions'

  export default {
    mounted() {
      functions.fetchDrinks()
      functions.fetchSnacks()
    }
  }
</script>
<style lang="scss">
  @import './styles/custom.scss';
</style>

<style>
  * {
    font-family: 'Montserrat', sans-serif;
  }
  .amount {
    background-color: #f0f6f2;
    border-radius: 50%;
    color: #276f65;
    font-size: 14px;
    padding: 0.2em 0.6em;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #17433e;
  }

  .navbar-light .navbar-nav .active {
    color: #17433e !important;
    border-bottom: solid 1px #276f65;
  }
  .logo {
    height: 40px;
  }
  /* Scrollbar styling */
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #276f65;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #17433e;
  }
  /* *** */
  @media only screen and (max-width: 768px) {
    .navbar-light .navbar-nav .active {
      border: none;
      font-weight: bold;
    }
  }
</style>
