<template>
  <WaffleMenu
    debug="true"
    button-color="#cdcdcd"
    menu-background-color="#99aa99"
    url="portletRegistry.json"
  />
</template>

<script>
// Import the component
import WaffleMenu from './components/WaffleMenu';

export default {
  name: 'App',
  components: {
    'waffle-menu': WaffleMenu,
  },
};
</script>
