<template>
  <div :class="cssClass" @click="toggleFavorite(fname, $event)"
       :title="isFavorite ? translate('message.favorites.remove') : translate('message.favorites.add')">
    <button class="md-icon-button"><i v-if="isFavorite" class="material-icons">star</i><i v-else class="material-icons">star_border</i></button>
  </div>
</template>

<script>
  import oidc from "@uportal/open-id-connect";
  import i18n from "../i18n.js";


  const checkStatus = function(response) {
    console.log("check response ", response);
    if (response.ok) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  };

  const parseJSON = function(response) {
    console.log("Parse response for json ", response);
    return response.json();
  };

  export default {
    name: "ActionFavorites",
    props: {
      fname: { type: String, required: true },
      isFavorite: { type: Boolean, required: true },
      cssClass: { type: String, default: 'action-favorites' }
    },
    methods: {
      translate: function(text, lang) {
        return i18n.t(text, lang);
      },
      toggleFavorite: function(fname, event) {
        event.preventDefault();
        if (this.isFavorite) {
          this.removeFromFavorite(fname);
        } else {
          this.addToFavorite(fname);
        }
        return false;
      },
      addToFavorite: function(fname) {
        console.log("Adding to favorites " + fname);
        oidc({ timeout: 180000 })
          .then(token => {
          const options = {
            method: "POST",
            credentials: "same-origin",
            headers: {
              Authorization: "Bearer " + token.encoded,
              "Content-Type": "application/json"
            }
          };
        fetch(
          //process.env.VUE_APP_PORTAL_BASE_URL +
          //process.env.VUE_APP_PORTAL_CONTEXT +
          //process.env.VUE_APP_FAVORITE_ADD_URI +
          "/api/layout?action=addFavorite&channelId=" + fname,
          fname,
          options
        )
          .then(checkStatus)
        //.then(parseJSON)
      })
      .catch(err => console.log("Error, with message:", err.statusText));
      },
      removeFromFavorite: function(fname) {
        console.log("Removing to favorites " + fname);
        oidc({ timeout: 180000 })
          .then(token => {
          const options = {
            method: "POST",
            credentials: "same-origin",
            headers: {
              Authorization: "Bearer " + token.encoded,
              "Content-Type": "application/json"
            }
          };
        fetch(
          //process.env.VUE_APP_PORTAL_BASE_URL +
          //process.env.VUE_APP_PORTAL_CONTEXT +
          //process.env.VUE_APP_FAVORITE_RM_URI +
          "/api/layout?action=removeFavorite&channelId=" + fname,
          options
        )
          .then(checkStatus)
        //.then(parseJSON)
      })
      .catch(err => console.log("Error, with message:", err.statusText));
      }
    }
  }
</script>

<style lang="scss" scoped>
  .action-favorites {
    .md-icon-button {
      padding: 0;
      /*padding: 0 6px 0 6px;*/
      /*margin: 6px 8px 6px 8px;*/
      /*border-radius: 3px;*/
      text-align: center;
      text-transform: uppercase;
      text-decoration:none;
      border: none;
      outline: none;
      background-color: transparent;
      box-shadow: none;
      cursor: pointer;
    }
    .material-icons {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      width: 44px;
      height: 44px;
      color: #b7b7b7;
    }

    .md-icon-button:hover {
      transform: scale(1.2,1.2);
    }
  }
</style>
