<template>
  <div
    :class="['action-favorites ' + fname, backGroundIsDark ? 'background-dark' : '']"
    :title="isFavorite ? translate('message.favorites.remove') : translate('message.favorites.add')"
    @click="toggleFavorite($event)">
    <button class="favorite-button">
      <font-awesome-icon :icon="[isFavorite ? 'fas' : 'far', 'star']" />
    </button>
  </div>
</template>

<script>
import oidc from '@uportal/open-id-connect';
import i18n from '../i18n.js';
import '../icons.js';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

const checkStatus = function(response) {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = function(response) {
  return response.json();
};
export default {
  name: 'ActionFavorites',
  components: {
    FontAwesomeIcon,
  },
  props: {
    callOnToggleFav: {type: Function, default: () => {}},
    chanId: {type: String, required: true},
    favoriteApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT +
        process.env.VUE_APP_FAVORITES_PORTLETS_URI,
    },
    userInfoApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT + process.env.VUE_APP_USER_INFO_URI,
    },
    fname: {type: String, required: true},
    isFavorite: {type: Boolean, default: false},
    backGroundIsDark: {type: Boolean, default: false},
  },
  data() {
    return {
      favorite: this.isFavorite,
    };
  },
  methods: {
    translate: function(text, lang) {
      return i18n.t(text, lang);
    },
    toggleFavorite: function(event) {
      event.preventDefault();
      if (process.env.NODE_ENV !== 'development') {
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
      this.$emit('is-favorite', this.favorite);
      this.callOnToggleFav(this.favorite, this.fname);
    },
    addToFavorite: function() {
      oidc({userInfoApiUrl: this.userInfoApiUrl})
          .then((token) => {
            const options = {
              method: 'POST',
              credentials: 'same-origin',
              headers: {
                'Authorization': 'Bearer ' + token.encoded,
                'Content-Type': 'application/json',
              },
            };
            fetch(
                this.favoriteApiUrl +
              '?action=addFavorite&channelId=' +
              this.chanId,
                options
            )
                .then(checkStatus)
                .then(parseJSON)
                .then(this.changeFavoriteValue());
          })
          .catch((err) => console.error('Error, with message:', err.statusText));
    },
    removeFromFavorite: function() {
      oidc({userInfoApiUrl: this.userInfoApiUrl})
          .then((token) => {
            const options = {
              method: 'POST',
              credentials: 'same-origin',
              headers: {
                'Authorization': 'Bearer ' + token.encoded,
                'Content-Type': 'application/json',
              },
            };
            fetch(
                this.favoriteApiUrl +
              '?action=removeFavorite&channelId=' +
              this.chanId,
                options
            )
                .then(checkStatus)
                .then(parseJSON)
                .then(this.changeFavoriteValue());
          })
          .catch((err) => console.error('Error, with message:', err.statusText));
    },
  },
};
</script>

<style lang="scss" scoped>
.action-favorites {
  &.background-dark {
    .favorite-button > .svg-inline--fa {
      color: #f2f2f2;
    }
  }

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
      > .svg-inline--fa {
        transform: scale(1.3, 1.3);
      }
    }

    > .svg-inline--fa {
      width: auto;
      height: 2em; /* or any other relative font sizes */
      color: #b7b7b7;

      /* You would have to include the following two lines to make this work in Safari */
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
