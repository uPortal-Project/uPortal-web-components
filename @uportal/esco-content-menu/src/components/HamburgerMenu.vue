<template>
  <div class="hamburger-menu">
    <div
      class="content-menu-toggle"
      aria-label="Menu"
      role="button"
      title="Menu"
      aria-expanded="false"
      aria-haspopup="true"
      aria-controls="content-menu"
      @click="toggleMenu($event)" >
      <slot name="menu-icon">
        <div class="menu-wrapper">
          <div class="hm-line"/>
          <div class="hm-line"/>
          <div class="hm-line"/>
        </div>
      </slot>
    </div>

    <slot name="menu-content">
      <content-menu
        v-if="append"
        :switch-org-portlet-url="switchOrgPortletUrl"
        :call-on-close="toggleMenu"
        :context-api-url="contextApiUrl"
        :favorite-api-url="favoriteApiUrl"
        :layout-api-url="layoutApiUrl"
        :organization-api-url="organizationApiUrl"
        :portlet-api-url="portletApiUrl"
        :user-info-api-url="userInfoApiUrl"
        :debug="debug"
        :default-org-logo="defaultOrgLogo"
        :favorites-portlet-card-size="favoritesPortletCardSize"
        :grid-portlet-card-size="gridPortletCardSize"
        :hide-action-mode="hideActionMode"
        :is-hidden="!visible"
        :user-info-portlet-url="userInfoPortletUrl"
        :sign-out-url="signOutUrl"
        :user-org-id-attribute-name="userOrgIdAttributeName"
        :user-all-orgs-id-attribute-name="userAllOrgsIdAttributeName"
        :org-logo-url-attribute-name="orgLogoUrlAttributeName"
        default-class="toggler-menu"
        visible-class="active-menu" />
    </slot>
  </div>
</template>

<script>
import ContentMenu from './ContentMenu';
import {sizeValidator} from '../services/sizeTools';

export default {
  name: 'HamburgerMenu',
  components: {
    ContentMenu,
  },
  props: {
    contextApiUrl: {
      type: String,
      default: process.env.VUE_APP_PORTAL_CONTEXT,
    },
    favoriteApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT +
        process.env.VUE_APP_FAVORITES_PORTLETS_URI,
    },
    layoutApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT + process.env.VUE_APP_FAVORITES_URI,
    },
    organizationApiUrl: {
      type: String,
      default: null,
    },
    portletApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT +
        process.env.VUE_APP_BROWSABLE_PORTLETS_URI,
    },
    userInfoApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT + process.env.VUE_APP_USER_INFO_URI,
    },
    debug: {type: Boolean, default: false},
    signOutUrl: {type: String, default: process.env.VUE_APP_LOGOUT_URL},
    defaultOrgLogo: {type: String, required: true},
    userInfoPortletUrl: {type: String, default: ''},
    switchOrgPortletUrl: {type: String, default: ''},
    favoritesPortletCardSize: {
      validator: (value) => sizeValidator(value, true),
      default: 'auto',
    },
    gridPortletCardSize: {
      validator: (value) => sizeValidator(value, true),
      default: 'auto',
    },
    hideActionMode: {
      validator: (value) => ['auto', 'always', 'never'].includes(value),
      default: 'auto',
    },
    userOrgIdAttributeName: {type: String, default: 'ESCOSIRENCourant[0]'},
    userAllOrgsIdAttributeName: {type: String, default: 'ESCOSIREN'},
    orgLogoUrlAttributeName: {
      type: String,
      default: 'otherAttributes.ESCOStructureLogo[0]',
    },
  },
  data() {
    return {
      visible: false,
      append: false,
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.append = true;
    });
  },
  methods: {
    toggleMenu(event) {
      event.preventDefault();
      this.visible = !this.visible;
      const html = document.querySelector('html');
      if (html) {
        html.style.overflowY = this.visible ? 'hidden' : 'auto';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hamburger-menu {
  > .content-menu-toggle {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    padding: 5px 0;

    &:hover > .menu-wrapper > .hm-line {
      opacity: 0.7;
    }

    > .menu-wrapper {
      margin: 0 10px;

      > .hm-line {
        height: 2px;
        background-color: #fff;
        margin: 5px 0;
        width: 25px;
      }
    }
  }

  .toggler-menu {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow-y: scroll;
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
