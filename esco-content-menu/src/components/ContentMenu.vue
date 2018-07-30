<template>
  <div class="content-menu" :class="['toggler-menu', isSmall ? 'small ' : '', visible ? 'active-menu' : '']">
    <header>
      <header-buttons :call-on-close="close" :sign-out-url="signOutUrl"></header-buttons>
      <div class="wrapper">
        <content-user :org-infos="currentOrg" :user-infos="userInfos" :other-orgs="orgsInfos" :is-small="isSmall"></content-user>
        <content-favorites :portlets="portlets" :favorites="favorites" :call-after-action="actionToggleFav" :is-small="isSmall"
                           :favorites-api-url="favoriteApiUrl" :is-hidden="isHidden"></content-favorites>
      </div>
      <div class="background" :style="(backgroundImg != null && !isSmall) ? 'background-image: linear-gradient(0deg, rgba(0,0,0,.2),rgba(0,0,0,.2)), url(' + backgroundImg + ');' : ''"></div>
    </header>
    <content-grid :portlets="portlets" :favorites="favorites" :call-after-action="actionToggleFav" :is-small="isSmall" :favorites-api-url="favoriteApiUrl"></content-grid>
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
    name: "ContentMenu",
    components: {
      ContentFavorites,
      ContentGrid,
      ContentUser,
      HeaderButtons
    },
    props: {
      id: String,
      callOnClose: Function,
      isHidden: {type: Boolean, default: false },
      contextApiUrl: {type: String, default: process.env.VUE_APP_PORTAL_CONTEXT},
      signOutUrl: { type: String, default: process.env.VUE_APP_LOGOUT_URL }
    },
    data() {
      return {
        backgroundImg: null,
        currentOrg: {},
        favorites: [],
        favoriteApiUrl: this.contextApiUrl + process.env.VUE_APP_FAVORITES_PORTLETS_URI,
        isSmall: false,
        orgsInfos: [],
        portlets: [],
        userInfos: {},
        visible: !this.isHidden
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
        this.visible = false;
        var element = document.querySelector('#' + this.id);
        element.setAttribute('is-hidden', true);
        //this.isHidden = false;
        if (typeof this.callOnClose === "function") {
          this.callOnClose(event);
        }
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
          oidc({userInfoApiUrl: this.contextApiUrl + process.env.VUE_APP_USER_INFOS_URI})
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
          oidc({userInfoApiUrl: this.contextApiUrl + process.env.VUE_APP_USER_INFOS_URI})
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
                this.contextApiUrl +
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
          oidc({userInfoApiUrl: this.contextApiUrl + process.env.VUE_APP_USER_INFOS_URI})
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
                this.contextApiUrl +
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
    watch: {
      isHidden: {
        handler: function () {
          this.visible = !this.isHidden;
        },
        deep: true
      }
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.getWindowWidth);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .content-menu {
    min-width: 280px;
    min-height: 100vh;
    background-color: #D0D0D0;

    &.toggler-menu {
      position:absolute;
      width: 100%;
      min-heigth: 100vh;
      top:0;
      left:0;
      z-index:1001;
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
        background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(208, 208, 208, 0.2)), url("../assets/default_banner.jpg");
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
    &.small {
      background-color: #545454;

      header {
        /*-webkit-backdrop-filter: initial;*/
        /*backdrop-filter: none;*/
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
