<template>
    <section class="content-menu-header-buttons">
        <button type="button" class="content-menu-close" aria-label="Close" :title="translate('message.buttons.menuClose')" @click="callOnClose($event)"><icon :name="'times'"></icon></button>
        <a class="signout" :href="signOutUrl" :title="translate('message.buttons.logout')"><icon :name="'sign-out-alt'"></icon></a>
    </section>
</template>


<script>
import i18n from "../i18n.js";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/sign-out-alt";
import "vue-awesome/icons/times";

export default {
  name: "HeaderButtons",
  props: {
    callOnClose: Function,
    signOutUrl: { type: String, default: process.env.VUE_APP_LOGOUT_URL }
  },
  components: {
    Icon
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
