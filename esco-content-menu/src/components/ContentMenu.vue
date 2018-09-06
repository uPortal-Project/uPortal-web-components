<template>
  <div class="content-menu" :class="['toggler-menu', isSmall ? 'small ' : '', visible ? 'active-menu' : '']" :style="'min-height: ' + minHeight">
    <header>
      <header-buttons :call-on-close="close" :sign-out-url="signOutUrl"></header-buttons>
      <div class="wrapper">
        <content-user :org-infos="infos.userOrganization" :user-infos="infos.user" :other-orgs="infos.organizations" :is-small="isSmall" :default-org-logo="defaultOrgLogo"
                      :user-info-portlet-url="userInfoPortletUrl" :api-url-org-infos="apiUrlOrgInfos"></content-user>
        <content-favorites :portlets="infos.portlets" :favorites="infos.favorites" :call-after-action="actionToggleFav" :is-small="isSmall"
                           :favorite-api-url="favoriteApiUrl" :is-hidden="isHidden" :user-info-api-url="userInfoApiUrl"></content-favorites>
      </div>
      <div class="background" :style="(backgroundImg != null && !isSmall) ? 'background-image: linear-gradient(0deg, rgba(0,0,0,.2),rgba(0,0,0,.2)), url(' + backgroundImg + ');' : ''"></div>
    </header>
    <content-grid :portlets="infos.portlets" :favorites="infos.favorites" :call-after-action="actionToggleFav" :is-small="isSmall"
                  :favorite-api-url="favoriteApiUrl" :user-info-api-url="userInfoApiUrl" ></content-grid>
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
      signOutUrl: { type: String, default: process.env.VUE_APP_LOGOUT_URL },
      defaultOrgLogo: {type: String, required: true },
      userInfoPortletUrl: { type: String, default: "" },
      apiUrlOrgInfos: { type: String, default: ""}
    },
    data() {
      return {
        backgroundImg: this.defaultOrgLogo,
        favoriteApiUrl: this.contextApiUrl + process.env.VUE_APP_FAVORITES_PORTLETS_URI,
        userInfoApiUrl: this.contextApiUrl + process.env.VUE_APP_USER_INFOS_URI,
        isSmall: false,
        visible: !this.isHidden,
        minHeight: "100vh",
        infos: {portlets:[], favorites: [], organizations: [], user: {}, userOrganization: {}}
      };
    },
    mounted() {
      this.$nextTick(function() {
        window.addEventListener("resize", this.isXs);
        this.fetchPortlets();
        this.fetchFavorites();
        this.fetchUserInfos();
      });
    },
    methods: {
      close(event) {
        this.visible = false;
        var element = document.querySelector('#' + this.id);
        element.parentNode.style.display='none';
        element.setAttribute('is-hidden', true);
        //var element = document.querySelector('#');
        this.isHidden = false;
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
        if (this.infos.organizations && this.infos.user && this.infos.user.ESCOSIRENCourant && this.infos.organizations.length > 0 ) {
          this.infos.userOrganization = Object.assign({}, this.infos.userOrganization,
            this.infos.organizations.find(entry => (entry.id === this.infos.user.ESCOSIRENCourant[0])));
        } else if (this.infos.organizations) {
          this.infos.userOrganization = Object.assign({}, this.infos.userOrganization, this.infos.organizations[0]);
        }
        if (this.infos.userOrganization && this.infos.userOrganization.otherAttributes && this.infos.userOrganization.otherAttributes.ESCOStructureLogo
          && this.infos.userOrganization.otherAttributes.ESCOStructureLogo.length > 0) {
          this.backgroundImg = process.env.VUE_APP_PORTAL_BASE_URL + this.infos.userOrganization.otherAttributes.ESCOStructureLogo[0];
        }
      },
      fetchUserInfos() {
        if (process.env.NODE_ENV === "development") {
          let userInfos = require("../assets/userinfos");
          this.infos.user =  Object.assign({}, this.infos.user, userInfos);
          let orgsInfos = require("../assets/orginfos");
          setTimeout(()=> {
            this.emptyArray(this.infos.organizations);
            for(let prop in orgsInfos) {
              this.infos.organizations.push(orgsInfos[prop]);
            }
            this.computeCurrentOrg();
          }, 2000);
        } else {
          oidc({userInfoApiUrl: this.contextApiUrl + process.env.VUE_APP_USER_INFOS_URI})
            .then(token => {
              this.infos.user = Object.assign({}, this.infos.user, token.decoded);
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
                    this.emptyArray(this.infos.organizations);
                    for(let prop in data) {
                      this.infos.organizations.push(data[prop]);
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
          this.emptyArray(this.infos.portlets);
          setTimeout(()=> {
            this.infos.portlets.push(...data.portlets);
            this.infos.portlets.sort(this.sortPortlets);
          }, 1000);
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
                  this.emptyArray(this.infos.portlets);
                  this.infos.portlets.push(...data.portlets);
                  this.infos.portlets.sort(this.sortPortlets);
                });
            })

            .catch(function(err) {
              console.error(err);
            });
        }
      },
      fetchFavorites() {
        if (process.env.NODE_ENV === "development") {
          this.emptyArray(this.infos.favorites);
          this.infos.favorites.push(
            "search",
            "CourrielAcademique",
            "portal-activity",
            "calendar",
            "Helpinfo",
            "MILycees"
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
                      this.emptyArray(this.infos.favorites);
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
                this.infos.favorites.push(fname);
              }
            } else {
              this.computeFavoritesContent(content);
            }
          }
        }
      },
      actionToggleFav: function(isAddFavorite, fname) {
        if (isAddFavorite) {
          this.infos.favorites.push(fname);
        } else {
          this.infos.favorites = this.infos.favorites.filter(value => (value !== fname));
        }
      },
      sortPortlets: function(a, b) {
        return a.title.trim().toLowerCase().localeCompare(b.title.trim().toLowerCase(), undefined, {numberic: true});
      },
      emptyArray: function(array) {
        while(array.length > 0) {array.pop();}
      }
    },
    watch: {
      isHidden: {
        handler: function () {
          this.visible = !this.isHidden;
          if (this.visible) {
            this.minHeight=document.body.getBoundingClientRect().height + 'px';
            this.isXs();
          }
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
