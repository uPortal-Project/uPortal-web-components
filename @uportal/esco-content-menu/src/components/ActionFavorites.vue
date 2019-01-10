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
    chanId: {type: Number, required: true},
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
    debug: {type: Boolean, default: false},
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
    translate(text, lang) {
      return i18n.t(text, lang);
    },
    toggleFavorite(event) {
      event.preventDefault();
      if (!this.debug) {
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
    changeFavoriteValue() {
      this.favorite = !this.favorite;
      this.$emit('is-favorite', this.favorite);
      this.callOnToggleFav(this.fname);
    },
    addToFavorite() {
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
      // eslint-disable-next-line
        .catch((err) => console.error('Error, with message:', err.statusText));
    },
    removeFromFavorite() {
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
      // eslint-disable-next-line
        .catch((err) => console.error('Error, with message:', err.statusText));
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../styles/vars.scss';

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
    width: $PortletCardButtonSize;
    height: $PortletCardButtonSize;

    &:hover {
      > .svg-inline--fa {
        transform: scale(1.4, 1.4);
      }
    }

    > .svg-inline--fa {
      width: 60%;
      height: 60%; /* or any other relative font sizes */
      color: #b7b7b7;
    }
  }
}
</style>
