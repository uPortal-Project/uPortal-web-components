<template>
  <div
    :class="['toggler-menu', size, visible ? 'active-menu' : '']"
    :style="'min-height: ' + minHeight"
    class="content-menu">
    <header>
      <header-buttons
        :call-on-close="close"
        :sign-out-url="signOutUrl" />
      <div class="wrapper">
        <content-user
          :org-info="info.userOrganization"
          :user-info="info.user"
          :other-orgs="info.organizations"
          :size="size"
          :default-org-logo="defaultOrgLogo"
          :user-info-portlet-url="userInfoPortletUrl"
          :api-url-org-info="apiUrlOrgInfo" />
        <content-favorites
          :portlets="_portlets"
          :favorites="info.favorites"
          :call-after-action="actionToggleFav"
          :size="size"
          :favorite-api-url="favoriteApiUrl"
          :is-hidden="isHidden"
          :user-info-api-url="userInfoApiUrl" />
      </div>
      <div
        :style="(backgroundImg != null && (size === 'large' || size === 'medium')) ? 'background-image: linear-gradient(0deg, rgba(0,0,0,.2),rgba(0,0,0,.2)), url(' + backgroundImg + ');' : ''"
        class="background" />
    </header>
    <content-grid
      :portlets="_portlets"
      :favorites="info.favorites"
      :call-after-action="actionToggleFav"
      :size="gridContentSize"
      :favorite-api-url="favoriteApiUrl"
      :user-info-api-url="userInfoApiUrl" />
  </div>
</template>

<script>
import ContentFavorites from './ContentFavorites';
import ContentGrid from './ContentGrid';
import ContentUser from './ContentUser';
import HeaderButtons from './HeaderButtons';
import oidc from '@uportal/open-id-connect';
import fetchPortlets from '../services/fetchPortlets';

