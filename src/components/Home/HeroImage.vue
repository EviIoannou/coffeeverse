<template>
  <div>
    <b-jumbotron
      fluid
      header="Coffeeverse"
      id="heroImage"
      lead="City's best fika right at your door"
    >
      <b-button href="#order">Order now</b-button>
    </b-jumbotron>
  </div>
</template>

<script></script>

<style scoped>
  #heroImage {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/coffeeverse-by-evi.appspot.com/o/Website%20images%2Fbackground-coffee.jpg?alt=media&token=a83259bc-9826-4d83-8027-931557ba3f1c');
    background-size: cover;
    background-position: 90% 60%;
    color: #0d2522;
    height: 500px;
  }

  #heroImage * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
  }
  #heroImage .btn {
    background-color: #276f65;
    border: none;
    font-size: 20px;
  }
  #heroImage .lead {
    font-size: 22px;
  }
</style>
