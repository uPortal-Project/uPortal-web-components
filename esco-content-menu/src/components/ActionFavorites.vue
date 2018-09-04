<template>
  <div :class="'action-favorites ' + fname" @click="toggleFavorite($event)"
       :title="isFavorite ? translate('message.favorites.remove') : translate('message.favorites.add')">
    <button class="favorite-button"><icon :name="isFavorite ? 'star' : 'regular/star'" ></icon></button>
  </div>
</template>

<script>
import oidc from "@uportal/open-id-connect"
import i18n from "../i18n.js"
import Icon from "vue-awesome/components/Icon"
import "vue-awesome/icons/star"
import "vue-awesome/icons/regular/star"

const checkStatus = function(response) {
  if (response.ok) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = function(response) {
  return response.json();
};
/*eslint no-console: ["error", { allow: ["warn", "error"] }] */
export default {
  name: "ActionFavorites",
  props: {
    callOnToggleFav: Function,
    chanId: { type: String, required: true },
    favoriteApiUrl: { type: String, default: process.env.VUE_APP_PORTAL_CONTEXT + process.env.VUE_APP_FAVORITES_PORTLETS_URI },
    userInfoApiUrl: { type: String, default: process.env.VUE_APP_PORTAL_CONTEXT + process.env.VUE_APP_USER_INFOS_URI },
    fname: String,
    isFavorite: { type: Boolean, default: false }
  },
  components: {
    Icon,
  },
  data() {
    return {
      favorite: this.isFavorite
    };
  },
  methods: {
    translate: function(text, lang) {
      return i18n.t(text, lang);
    },
    toggleFavorite: function(event) {
      event.preventDefault();
      if (process.env.NODE_ENV !== "development") {
        if (this.favorite) {
          this.removeFromFavorite();
        } else {
          this.addToFavorite();
        }
      } else {
        this.changeFavoriteValue();
      }
      return false;
    },
    changeFavoriteValue: function() {
      this.favorite = !this.favorite;
      this.$emit("is-favorite", this.favorite);
      if (typeof this.callOnToggleFav === "function") {
        this.callOnToggleFav(this.favorite, this.fname);
      }
    },
    addToFavorite: function() {
      oidc({userInfoApiUrl: this.userInfoApiUrl})
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
          this.favoriteApiUrl + "?action=addFavorite&channelId=" + this.chanId,
          options
        )
          .then(checkStatus)
          .then(parseJSON)
          .then(this.changeFavoriteValue());
      })
      .catch(err => console.error("Error, with message:", err.statusText));
    },
    removeFromFavorite: function() {
      oidc({userInfoApiUrl: this.userInfoApiUrl})
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
          this.favoriteApiUrl +
            "?action=removeFavorite&channelId=" +
            this.chanId,
          options
        )
          .then(checkStatus)
          .then(parseJSON)
          .then(this.changeFavoriteValue());
      })
      .catch(err => console.error("Error, with message:", err.statusText));
    }
  }
}
</script>

<style lang="scss" scoped>
.favorite-button {
  padding: 0;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  outline: none;
  background-color: transparent;
  box-shadow: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 44px;
  height: 44px;

  &:hover {
    transform: scale(1.3, 1.3);
  }
  .fa-icon {
    width: auto;
    height: 2em; /* or any other relative font sizes */
    color: #b7b7b7;

    /* You would have to include the following two lines to make this work in Safari */
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
