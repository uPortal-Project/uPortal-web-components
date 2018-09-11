import Vue from "vue";
import ContentGrid from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h => h(ContentGrid)
});
