import Vue from "vue";
import lineClamp from "vue-line-clamp";
import ContentGrid from "./App.vue";
import VueI18n from "vue-i18n";
import i18n from "./i18n.js";

Vue.use(lineClamp, {
  // plugin options
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  i18n,
  render: h => h(ContentGrid)
});
