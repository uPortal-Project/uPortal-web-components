<template>
  <div class="hamburger-menu">
    <div class="content-menu-toggle" @click="toggleMenu($event)"
       aria-label="Menu" role="button" title="Menu" data-toggle="content-menu" aria-expanded="false" aria-haspopup="true" aria-controls="content-menu">
      <div class="menu-wrapper"><div></div><div></div><div></div></div>
    </div>

    <content-menu default-class="toggler-menu" visible-class="active-menu" :is-hidden="!visible" :default-org-logo="defaultOrgLogo"
                  :user-info-portlet-url="userInfoPortletUrl"></content-menu>

  </div>
</template>

<script>
import ContentMenu from "./ContentMenu";

/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
export default {
  name: "HamburgerMenu",
  props: {
    contextApiUrl: {
      type: String,
      default: process.env.VUE_APP_PORTAL_CONTEXT
    },
    signOutUrl: { type: String, default: process.env.VUE_APP_LOGOUT_URL },
    defaultOrgLogo: { type: String, required: true },
    userInfoPortletUrl: { type: String, default: "" }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    toggleMenu(event) {
      event.preventDefault();
      this.visible = !this.visible;
    }
  },
  components: {
    ContentMenu
  }
};
</script>

<style lang="scss" scoped>
.hamburger-menu {
  > .content-menu-toggle {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;

    > .menu-wrapper {
      width: 25px;
      padding: 0 4px;
      > div {
        height: 2px;
        background-color: #ffffff;
        margin: 5px 0;
      }
    }
  }

  position: relative;

  .toggler-menu {
    position: absolute;
    width: 100%;
    min-heigth: 100vh;
    top: 0;
    left: 0;
    visibility: hidden;
    opacity: 0;
    transition: opacity 600ms, visibility 600ms;
    animation: fade 600ms;
  }
  .active-menu {
    visibility: visible;
    opacity: 1;
  }
}
</style>
