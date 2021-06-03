<template>
  <b-container>
    <b-row>
      <b-col class="content"
        ><b-img class="illustration" :src="img"></b-img>
        <p class="h4">{{ message }}</p>
        <router-link to="/" class="homeLink">{{ linkText }}</router-link></b-col
      >
    </b-row>
  </b-container>
</template>
<script>
  export default {
    props: ['img', 'message', 'linkText']
  }
</script>
<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .homeLink {
    color: #39a88b;
  }
  .illustration {
    height: 70vh;
  }
</style>
