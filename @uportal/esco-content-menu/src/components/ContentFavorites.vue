<template>
  <section class="content-favorites" :class="showSmall ? 'small' : ''" :style="'background-color:' + backgroundColor">
    <div class="content-favorites-title">
      <h1>
        {{ translate("message.favorites.title") }}
      </h1>
    </div>
    <div class="favorites" :style="favorited.length > 0 ? '' : 'display:none'" ref="favsSection">
      <swiper :options="swiperOption" ref="favSwiper" @transitionEnd="updateSlider">
        <swiper-slide v-for="portlet in favorited" :key="portlet.id">
          <a class="no-style" v-bind:href="portlet.renderUrl" v-bind:target="portlet.layoutObject.altMaxUrl ? '_blank' : '_self'">
            <portlet-card :portlet-desc="portlet" :is-favorite="true" :is-small="showSmall" :call-after-action="callAfterFavAction" :back-ground-is-dark="true"
                          :favorite-api-url="favoriteApiUrl" :user-info-api-url="userInfoApiUrl"></portlet-card>
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" :class="disablePrev ? 'fav-swiper-button-disabled' : ''" slot="button-prev" @click="slidePrev($event)">
        <icon :name="'chevron-left'"></icon>
      </div>
      <div class="swiper-button-next" :class="disableNext ? 'fav-swiper-button-disabled' : ''" slot="button-next" @click="slideNext($event)">
        <icon :name="'chevron-right'"></icon>
      </div>
    </div>
    <div class="empty-favorites" :style="favorited.length > 0 ? 'display:none' : ''">
      <div>
        {{ translate("message.favorites.empty" )}}
      </div>
    </div>
  </section>
</template>

<script>
import i18n from '../i18n.js';
import PortletCard from './PortletCard';
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chevron-right';
import 'vue-awesome/icons/chevron-left';

import {swiper, swiperSlide} from 'vue-awesome-swiper';

export default {
  name: 'ContentFavorites',
  props: {
    backgroundColor: String,
    callAfterAction: Function,
    isHidden: Boolean,
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
    favorites: {type: Array, required: true, default: () => []},
    isSmall: {type: Boolean, default: false},
    portlets: {type: Array, required: true, default: () => []},
  },
  data() {
    return {
      favorited: [],
      swiperOption: {
        init: false,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 0,
        speed: 800,
        freeMode: true,
        /** These params doesn't work after build */
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      showSmall: this.isSmall,
      disableNext: false,
      disablePrev: false,
    };
  },
  components: {
    PortletCard,
    swiper,
    swiperSlide,
    Icon,
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.updateSlider);
    });
  },
  methods: {
    translate: function(text, lang) {
      return i18n.t(text, lang);
    },
    computeImgUrl(url) {
      if (url != null && !url.startsWith('http')) {
        return process.env.VUE_APP_PORTAL_BASE_URL + url;
      }
      return url;
    },
    isXs() {
      this.showSmall = this.isSmall || this.getWindowWidth() < 660;
    },
    callAfterFavAction(favorite, fname) {
      this.updateSlider();
      if (typeof this.callAfterAction === 'function') {
        this.callAfterAction(favorite, fname);
      }
    },
    getWindowWidth: function() {
      if (this.$refs.favsSection) return this.$refs.favsSection.clientWidth;
      return 0;
    },
    slideNext(event) {
      event.preventDefault();
      this.$refs.favSwiper.swiper.slideNext(800);
      this.updateSlider();
    },
    slidePrev(event) {
      event.preventDefault();
      this.$refs.favSwiper.swiper.slidePrev(800);
      this.updateSlider();
    },
    updateSlider() {
      setTimeout(() => {
        if (!this.isHidden) {
          if (!this.$refs.favSwiper.swiper.initialized) {
            this.$refs.favSwiper.swiper.init();
          } else {
            this.$refs.favSwiper.swiper.update();
          }
          this.disableNext = this.$refs.favSwiper.swiper.isEnd;
          this.disablePrev = this.$refs.favSwiper.swiper.isBeginning;
          this.isXs();
        }
      }, 300);
    },
    calcFavoritesPortlets() {
      this.emptyArray(this.favorited);
      for (const fname of this.favorites) {
        for (const portlet of this.portlets) {
          if (portlet.fname === fname) {
            this.favorited.push(portlet);
          }
        }
      }
    },
    emptyArray: function(array) {
      while (array.length > 0) {
        array.pop();
      }
    },
  },
  watch: {
    favorites: {
      handler: function() {
        this.calcFavoritesPortlets();
        this.updateSlider();
      },
      deep: true,
    },
    portlets: {
      handler: function() {
        this.calcFavoritesPortlets();
        this.updateSlider();
      },
      deep: true,
    },
    favorited: {
      handler: function() {
        this.updateSlider();
      },
      deep: true,
    },
    isHidden: {
      handler: function() {
        this.updateSlider();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../node_modules/swiper/dist/css/swiper.css';

.content-favorites {
  width: inherit;
  color: #ffffff;
  padding-bottom: 1.5em;

  display: flex;
  flex-flow: column;
  justify-content: center;

  > .content-favorites-title {
    margin: 0 0 5px 2em;
    text-transform: uppercase;
    filter: grayscale(1);
    h1 {
      font-size: 24px;
      font-weight: normal;
      margin: 10px 0 5px 10px;
      color: white;
      //mix-blend-mode: difference
    }
  }
  > .favorites {
    position: relative;
    > .swiper-container {
      margin: 0 45px;

      padding-bottom: 15px;
      > .swiper-wrapper {
        > .swiper-slide {
          width: 255px;
          height: 175px;
          margin: 30px;
          &:first-child {
            margin-left: 0;
          }
        }
      }
      .swiper-pagination {
        bottom: 0;
        > span.swiper-pagination-bullet {
          width: 16px;
          height: 16px;
          margin: 0 8px;
          color: white;
        }
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      background-image: none;
      color: white;
      margin-top: 0;
      width: auto;
      height: auto;
    }
    .fav-swiper-button-disabled {
      opacity: 0.35;
      cursor: auto;
      pointer-events: none;
    }

    a.no-style {
      text-decoration: none;
      color: inherit;
    }
  }
  > .empty-favorites {
    padding-left: 2em;
  }

  &.small {
    > .content-favorites-title h1 {
      font-size: initial;
      font-weight: bold;
    }
    > .favorites {
      padding-left: 2em;

      > .swiper-container {
        margin: 0;
        padding-bottom: 30px;

        > .swiper-wrapper {
          > .swiper-slide {
            width: 120px;
            height: auto;
            margin: 0;
          }
        }
      }
      .swiper-button-prev,
      .swiper-button-next {
        display: none;
      }
    }
  }
  .fa-icon {
    width: auto;
    height: 2em; /* or any other relative font sizes */

    /* You would have to include the following two lines to make this work in Safari */
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
