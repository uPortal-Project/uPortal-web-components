import Vue from "vue";
import ContentCarousel from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(ContentCarousel)
}).$mount("#app");
