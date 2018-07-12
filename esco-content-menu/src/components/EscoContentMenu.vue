<template>
  <div class="esco-content-menu" :class="isSmall ? 'small' : ''">
    <header :style="(backgroundImg != null && !isSmall) ? 'background-image: linear-gradient(0deg, rgba(0,0,0,.2),rgba(0,0,0,.2)), url(' + backgroundImg + ');' : ''">
      <div>
        <header-buttons :call-on-close="close"></header-buttons>
        <div class="wrapper">
          <content-user v-bind:org-infos="currentOrg" v-bind:user-infos="userInfos" v-bind:other-orgs="orgsInfos" :is-small="isSmall"></content-user>
          <content-favorites :portlets="portlets" :favorites="favorites" :call-after-action="actionToggleFav" :is-small="isSmall"></content-favorites>
        </div>
      </div>
    </header>
    <content-grid :portlets="portlets" :favorites="favorites" :call-after-action="actionToggleFav" :is-small="isSmall"></content-grid>
  </div>
</template>

<script>
import ContentFavorites from "./ContentFavorites"
import ContentGrid from "./ContentGrid"
import ContentUser from "./ContentUser"
import HeaderButtons from "./HeaderButtons"
import oidc from "@uportal/open-id-connect"

const checkStatus = function(response) {
  //console.log("check response ", response);
  if (response.ok) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = function(response) {
  //console.log("Parse response for json ", response);
  return response.json();
};
/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
export default {
  name: "EscoContentMenu",
  components: {
    ContentFavorites,
    ContentGrid,
    ContentUser,
    HeaderButtons
  },
  data() {
    return {
      backgroundImg: null,
      currentOrg: {},
      favorites: [],
      isSmall: false,
      orgsInfos: [],
      portlets: [],
      userInfos: {}
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.isXs);
      this.isXs();
      this.fetchPortlets();
      this.fetchFavorites();
      this.fetchUserInfos();
    });
  },
  methods: {
    close(event) {
      console.log("Call close window");
    },
    getWindowWidth: function() {
      return this.$el.clientWidth;
    },
    isXs: function() {
      this.isSmall = this.getWindowWidth() < 768;
    },
    computeCurrentOrg: function() {
      if (this.orgsInfos && this.userInfos && this.userInfos.ESCOSIRENCourant && this.orgsInfos.length > 0 ) {
        this.currentOrg = this.orgsInfos.find(entry => (entry.id === this.userInfos.ESCOSIRENCourant[0]));
      } else if (this.orgsInfos) {
        this.currentOrg = this.orgsInfos[0];
      }
      if (this.currentOrg && this.currentOrg.otherAttributes && this.currentOrg.otherAttributes.ESCOStructureLogo
        && this.currentOrg.otherAttributes.ESCOStructureLogo.length > 0) {
        this.backgroundImg = process.env.VUE_APP_PORTAL_BASE_URL + this.currentOrg.otherAttributes.ESCOStructureLogo[0];
      }
    },
    fetchUserInfos() {
      if (process.env.NODE_ENV === "development") {
        let userInfos = require("../assets/userinfos");
        this.userInfos =  Object.assign({}, this.userInfos, userInfos);
        let orgsInfos = require("../assets/orginfos");
        for(let prop in orgsInfos) {
          this.orgsInfos.push(orgsInfos[prop]);
        }
        this.computeCurrentOrg();
      } else {
        oidc({userInfoApiUrl: process.env.VUE_APP_PORTAL_CONTEXT + process.env.VUE_APP_USER_INFOS_URI})
          .then(token => {
            this.userInfos = Object.assign({}, this.userInfos, token.decoded);
            if (token.decoded.ESCOSIREN) {
              const options = {
                method: "GET",
                credentials: "same-origin",
                headers: {
                  Authorization: "Bearer " + token.encoded,
                  "Content-Type": "application/json"
                }
              };
              fetch(
                process.env.VUE_APP_PORTAL_BASE_URL +
                process.env.VUE_APP_ORG_INFOS_URI + "?ids=" + token.decoded.ESCOSIREN,
                options
              )
                .then(checkStatus)
                .then(parseJSON)
                .then(data => {
                  for(let prop in data) {
                    this.orgsInfos.push(data[prop]);
                  }
                  this.computeCurrentOrg();
                });
            }
          })
          .catch(function(err) {
            console.error(err);
          });
      }
    },
    fetchPortlets() {
      if (process.env.NODE_ENV === "development") {
        let data = require("../assets/browseable.json");
        this.portlets.push(...data.portlets);
      } else {
        oidc({userInfoApiUrl: process.env.VUE_APP_PORTAL_CONTEXT + process.env.VUE_APP_USER_INFOS_URI})
          .then(token => {
            const options = {
              method: "GET",
              credentials: "same-origin",
              headers: {
                Authorization: "Bearer " + token.encoded,
                "Content-Type": "application/json"
              }
            };
            fetch(
              process.env.VUE_APP_PORTAL_BASE_URL +
                process.env.VUE_APP_PORTAL_CONTEXT +
                process.env.VUE_APP_BROWSABLE_PORTLETS_URI,
              options
            )
              .then(checkStatus)
              .then(parseJSON)
              .then(data => {
                this.portlets.push(...data.portlets);
              });
          })

          .catch(function(err) {
            console.error(err);
          });
      }
    },
    fetchFavorites() {
      if (process.env.NODE_ENV === "development") {
        this.favorites.push(
          "pbookmarks",
          "snooper",
          "google-translate-portlet"
        );
      } else {
        oidc({userInfoApiUrl: process.env.VUE_APP_PORTAL_CONTEXT + process.env.VUE_APP_USER_INFOS_URI})
          .then(token => {
            const options = {
              method: "GET",
              credentials: "same-origin",
              headers: {
                Authorization: "Bearer " + token.encoded,
                "Content-Type": "application/json"
              }
            };
            fetch(
              process.env.VUE_APP_PORTAL_BASE_URL +
                process.env.VUE_APP_PORTAL_CONTEXT +
                process.env.VUE_APP_FAVORITES_URI,
              options
            )
              .then(checkStatus)
              .then(parseJSON)
              .then(data => {
                if (
                  data &&
                  data.authenticated &&
                  data.layout &&
                  data.layout.globals &&
                  data.layout.globals.hasFavorites
                ) {
                  if (data.layout.favorites) {
                    this.computeFavoritesContent(data.layout.favorites);
                  }
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
          let content = elem.content;
          if (content === undefined || !content) {
            let fname = elem.fname;
            if (fname !== undefined && fname) {
              this.favorites.push(fname);
            }
          } else {
            this.computeFavoritesContent(content);
          }
        }
      }
    },
    actionToggleFav: function(isAddFavorite, fname) {
      if (isAddFavorite) {
        this.favorites.push(fname);
      } else {
        this.favorites = this.favorites.filter(value => (value !== fname));
      }
    }
  },
  computed: {

  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.esco-content-menu {
  * {
    font-family: Roboto, sans-serif;
  }
  min-width: 280px;
  min-height: 100vh;
  background-color: #D0D0D0;

  > section {
    padding: 0.5em 1.5em;
  }
  header {
    background-image: linear-gradient(rgba(0,0,0,.2),rgba(208,208,208,.2)), url('../assets/default_banner.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    > div {
      -webkit-backdrop-filter: blur(7px);
      backdrop-filter: blur(7px);

      > .wrapper {
        display: flex;
        flex-flow: row nowrap;

        .content-favorites {
          flex-grow: 1;
          filter: none;
          overflow: hidden;
        }
      }
    }
  }
  &.small {
    background-color: #545454;
    header {
      background-image: none;
      > div {
        -webkit-backdrop-filter: initial;
        backdrop-filter: none;
        
        position: relative;

        .header-buttons {
          position: absolute;
          width: 100%;
        }
        > .wrapper {
          flex-flow: row wrap;
        }
      }
    }
  }
}
</style>
