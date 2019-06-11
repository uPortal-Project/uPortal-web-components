<template>
  <div class="p-4">
    <div class="p-4">
      <DashboardCarousel
        debug
        slick-options="{&quot;arrows&quot;: false}"
        layout-api-url="layout.json"
      />
    </div>
    <div class="p-4">
      <DashboardContentGrid
        debug
        layout-api-url="layout.json"
      />
    </div>
  </div>
</template>

<script>
import DashboardCarousel from './components/Carousel.vue';
import DashboardContentGrid from './components/ContentGrid.vue';

export default {
  name: 'App',
  components: {
    DashboardCarousel,
    DashboardContentGrid,
  },
};
</script>

<style lang="scss">
:root {
  --dash-carousel-btn-bg-color: #007bff;
  --dash-carousel-btn-fg-color: #fff;
  --dash-carousel-btn-bg-active-color: #fff;
  --dash-carousel-btn-fg-active-color: #000;
  --dash-carousel-btn-bg-hover-color: rgba(255, 255, 255, 0.5);
  --dash-carousel-btn-fg-hover-color: #000;
}

body {
  background-color: cadetblue;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
