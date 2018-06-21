<template>
  <div :class="'action-favorites ' + fname" @click="toggleFavorite(chanId, $event)"
       :title="favorite ? translate('message.favorites.remove') : translate('message.favorites.add')">
    <button class="favorite-button"><icon :name="favorite ? 'star' : 'star-o'" ></icon></button>
  </div>
</template>

<script>
import oidc from "@uportal/open-id-connect";
import i18n from "../i18n.js";
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/star";
import "vue-awesome/icons/star-o";

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
    chanId: { type: String, required: true },
    isFavorite: { type: Boolean, default: false },
    favoriteApiUrl: { type: String, default: "/uPortal/api/layout" },
    callOnToggleFav: Function
  },
  data() {
    return {
      favorite: this.isFavorite
    };
  },
  components: {
    Icon
  },
  methods: {
    translate: function(text, lang) {
      return i18n.t(text, lang);
    },
    toggleFavorite: function(chanId, event) {
      console.log("toggle to favorites ", chanId, event);
      event.preventDefault();
      if (this.favorite) {
        this.removeFromFavorite(chanId, event);
      } else {
        this.addToFavorite(chanId, event);
      }
      return false;
    },
    changeFavoriteValue: function() {
      this.favorite = !this.favorite;
      this.$emit("is-favorite", this.favorite);
      if (typeof this.callOnToggleFav === "function") {
        this.callOnToggleFav(event);
      }
    },
    addToFavorite: function(chanId, event) {
      console.log("Adding to favorites ", chanId);
      oidc()
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
            this.favoriteApiUrl + "?action=addFavorite&channelId=" + chanId,
            options
          )
            .then(checkStatus)
            .then(parseJSON)
            .then(this.changeFavoriteValue(event));
        })
        .catch(err => console.log("Error, with message:", err.statusText));
    },
    removeFromFavorite: function(chanId, event) {
      console.log("Removing to favorites " + chanId);
      oidc()
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
            this.favoriteApiUrl + "?action=removeFavorite&channelId=" + chanId,
            options
          )
            .then(checkStatus)
            .then(parseJSON)
            .then(this.changeFavoriteValue(event));
        })
        .catch(err => console.log("Error, with message:", err.statusText));
    }
  }
};
</script>

<style scoped>
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
  width: 44px;
  height: 44px;
  transition: all 0.2s ease-in-out;
}
.favorite-button:hover {
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
</style>
