<template>
  <div id="app">
    <action-favorites fname="test" :is-favorite="false"></action-favorites>
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
