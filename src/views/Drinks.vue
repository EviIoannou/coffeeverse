<template>
  <b-container fluid style="width: 90vw">
    <h1 class="h2">Drinks</h1>
    <h2 class="h4">{{ $store.state.drinks.length }} results</h2>
    <b-container fluid id="drinks-cards">
      <b-row>
        <b-col
          class="mb-3"
          cols="12"
          sm="6"
          md="3"
          v-for="drink in $store.state.drinks"
          :key="drink.id"
        >
          <b-card class="text-center h-100">
            <b-card-text class="ratings"
              ><b-icon-star-fill class="mr-2" />{{ drink.rating }}/5 ({{
                drink.votes
              }})</b-card-text
            >
            <b-card-img img-alt="product-image" :src="drink.image"></b-card-img>
            <b-card-title class="product-name">
              {{ drink.name }}
            </b-card-title>
            <b-card-sub-title class="shop">
              {{ drink.shop }}
            </b-card-sub-title>
            <div class="mt-3 price">
              <b-card-text>{{ drink.price }} kr</b-card-text>
              <p class="h3">
                <b-icon-plus-circle-fill
                  ><b-button href="#"
                /></b-icon-plus-circle-fill>
              </p>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <!-- <p v-for="drink in $store.state.drinks" :key="drink.id">{{ drink.name }}</p> -->
  </b-container>
</template>

<script>
  export default {}
</script>

<style scoped>
  .b-icon.bi {
    color: #276f65;
  }

  h1.h2,
  h2.h4 {
    color: #17433e;
  }

  .price {
    color: #0d2522;
    display: flex;
    align-items: baseline;
    justify-content: space-evenly;
  }
  .product-name {
    font-size: 20px;
    text-transform: capitalize;
  }

  .ratings {
    color: #0d2522;
  }

  .shop {
    color: rgba(13, 37, 34, 0.8) !important;
    font-family: 'Patrick Hand';
    font-size: 18px;
    text-transform: capitalize;
  }
</style>
