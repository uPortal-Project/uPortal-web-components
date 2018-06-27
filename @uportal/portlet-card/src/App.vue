<template>
  <div id="app">
    <portlet-card :portlet-desc="portlet" :is-favorite="true" icon-background-color="#dddddd"></portlet-card>
  </div>
</template>

<script>
import PortletCard from "./components/PortletCard.vue";

export default {
  name: "app",
  components: {
    PortletCard
  },
  data() {
    return {
      portlet: {
        fname: "test",
        title: "Un titre de test",
        description:
          "Une description plutôt longue pour faire fonctionner le clamp.js et voir ce qu'il se passe",
        id: "10",
        canAdd: true,
        layoutObject: {
          iconUrl: null
        }
      }
    };
  }
};
</script>

<style>
#app {
  margin: 50px;
}
</style>
