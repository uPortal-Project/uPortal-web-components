<template>
  <div id="app">
    <!--<content-menu />-->
    <hamburger-menu></hamburger-menu>
  </div>
</template>

<script>
//import ContentMenu from "./components/ContentMenu.vue"
import HamburgerMenu from "./components/HamburgerMenu"

export default {
  name: "app",
  components: {
    //ContentMenu
    HamburgerMenu
  }
}
</script>

<style lang="scss">
#app {
  background-color: #000;
  min-height: 100vw;
  .hamburger-menu > div.content-menu-toggle {
    height: 35px;
  }
}
</style>
