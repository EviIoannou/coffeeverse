<template>
  <b-container fluid class="mt-5">
    <h1 class="h2">The Coffeeverse experience</h1>
    <b-row align-h="around">
      <b-col xs="12" md="3" class="m-2 mt-0 m-md-0 values-col">
        <b-img
          alt="drinks-variety"
          class="values-img"
          fluid
          src="https://firebasestorage.googleapis.com/v0/b/coffeeverse-by-evi.appspot.com/o/Website%20images%2Fcoffee-variety.png?alt=media&token=c2e68591-a6fd-40ef-9a5c-e9607d0bfbb1"
        ></b-img>
        <h2 class="h3 values-title">Large variety</h2>
        <div class="values-content mt-2">
          <p>
            Enjoy your favourite drink or choose a delicious snack to go with
            your coffee from a variety of coffee shops around Gothenburg.
          </p>
        </div>
      </b-col>
      <b-col xs="12" md="3" class="m-2 mt-0 m-md-0 values-col">
        <b-img
          alt="payment"
          class="values-img"
          fluid
          src="https://firebasestorage.googleapis.com/v0/b/coffeeverse-by-evi.appspot.com/o/Website%20images%2Fclip-online-food-delivery.png?alt=media&token=d1521c03-5b54-49b9-8b6d-a9633a3f6b09"
        ></b-img>
        <h2 class="h3 values-title">Easy and safe payment</h2>
        <div class="values-content mt-2">
          <p>
            Pay with credit card or Swish quickly, easy and most importantly
            safe. Focus on enjoying your fika and let us take care of a secure
            payment.
          </p>
        </div>
      </b-col>
      <b-col xs="12" md="3" class="m-2 mt-0 m-md-0 values-col">
        <b-img
          alt="delivery-car"
          class="values-img"
          fluid
          src="https://firebasestorage.googleapis.com/v0/b/coffeeverse-by-evi.appspot.com/o/Website%20images%2Ffood-delivery.png?alt=media&token=4cab32f2-64b4-4eca-b496-18aeada8b047"
        ></b-img>
        <h2 class="h3 values-title">Quick delivery</h2>
        <div class="values-content mt-2">
          <p>
            Our delivery team ensures that your coffee and snack are at your
            door as soon as possible, exactly how warm or cold they should be!
          </p>
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

  .values-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .values-content {
    color: #242424;
  }

  .values-img {
    height: 120px;
  }

  .values-title {
    font-family: 'Patrick Hand';
    text-align: center;
    color: #17433e;
  }
</style>
