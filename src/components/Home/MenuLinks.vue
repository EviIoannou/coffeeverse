<template>
  <b-container fluid id="order" class="mt-5 mb-3">
    <h1 class="h2">Discover our menu</h1>
    <b-row align-h="around">
      <b-col xs="12" md="3" class="m-2 mt-0 m-md-0 menu-col">
        <b-img
          class="menu-img"
          fluid
          src="https://firebasestorage.googleapis.com/v0/b/coffeeverse-by-evi.appspot.com/o/Website%20images%2Ficons8-coffee-to-go-80.png?alt=media&token=0a4ff4b3-fcea-4931-bc63-8bf5fcd0648c"
        ></b-img>
        <div class="menu-content ml-2">
          <h2 class="h3 menu-title">Drinks</h2>
          <p>Coffee or tea? You can find anything in our drinks selection</p>
          <b-button class="menu-link"
            ><b-link to="/drinks">Go to drinks</b-link>
          </b-button>
        </div>
      </b-col>
      <b-col xs="12" md="3" class="m-2 mt-4 m-md-0 menu-col">
        <b-img
          class="menu-img"
          fluid
          src="https://firebasestorage.googleapis.com/v0/b/coffeeverse-by-evi.appspot.com/o/Website%20images%2Ficons8-sandwich-80.png?alt=media&token=d9c4a9ef-1043-4c38-a0e8-1e8ad24439f2"
        ></b-img>
        <div class="menu-content ml-2">
          <h2 class="h3 menu-title">Snacks</h2>
          <p>
            No fika is complete with a snack! Salty or sweet, vegan or lactose
            free, we got you
          </p>
          <b-button class="menu-link"
            ><b-link to="/snacks">Go to snacks</b-link></b-button
          >
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {}
</script>

<style scoped>
  h1.h2 {
    color: #17433e;
    font-weight: normal;
    text-align: center;
  }

  .menu-col {
    display: flex;
    align-items: center;
  }

  .menu-content {
    color: #242424;
  }

  .menu-img {
    height: 80px;
  }

  .menu-link {
    background-color: #39a88b;
    border-color: #39a88b;
    color: #f0f6f2;
  }
  .menu-link a {
    color: #f0f6f2;
    text-decoration: none;
  }
  .menu-title {
    font-family: 'Patrick Hand';
    color: #17433e;
  }
</style>
