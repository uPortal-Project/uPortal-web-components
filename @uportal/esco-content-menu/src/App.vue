<template>
  <div id="app">
    <!--<content-menu default-org-logo="https://lycees.netocentre.fr/annuaire_images/default_banner_v1.jpg" api-url-org-info="/p/test"></content-menu>-->
    <hamburger-menu default-org-logo="https://lycees.netocentre.fr/annuaire_images/default_banner_v1.jpg"></hamburger-menu>
  </div>
</template>

<script>
// import ContentMenu from "./components/ContentMenu.vue"
import HamburgerMenu from './components/HamburgerMenu';

export default {
  name: 'app',
  components: {
    // ContentMenu
    HamburgerMenu,
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
