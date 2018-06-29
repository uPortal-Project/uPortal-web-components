<template>
  <section class="content-favorites" :class="isSmall ? 'small' : ''" :style="'background-color:' + backgroundColor">
    <div class="title">
      <h1>{{ translate("message.favorites.title") }}</h1>
    </div>
    <div class="favorites">
      <swiper :options="swiperOption" ref="favSwiper">
        <swiper-slide v-for="portlet in getFavoritesPortlets" :key="portlet.id">
          <a class="no-style" v-bind:href="portlet.renderUrl" v-bind:target="portlet.layoutObject.altMaxUrl ? '_blank' : '_self'">
            <portlet-card :portlet-desc="portlet" :is-favorite="true" :is-small="isSmall" :call-after-action="callAfterAction"></portlet-card>
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"><icon :name="'chevron-left'"></icon></div>
      <div class="swiper-button-next" slot="button-next"><icon :name="'chevron-right'"></icon></div>
    </div>
  </section>
</template>

<script>
import PortletCard from "./PortletCard.vue";
import i18n from "../i18n.js";
import 'swiper/dist/css/swiper.css'
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/chevron-right";
import "vue-awesome/icons/chevron-left";

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: "ContentFavorites",
  props: {
    backgroundColor: String,
    callAfterAction: Function,
    favorites: { type: Array, required: true, default: () => [] },
    isSmall: { type: Boolean, default: false },
    portlets: { type: Array, required: true, default: () => [] }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  },
  components: {
    PortletCard,
    swiper,
    swiperSlide,
    Icon
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    translate: function(text, lang) {
      return i18n.t(text, lang);
    },
    computeImgUrl(url) {
      if (url != null && !url.startsWith("http")) {
        return process.env.VUE_APP_PORTAL_BASE_URL + url;
      }
      return url;
    }
  },
  computed: {
    getFavoritesPortlets() {
      let favs = [];
      for (const portlet of this.portlets) {
        if (this.favorites.indexOf(portlet.fname) > -1) {
          favs.push(portlet)
        }
      }
      return favs;
    },
    swiper() {
      return this.$refs.favSwiper.swiper;
    }
  }
};
</script>

<style lang="scss">
  @import '../../node_modules/slick-carousel/slick/slick.css';
  @import '../../node_modules/slick-carousel/slick/slick-theme.css';

  .content-favorites {
    width: inherit;
    display: inline-block;
    color: #ffffff;

    > .title {
      margin: 5px 20px;
      text-transform: uppercase;
    }
    > .favorites {
      position: relative;
      .swiper-container {
        margin: 0 45px;
      }
      .swiper-slide {
        width: 255px;
        height: 175px;
        margin: 30px;
        &:first-child {
          margin-left: 0;
        }
      }

      .swiper-button-prev, .swiper-button-next {
        background-image: none;
        color: white;
        margin-top: 0;
        width: auto;
        height: auto;
      }

      a.no-style {
        text-decoration: none;
        color: inherit;
      }
    }

    &.small{
      > .favorites {
        .swiper-container {
          margin: 0;
        }
        .swiper-slide {
          width: 120px;
          height: auto;
          margin: 0;
        }
        .swiper-button-prev, .swiper-button-next {
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
