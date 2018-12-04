<template>
  <div
    :class="['toggler-menu', _screenSize, !_isHidden ? 'active-menu' : '']"
    class="content-menu">
    <header>
      <header-buttons
        :call-on-close="close"
        :sign-out-url="signOutUrl" />
      <div class="wrapper">
        <content-user
          :org-info="_userOrganization"
          :user-info="_user"
          :other-orgs="_organizations"
          :parent-screen-size="_screenSize"
          :default-org-logo="defaultOrgLogo"
          :user-info-portlet-url="userInfoPortletUrl"
          :switch-org-portlet-url="switchOrgPortletUrl"
          :org-logo-url-attribute-name="orgLogoUrlAttributeName" />
        <content-favorites
          :portlets="_portlets"
          :favorites="_favorites"
          :call-after-action="actionToggleFav"
          :parent-screen-size="_screenSize"
          :portlet-card-size="favoritesPortletCardSize"
          :hide-action="hideAction"
          :favorite-api-url="favoriteApiUrl"
          :is-hidden="_isHidden"
          :user-info-api-url="userInfoApiUrl" />
      </div>
      <div
        :style="(backgroundImg != null && (_screenSize === 'large' || _screenSize === 'medium')) ? 'background-image: linear-gradient(0deg, rgba(0,0,0,.2),rgba(0,0,0,.2)), url(' + backgroundImg + ');' : ''"
        class="background" />
    </header>
    <content-grid
      :portlets="_portlets"
      :favorites="_favorites"
      :call-after-action="actionToggleFav"
      :parent-screen-size="_screenSize"
      :portlet-card-size="gridPortletCardSize"
      :hide-action="hideAction"
      :favorite-api-url="favoriteApiUrl"
      :user-info-api-url="userInfoApiUrl" />
  </div>
</template>

<script>
import ContentFavorites from './ContentFavorites';
import ContentGrid from './ContentGrid';
import ContentUser from './ContentUser';
import HeaderButtons from './HeaderButtons';
import fetchUserInfoAndOrg from '../services/fetchUserInfoAndOrgs';
import fetchPortlets from '../services/fetchPortlets';
import fetchFavorites from '../services/fetchFavorites';
import flattenFavorites from '../services/flattenFavorites';
import byPortlet from '../services/sortByPortlet';
import toggleArray from '../services/toggleArray';
import {
  elementWidth,
  breakPointName,
  sizeValidator,
} from '../services/sizeTools';
import {
  getCurrentOrganization,
  getOrganizationLogo,
} from '../services/organizationHelper';
import computeUrl from '../services/computeUrl';

