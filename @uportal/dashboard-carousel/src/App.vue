<template>
  <div id="app">
    <DashboardCarousel debug />
  </div>
</template>

<script>
import DashboardCarousel from './components/DashboardCarousel.vue';

export default {
  name: 'App',
  components: {
    DashboardCarousel,
  },
};
</script>

<style lang="scss">
body {
  background-color: cadetblue;
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
