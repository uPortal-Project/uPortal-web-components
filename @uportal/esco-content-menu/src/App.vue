<template>
  <div id="app">
    <content-menu
      default-org-logo="https://lycees.netocentre.fr/annuaire_images/default_banner_v1.jpg"
      api-url-org-info="/p/test"
      favorites-portlet-card-size="small"
      grid-portlet-card-size="auto"
      hide-action-mode="never" />
      <!--<hamburger-menu-->
      <!--default-org-logo="https://lycees.netocentre.fr/annuaire_images/default_banner_v1.jpg" />-->
      <!-- <content-grid/> -->
      <!--background-color="grey"-->
      <!--portlet-card-size="medium" />-->
  </div>
</template>

<script>
import ContentMenu from './components/ContentMenu.vue';
// import ContentGrid from './components/ContentGrid.vue';
// import HamburgerMenu from './components/HamburgerMenu';

export default {
  name: 'App',
  components: {
    ContentMenu,
    // ContentGrid,
    // HamburgerMenu,
  },
};
</script>

<style lang="scss">
#app {
  background-color: #000;
  height: 1800px;

  .hamburger-menu > div.content-menu-toggle {
    height: 35px;
  }
}
</style>
