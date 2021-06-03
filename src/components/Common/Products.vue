<template>
  <b-container fluid class="display-cards">
    <b-row>
      <b-col
        class="mt-4"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="product in $store.state[products]"
        :key="product.id"
      >
        <b-card class="h-100 product-card">
          <b-card-text class="ratings"
            ><b-icon-star-fill class="mr-2" />{{ product.rating }}/5 ({{
              product.votes
            }})</b-card-text
          >
          <b-card-img
            class="product-image"
            img-alt="product-image"
            :src="product.image"
          ></b-card-img>

          <div class="mt-2 info">
            <b-card-title class="product-name">
              {{ product.name }}
            </b-card-title>
            <b-card-sub-title class="shop">
              {{ product.shop }}
            </b-card-sub-title>
          </div>

          <div class="mt-3 price">
            <p v-b-tooltip.hover.html.bottom :title="extraInfo(product)">
              <b-icon-info-circle scale="1.2"></b-icon-info-circle>
            </p>
            <b-card-text>{{ product.price }} kr</b-card-text>
            <p>
              <b-button
                @click="addToCart(product.id)"
                style="background-color: transparent; border: none"
              >
                <b-icon-plus-circle-fill scale="1.5"></b-icon-plus-circle-fill>
              </b-button>
            </p>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import functions from '../../../server/functions'
  export default {
    props: ['products'],
    methods: {
      addToCart(id) {
        functions.addToCart(id, this.products)
      },
      extraInfo(product) {
        return functions.extraInfo(product)
      }
    }
  }
</script>

<style scoped>
  @import '../../styles/productDisplay.css';
</style>
