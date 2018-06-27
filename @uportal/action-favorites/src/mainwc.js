import Vue from 'vue'
import wrap from '@vue/web-component-wrapper';
import actionFavorites from "./components/ActionFavorites"

const CustomElement = wrap(Vue, actionFavorites);

window.customElements.define('action-favorites', CustomElement);

