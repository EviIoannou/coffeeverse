<template>
  <b-container>
    <p>Drinks section</p>
    <p v-for="drink in $store.state.drinks" :key="drink.id">{{ drink.name }}</p>
  </b-container>
</template>
