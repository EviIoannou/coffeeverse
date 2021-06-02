<template>
  <b-container class="mb-3" fluid style="width: 90vw">
    <h1 class="h2">Drinks</h1>
    <h2 class="h4 mb-4">{{ $store.state.drinks.length }} results</h2>
    <b-container fluid class="display-cards">
      <b-row>
        <b-col
          class="mt-4"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="drink in $store.state.drinks"
          :key="drink.id"
        >
          <b-card class="h-100 product-card">
            <b-card-text class="ratings"
              ><b-icon-star-fill class="mr-2" />{{ drink.rating }}/5 ({{
                drink.votes
              }})</b-card-text
            >
            <b-card-img
              class="product-image"
              img-alt="product-image"
              :src="drink.image"
            ></b-card-img>

            <div class="mt-2 info">
              <b-card-title class="product-name">
                {{ drink.name }}
              </b-card-title>
              <b-card-sub-title class="shop">
                {{ drink.shop }}
              </b-card-sub-title>
            </div>

            <div class="mt-3 price">
              <p v-b-tooltip.hover.html.bottom :title="extraInfo(drink)">
                <b-icon-info-circle scale="1.2"></b-icon-info-circle>
              </p>
              <b-card-text>{{ drink.price }} kr</b-card-text>
              <p>
                <b-button
                  @click="addToCart(drink.id)"
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
        functions.addToCart(id, 'drinks')
      },
      extraInfo(product) {
        return functions.extraInfo(product)
      }
    }
  }
</script>

<style scoped>
  @import '../styles/productDisplay.css';
</style>
