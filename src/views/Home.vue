<template>
  <div class="home">
    <hero-image />
    <order-section />
  </div>
</template>

<script>
// @ is an alias to /src
import HeroImage from '../components/Home/HeroImage.vue';
import OrderSection from '../components/Home/OrderSection.vue';


export default {
  name: "Home",
  components: {
    HeroImage,
    OrderSection,
  },
};
</script>