export default {
  name: 'ContentMenu',
  components: {
    ContentFavorites,
    ContentGrid,
    ContentUser,
    HeaderButtons,
  },
  props: {
    id: {type: String, default: null},
    callOnClose: {type: Function, default: () => {}},
    isHidden: {type: Boolean, default: false},
    contextApiUrl: {
      type: String,
      default: process.env.VUE_APP_PORTAL_CONTEXT,
    },
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
    userOrgIdAttributeName: {type: String, default: 'ESCOSIRENCourant'},
    userAllOrgsIdAttributeName: {type: String, default: 'ESCOSIREN'},
    orgLogoUrlAttributeName: {type: String, default: 'ESCOStructureLogo'},
  },
  data() {
    return {
      backgroundImg: this.defaultOrgLogo,
      favoriteApiUrl:
        this.contextApiUrl + process.env.VUE_APP_FAVORITES_PORTLETS_URI,
      userInfoApiUrl: this.contextApiUrl + process.env.VUE_APP_USER_INFO_URI,
      screenSize: 'medium',
      hideAction: false,
      info: {
        favorites: [],
        organizations: [],
        user: {},
        userOrganization: {},
      },
      portletsAPI: [],
    };
  },
  computed: {
    _portlets() {
      return this.portletsAPI;
    },
    _isHidden() {
      return this.isHidden;
    },
    _screenSize() {
      return this.screenSize;
    },
    _user() {
      return this.info.user;
    },
    _organizations() {
      return this.info.organizations;
    },
    _userOrganization() {
      if (
        Object.keys(this.info.userOrganization).length === 0 &&
        this.info.userOrganization.constructor === Object
      ) {
        this.computeCurrentOrg();
      }
      return this.info.userOrganization;
    },
    _favorites() {
      return this.info.favorites;
    },
  },
  watch: {
    isHidden: {
      handler() {
        if (!this.isHidden) {
          this.$nextTick(function() {
            this.calculateSize();
          });
        }
      },
    },
  },
  mounted() {
    this.fetchPortlets();
    this.fetchFavorites();
    this.fetchUserInfo();
    this.$nextTick(function() {
      window.addEventListener('resize', this.calculateSize);
      this.calculateSize();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateSize);
  },
  methods: {
    close(event) {
      const element = document.querySelector('#' + this.id);
      if (element?.parentNode) {
        element.parentNode.style.display = 'none';
        element.setAttribute('is-hidden', true);
      }
      this.callOnClose(event);
    },
    calculateSize() {
      this.screenSize = breakPointName(elementWidth(this.$el));

      switch (this.hideActionMode) {
        case 'auto':
          this.hideAction =
            this.screenSize === 'small' || this.screenSize === 'smaller';
          break;
        case 'never':
          this.hideAction = false;
          break;
        default:
          // case of 'always' hidden
          this.hideAction = true;
      }
    },
    computeCurrentOrg() {
      const currentOrganization = getCurrentOrganization(
          this.info.user,
          this.userOrgIdAttributeName,
          this.info.organizations
      );
      if (currentOrganization !== null) {
        this.info.userOrganization = Object.assign(
            {},
            this.info.userOrganization,
            currentOrganization
        );
        const logo =
          getOrganizationLogo(
              currentOrganization,
              this.orgLogoUrlAttributeName
          ) || this.defaultOrgLogo;
        this.backgroundImg = computeUrl(logo);
      }
    },
    async fetchUserInfo() {
      const {user, organizations} = await fetchUserInfoAndOrg(
          this.contextApiUrl,
          this.userAllOrgsIdAttributeName
      );
      this.info.user = Object.assign({}, this.info.user, user);
      this.info.organizations = organizations;
    },
    async fetchPortlets() {
      const portlets = await fetchPortlets(this.contextApiUrl);
      this.portletsAPI = portlets.sort(byPortlet);
    },
    async fetchFavorites() {
      const favoritesTree = await fetchFavorites(this.contextApiUrl);
      this.info.favorites = flattenFavorites(favoritesTree);
    },
    actionToggleFav(fname) {
      this.info.favorites = toggleArray(this.info.favorites, fname);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content-menu {
  min-width: 280px;
  background-color: #d0d0d0;

  /* same value as @zindex-navbar-fixed from bootstrap. */
  z-index: 1030;

  * {
    font-family: Roboto, sans-serif;
  }

  > section {
    padding: 0.5em 1.5em;
  }

  header {
    position: relative;
    overflow: hidden;

    > :not(:last-child) {
      position: relative;
      z-index: 1;
    }

    > .wrapper {
      display: flex;
      flex-flow: row nowrap;

      .content-favorites {
        flex-grow: 1;
        filter: none;
        overflow: hidden;
      }
    }

    div.background {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      width: 110%;
      height: 110%;
      overflow: hidden;
      top: 0;
      z-index: 0;
      filter: blur(7px);
    }
  }

  &.small,
  &.smaller {
    background-color: #545454;

    > section {
      padding: 0.5em;
    }

    header {
      div.background {
        background-image: none;
      }

      .header-buttons {
        position: absolute;
        width: 100%;
        z-index: 2;
      }

      > .wrapper {
        flex-flow: row wrap;
      }
    }
  }
}
</style>
