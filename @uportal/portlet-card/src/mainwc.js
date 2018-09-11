import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import portletCard from "./components/PortletCard.vue";

const CustomElement = wrap(Vue, portletCard);

window.customElements.define("portlet-card", CustomElement);
