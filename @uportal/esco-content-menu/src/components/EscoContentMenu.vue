<template>
  <div class="esco-content-menu" :style="'background-color:' + backgroundColor">
    <div class="wrapper":style="'background-image: linear-gradient(0deg, rgba(0,0,0,.2),rgba(0,0,0,.2)), url(' + backgroundImg + ');'">
      <div></div>
      <content-favorites :portlets="portlets" :favorites="favorites" :call-after-action="actionToggleFav" :is-small="isSmall"></content-favorites>
    </div>
    <content-grid :portlets="portlets" :favorites="favorites" :call-after-action="actionToggleFav" :is-small="isSmall"></content-grid>
  </div>
</template>

<script>
import ContentFavorites from "./ContentFavorites";
import ContentGrid from "./ContentGrid.vue";
import oidc from "@uportal/open-id-connect";

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

export default {
  name: "EscoContentMenu",
  props: {
    backgroundColor: { type: String, default: "#f3f3f3" }
  },
  components: {
    ContentFavorites,
    ContentGrid
  },
  data() {
    return {
      favorites: [],
      portlets: [],
      backgroundImg:
        "https://lycees.netocentre.fr//annuaire_images/logos/77534903800072/logoportail1.jpg?1",
      isSmall: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.isXs);
      this.isXs();
      this.fetchPortlets();
      this.fetchFavorites();
    });
  },
  created() {},
  methods: {
    getWindowWidth: function() {
      console.log("window size ", this.$el.clientWidth);
      return this.$el.clientWidth;
    },
    isXs: function() {
      this.isSmall = this.getWindowWidth() < 620;
    },
    fetchPortlets() {
      if (process.env.NODE_ENV === "development") {
        let data = require("@gip-recia/content-grid/src/assets/browseable.json");
        this.portlets.push(...data.portlets);
      } else {
        oidc()
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
                //console.log("===>portlets", this.portlets);
              });
          })

          .catch(function(err) {
            console.log(err);
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
        //this.favorites.push("calendar", "login", "snappy");
        //this.favorites.push("emergency-alert-administration-launcher");
      } else {
        oidc()
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
            console.log(err);
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
        this.favorites = this.favorites.filter(value => value != fname);
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.esco-content-menu {
  * {
    font-family: Roboto, sans-serif;
  }
  min-width: 250px;

  > section {
    padding: 0.5em 1.5em;
  }
  > .wrapper {
    display: flex;
    flex-flow: row wrap;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    background-color: rgba(255, 255, 255, 0.5);

    > div {
      width: 30%;
    }
    .content-favorites {
      flex-grow: 1;
      filter: none;
      overflow: hidden;
    }
  }
}
</style>
