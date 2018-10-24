<template>
  <section
    :class="showSmall ? 'small' : ''"
    :style="'background-color:' + backgroundColor"
    class="content-favorites">
    <div class="content-favorites-title">
      <h1>
        {{ translate("message.favorites.title") }}
      </h1>
    </div>
    <div
      ref="favsSection"
      :style="favorited.length > 0 ? '' : 'display:none'"
      class="favorites">
      <swiper
        ref="favSwiper"
        :options="swiperOption"
        @transitionEnd="updateSlider">
        <swiper-slide
          v-for="portlet in favorited"
          :key="portlet.id">
          <a
            :href="portlet.renderUrl"
            :target="portlet.layoutObject.altMaxUrl ? '_blank' : '_self'"
            class="no-style">
            <portlet-card
              :portlet-desc="portlet"
              :is-favorite="true"
              :is-small="showSmall"
              :call-after-action="callAfterFavAction"
              :back-ground-is-dark="true"
              :favorite-api-url="favoriteApiUrl"
              :user-info-api-url="userInfoApiUrl" />
          </a>
        </swiper-slide>
      </swiper>
      <div
        slot="button-prev"
        :class="disablePrev ? 'fav-swiper-button-disabled' : ''"
        class="swiper-button-prev"
        @click="slidePrev($event)">
        <font-awesome-icon icon="chevron-left" />
      </div>
      <div
        slot="button-next"
        :class="disableNext ? 'fav-swiper-button-disabled' : ''"
        class="swiper-button-next"
        @click="slideNext($event)">
        <font-awesome-icon icon="chevron-right" />
      </div>
    </div>
    <div
      :style="favorited.length > 0 ? 'display:none' : ''"
      class="empty-favorites">
      <div>
        {{ translate("message.favorites.empty" ) }}
      </div>
    </div>
  </section>
</template>

<script>
import i18n from '../i18n.js';
import PortletCard from './PortletCard';
import '../icons.js';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import {swiper, swiperSlide} from 'vue-awesome-swiper';

export default {
  name: 'ContentFavorites',
  components: {
    PortletCard,
    swiper,
    // false positive
    // eslint-disable-next-line vue/no-unused-components
    swiperSlide,
    FontAwesomeIcon,
  },
  props: {
    backgroundColor: {type: String, default: 'rgba(0, 0, 0, 0)'},
    callAfterAction: {type: Function, default: () => {}},
    isHidden: {type: Boolean, default: false},
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
      this.callAfterAction(favorite, fname);
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
};
</script>

<style lang="scss" scoped>
@import '../../node_modules/swiper/dist/css/swiper.css';
@import './../styles/vars.scss';

$buttonWidth: 32px;

.content-favorites {
  width: inherit;
  color: #fff;
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
    }
  }

  > .favorites {
    position: relative;

    > .swiper-container {
      margin: 0 45px;
      padding-bottom: 15px;

      > .swiper-wrapper {
        > .swiper-slide {
          width: $PortletCardSizeLarge;
          height: 170px;
          margin: $buttonWidth;

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
      width: $buttonWidth;
      height: $buttonWidth;
      text-align: center;
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

  .svg-inline--fa {
    width: auto;
    height: 2em; /* or any other relative font sizes */

    /* You would have to include the following two lines to make this work in Safari */
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
