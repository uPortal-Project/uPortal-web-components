<template>
  <WaffleMenu
    debug="true"
    button-color="#cdcdcd"
    menu-background-color="#99aa99"
    url="portletRegistry.json"
  >
    <div slot="header">
      Header goes here
    </div>
    <div slot="footer">
      <a href="">Footer goes here</a>
    </div>
  </WaffleMenu>
</template>

<script>
// Import the component
import WaffleMenu from './components/WaffleMenu.vue';

export default {
  name: 'App',
  components: {
    WaffleMenu
  }
};
</script>
