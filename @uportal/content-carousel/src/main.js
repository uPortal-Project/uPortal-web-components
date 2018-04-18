import Vue from "vue";
import ContentCarousel from "./content-carousel.vue";
import wrap from "@vue/web-component-wrapper";

Vue.config.productionTip = false;

window.customElements.define("content-carousel", wrap(Vue, ContentCarousel));
