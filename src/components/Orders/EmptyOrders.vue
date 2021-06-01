<template>
  <b-container>
    <b-row>
      <b-col class="content"
        ><b-img
          class="illustration"
          src="https://firebasestorage.googleapis.com/v0/b/coffeeverse-by-evi.appspot.com/o/Website%20images%2Fclip-shopping-online.png?alt=media&token=708262b5-23d6-4f51-bd6a-4bb45af37662"
        ></b-img>
        <p class="h4">You have no ongoing orders</p>
        <router-link to="/" class="homeLink"
          >Place a new order</router-link
        ></b-col
      >
    </b-row>
  </b-container>
</template>

<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a.homeLink {
    color: #39a88b;
  }
  .illustration {
    height: 70vh;
  }
  p.h4 {
    color: #0d2522;
  }
</style>