const checkStatus = function(response) {
  // console.log("check response ", response);
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = function(response) {
  // console.log("Parse response for json ", response);
  return response.json();
};

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
    apiUrlOrgInfo: {type: String, default: ''},
  },
  data() {
    return {
      backgroundImg: this.defaultOrgLogo,
      favoriteApiUrl:
        this.contextApiUrl + process.env.VUE_APP_FAVORITES_PORTLETS_URI,
      userInfoApiUrl: this.contextApiUrl + process.env.VUE_APP_USER_INFO_URI,
      size: 'medium',
      gridContentSize: 'medium',
      visible: !this.isHidden,
      minHeight: '100vh',
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
    _portlets: function() {
      return this.portletsAPI;
    },
  },
  watch: {
    isHidden: {
      handler: function() {
        this.visible = !this.isHidden;
        if (this.visible) {
          this.minHeight = document.body.getBoundingClientRect().height + 'px';
          this.isXs();
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.isXs);
      this.fetchPortlets();
      this.fetchFavorites();
      this.fetchUserInfo();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  },
  methods: {
    close(event) {
      this.visible = false;
      const element = document.querySelector('#' + this.id);
      element.parentNode.style.display = 'none';
      element.setAttribute('is-hidden', true);
      this.isHidden = false;
      this.callOnClose(event);
    },
    getWindowWidth: function() {
      return this.$el.clientWidth;
    },
    isXs: function() {
      const _size = this.getWindowWidth();
      if (_size < 480) {
        this.size = 'smaller';
        this.gridContentSize = 'smaller';
      } else if (_size < 768) {
        this.size = 'small';
        this.gridContentSize = 'small';
      } else if (_size < 1680) {
        this.size = 'medium';
        this.gridContentSize = 'medium';
      } else {
        this.size = 'large';
        this.gridContentSize = 'large';
      }
    },
    computeCurrentOrg: function() {
      if (
        this.info.user &&
        this.info.user.ESCOSIRENCourant &&
        this.info.organizations?.length > 0
      ) {
        this.info.userOrganization = Object.assign(
            {},
            this.info.userOrganization,
            this.info.organizations.find(
                (entry) => entry.id === this.info.user.ESCOSIRENCourant[0]
            )
        );
      } else if (this.info.organizations) {
        this.info.userOrganization = Object.assign(
            {},
            this.info.userOrganization,
            this.info.organizations[0]
        );
      }
      if (
        this.info.userOrganization?.otherAttributes?.ESCOStructureLogo?.length >
        0
      ) {
        this.backgroundImg =
          process.env.VUE_APP_PORTAL_BASE_URL +
          this.info.userOrganization.otherAttributes.ESCOStructureLogo[0];
      }
    },
    async fetchUserInfo() {
      if (process.env.NODE_ENV === 'development') {
        const userInfoRequest = await fetch('userinfo.json');
        const userInfo = await userInfoRequest.json();
        this.info.user = {...this.info.user, ...userInfo};
        const orgsInfoRequest = await fetch('orginfo.json');
        const orgsInfo = await orgsInfoRequest.json();
        setTimeout(() => {
          this.info.organizations = Object.values(orgsInfo);
          this.computeCurrentOrg();
        }, 2000);
      } else {
        try {
          const {encoded, decoded} = await oidc({
            userInfoApiUrl:
              this.contextApiUrl + process.env.VUE_APP_USER_INFO_URI,
          });
          this.info.user = Object.assign({}, this.info.user, decoded);
          if (decoded.ESCOSIREN) {
            const options = {
              method: 'GET',
              credentials: 'same-origin',
              headers: {
                'Authorization': 'Bearer ' + encoded,
                'Content-Type': 'application/json',
              },
            };
            const data = await fetch(
                process.env.VUE_APP_PORTAL_BASE_URL +
                process.env.VUE_APP_ORG_INFO_URI +
                '?ids=' +
                decoded.ESCOSIREN,
                options
            )
                .then(checkStatus)
                .then(parseJSON);
            this.info.organizations = Object.values(data);
            this.computeCurrentOrg();
          }
        } catch (err) {
          console.error(err);
        }
      }
    },
    fetchPortlets,
    fetchFavorites() {
      if (process.env.NODE_ENV === 'development') {
        this.info.favorites = [
          'search',
          'CourrielAcademique',
          'portal-activity',
          'calendar',
          'Helpinfo',
          'MILycees',
        ];
      } else {
        oidc({
          userInfoApiUrl:
            this.contextApiUrl + process.env.VUE_APP_USER_INFO_URI,
        })
            .then((token) => {
              const options = {
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                  'Authorization': 'Bearer ' + token.encoded,
                  'Content-Type': 'application/json',
                },
              };
              fetch(
                  this.contextApiUrl + process.env.VUE_APP_FAVORITES_URI,
                  options
              )
                  .then(checkStatus)
                  .then(parseJSON)
                  .then((data) => {
                    if (
                  data?.authenticated &&
                  data?.layout?.globals?.hasFavorites &&
                  data?.layout?.favorites
                    ) {
                      this.info.favorites = [];
                      this.computeFavoritesContent(data.layout.favorites);
                    }
                  });
            })
            .catch(function(err) {
              console.error(err);
            });
      }
    },
    computeFavoritesContent(elem) {
      if (elem !== undefined) {
        if (Array.isArray(elem)) {
          for (const folder of elem) {
            this.computeFavoritesContent(folder);
          }
        } else {
          const content = elem.content;
          if (content === undefined || !content) {
            const fname = elem.fname;
            if (fname !== undefined && fname) {
              this.info.favorites.push(fname);
            }
          } else {
            this.computeFavoritesContent(content);
          }
        }
      }
    },
    actionToggleFav: function(isAddFavorite, fname) {
      if (isAddFavorite) {
        this.info.favorites.push(fname);
      } else {
        this.info.favorites = this.info.favorites.filter(
            (value) => value !== fname
        );
      }
    },
    sortPortlets: function(a, b) {
      return a.title
          .trim()
          .toLowerCase()
          .localeCompare(b.title.trim().toLowerCase(), undefined, {
            numberic: true,
          });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content-menu {
  min-width: 280px;
  background-color: #d0d0d0;

  &.toggler-menu {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    top: 0;
    left: 0;
    z-index: 1001;
    visibility: hidden;
    opacity: 0;
    transition: opacity 600ms, visibility 600ms;
    animation: fade 600ms;
  }

  &.active-menu {
    visibility: visible;
    opacity: 1;
  }

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
