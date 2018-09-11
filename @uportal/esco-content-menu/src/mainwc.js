import Vue from "vue";
import wrap from "@vue/web-component-wrapper";
import escoContentMenu from "./components/EscoContentMenu.vue";
import contentGrid from "./components/ContentGrid.vue";
import portletCard from "./components/PortletCard.vue";
import actionFavorites from "./components/ActionFavorites.vue";
import contentFavorites from "./components/ContentFavorites.vue";

const contentMenu = wrap(Vue, escoContentMenu);
window.customElements.define("esco-content-menu", contentMenu);

const grid = wrap(Vue, contentGrid);
window.customElements.define("content-grid", grid);

const card = wrap(Vue, portletCard);
window.customElements.define("portlet-card", card);

const fav = wrap(Vue, actionFavorites);
window.customElements.define("action-favorites", fav);

const contFav = wrap(Vue, contentFavorites);
window.customElements.define("content-favorites", contFav);
