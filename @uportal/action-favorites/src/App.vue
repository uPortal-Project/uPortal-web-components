<template>
  <div id="app">
    <action-favorites fname="test" chan-id="1" :is-favorite="true"></action-favorites>
  </div>
</template>

<script>
import ActionFavorites from "./components/ActionFavorites";

export default {
  name: "app",
  components: {
    ActionFavorites
  }
};
</script>
