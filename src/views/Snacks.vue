<template>
  <b-container class="mb-3" fluid style="width: 90vw">
    <h1 class="h2">Snacks</h1>
    <h2 class="h4 mb-4">{{ $store.state.snacks.length }} results</h2>
    <b-container fluid id="snacks-cards">
      <b-row>
        <b-col
          class="mt-4"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="snack in $store.state.snacks"
          :key="snack.id"
        >
          <b-card class="h-100 product-card">
            <b-card-text class="ratings"
              ><b-icon-star-fill class="mr-2" />{{ snack.rating }}/5 ({{
                snack.votes
              }})</b-card-text
            >
            <b-card-img
              class="product-image"
              img-alt="product-image"
              :src="snack.image"
            ></b-card-img>

            <div class="mt-2 info">
              <b-card-title class="product-name">
                {{ snack.name }}
              </b-card-title>
              <b-card-sub-title class="shop">
                {{ snack.shop }}
              </b-card-sub-title>
            </div>

            <div class="mt-3 price">
              <b-card-text>{{ snack.price }} kr</b-card-text>
              <p>
                <b-button
                  @click="addToCart(snack.id)"
                  style="background-color: transparent; border: none"
                >
                  <b-icon-plus-circle-fill
                    scale="1.5"
                  ></b-icon-plus-circle-fill>
                </b-button>
              </p>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
  import functions from '../../server/functions'
  export default {
    methods: {
      addToCart(id) {
        functions.addToCart(id, 'snacks')
      }
    }
  }
</script>

<style scoped>
  .b-icon.bi {
    color: #276f65;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .card.product-card {
    border: 1px solid rgba(39, 111, 101, 0.5);
    filter: drop-shadow(0px 2px 2px rgba(39, 111, 101, 0.46));
    border-radius: 5px;
    width: 80%;
  }

  #snacks-cards {
    height: 70vh;
    overflow-y: auto;
  }

  h1.h2,
  h2.h4 {
    color: #17433e;
  }

  .info {
    text-align: center;
  }
  .price {
    color: #0d2522;
    display: flex;
    align-items: baseline;
    justify-content: space-evenly;
    width: 100%;
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

  @media only screen and (min-width: 768px) {
    .product-image {
      width: 10vw;
    }
  }
</style>
