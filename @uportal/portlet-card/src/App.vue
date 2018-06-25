<template>
  <div id="app">
    <portlet-card fname="test" title="Un titre de test" description="Une description plutôt longue pour faire fonctionner le clamp.js et voir ce qu'il se passe"
                  :is-favorite="true" chan-id="10" can-favorites="true" icon-background-color="#0088bf" icon-url="favicon.ico"></portlet-card>
  </div>
</template>

<script>
import PortletCard from "./components/PortletCard.vue";

export default {
  name: "app",
  components: {
    PortletCard
  }
};
</script>

<style>
#app {
  margin: 50px;
}
</style>
