<template>
  <div class="home">
    <hero-image />
    <order-section />
    <company-values />
    <!-- <menu-links /> -->
  </div>
</template>

<script>
  import CompanyValues from '../components/Home/CompanyValues.vue'
  import HeroImage from '../components/Home/HeroImage.vue'
  // import MenuLinks from '../components/Home/MenuLinks.vue'
  import OrderSection from '../components/Home/OrderSection.vue'

  export default {
    name: 'Home',
    components: {
      CompanyValues,
      HeroImage,
      // MenuLinks,
      OrderSection
    }
  }
</script>
