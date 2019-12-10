<template>
  <section class="content-menu-header-buttons">
    <button
      :title="translate('message.buttons.menuClose')"
      type="button"
      class="content-menu-close"
      aria-label="Close"
      @click="callOnClose($event)"
    >
      <font-awesome-icon icon="times" />
    </button>
    <a
      :href="signOutUrl"
      :title="translate('message.buttons.logout')"
      class="signout"
    >
      <font-awesome-icon icon="sign-out-alt" />
    </a>
  </section>
</template>

<script>
import i18n from '../i18n.js';
import '../icons.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'HeaderButtons',
  components: {
    FontAwesomeIcon
  },
  props: {
    callOnClose: { type: Function, default: () => {} },
    signOutUrl: { type: String, default: process.env.VUE_APP_LOGOUT_URL }
  },
  methods: {
    translate(text, lang) {
      return i18n.t(text, lang);
    }
  }
};
</script>

<style lang="scss" scoped>
.content-menu-header-buttons {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  > * {
    margin-top: 1em;
  }

  > :first-child {
    margin-left: 1em;
  }

  > :last-child {
    margin-right: 1em;
  }

  > button > svg,
  > a > svg {
    width: 32px;
    height: 32px;
    color: white;
  }

  button {
    text-decoration: none;
    border: none;
    outline: none;
    background-color: transparent;
    box-shadow: none;
    cursor: pointer;
  }
}
</style>
