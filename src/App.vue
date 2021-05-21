<template>
  <div id="app">
    <b-navbar toggleable="md">
      <b-navbar-brand href="#">
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
        <b-nav-item class="mr-2 ml-3" href="#">Cart</b-nav-item>
      </b-navbar-nav>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-md-auto m-0">
          <b-nav-item class="mr-3" href="#" active>Home</b-nav-item>
          <b-nav-item class="mr-3" href="#">Drinks</b-nav-item>
          <b-nav-item class="mr-3" href="#">Snacks</b-nav-item>
          <b-nav-item class="mr-3" href="#">Order status</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <!-- Show the cart nav-item HERE when screen is larger than 768px -->
      <b-navbar-nav class="d-none d-md-block">
        <b-nav-item class="mr-3" href="#">Cart</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
  * {
    font-family: 'Montserrat', sans-serif;
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
  p {
    font-size: 14px;
  }

  @media only screen and (max-width: 768px) {
    .navbar-light .navbar-nav .active {
      border: none;
      font-weight: bold;
    }
  }
</style>
