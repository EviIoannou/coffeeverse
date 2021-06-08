<template>
  <div class="home">
    <hero-image />
    <company-values />
    <menu-links />
  </div>
</template>

<script>
  import CompanyValues from '../components/Home/CompanyValues.vue'
  import HeroImage from '../components/Home/HeroImage.vue'
  import MenuLinks from '../components/Home/MenuLinks.vue'

  export default {
    name: 'Home',
    components: {
      CompanyValues,
      HeroImage,
      MenuLinks
    }
  }
</script>
