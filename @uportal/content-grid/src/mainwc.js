import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import contentGrid from "./components/ContentGrid.vue";

const CustomElement = wrap(Vue, contentGrid);

window.customElements.define("content-grid", CustomElement);
