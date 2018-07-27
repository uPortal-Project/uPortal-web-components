<template>
  <div :class="mainClass" >
    <div class="icon"><div class="img-wrapper" :style="'background-color:' + iconBackColor"><img ng-if="iconUrl !== null" :src="iconUrl" :alt="title"></div></div>
    <div class="title">{{title}}</div>
    <div class="description" v-line-clamp:20="2">{{description}}</div>
    <div class="action">
      <action-favorites v-if="canFavorite" :fname="fname" :chan-id="channelId" :is-favorite="isFavorite" :call-on-toggle-fav="callAfterAction"
                        :favorites-api-url="favoriteApiUrl"></action-favorites>
    </div>
  </div>
</template>

<script>
import Vue from "vue"
import lineClamp from "vue-line-clamp"
import ActionFavorites from "./ActionFavorites"

Vue.use(lineClamp);

export default {
  name: "PortletCard",
  props: {
    callAfterAction: Function,
    cssClass: { type: String, default: "portlet-card" },
    iconBackgroundColor: { type: String, default: "Transparent" },
    isFavorite: { type: Boolean, default: false },
    favoriteApiUrl: { type: String, default: process.env.VUE_APP_PORTAL_CONTEXT + "/api/layout" },
    isSmall: { type: Boolean, default: false },
    portletDesc: { type: Object, required: true },
    backGroundIsDark: { type: Boolean, default: false }
  },
  data() {
    return {
      fname: this.portletDesc.fname,
      channelId: this.portletDesc.id,
      description: this.portletDesc.description,
      title: this.portletDesc.title,
      canFavorite: this.portletDesc.canAdd,
      iconUrl:
        this.portletDesc.layoutObject.iconUrl !== null
          ? this.computeIconUrl(this.portletDesc.layoutObject.iconUrl)
          : null,
      iconBackColor:
        process.env.NODE_ENV === "development"
          ? "#007aff"
          : this.iconBackgroundColor
    };
  },
  components: {
    ActionFavorites,
    lineClamp
  },
  computed: {
    mainClass: function() {
      let appClass =
        this.cssClass +
        " " +
        this.fname.toLowerCase() +
        " " +
        (this.portletDesc && this.portletDesc.categories
          ? this.portletDesc.categories.join(" ").toLowerCase()
          : "");
      if (this.isSmall) {
        appClass += " small-card";
      }
      if (this.backGroundIsDark) {
        appClass += " background-dark"
      }
      return appClass;
    }
  },
  methods: {
    computeIconUrl: function(url) {
      if (url != null && !url.startsWith("http")) {
        return process.env.VUE_APP_PORTAL_BASE_URL + url;
      }
      return url;
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.portlet-card {
  width: 255px;
  height: 170px;
  padding: 12px;
  background-color: white;
  text-align: center;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.25s, -webkit-box-shadow 0.25s;

  &:hover {
    cursor: pointer;
    /*transform: scale(1.1);*/
    box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
      0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
  }

  > .icon,
  > .title,
  > .description {
    display: block;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
  }

  > .action {
    color: rgba(0, 0, 0, 0.34);
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
  }

  > .icon {
    > div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 83px;
      width: 83px;
      margin-top: -30px;
      border-radius: 10px;

      img {
        height: 48px;
        width: auto;
      }
    }
  }
  > .title {
    padding-top: 1.5em;
    font-size: 18px;
    font-weight: bold;
  }

  > .description {
    padding-top: 1em;
  }

  &.small-card {
    width: 120px;
    height: auto;
    background-color: transparent;
    border: none;
    box-shadow: none;
    padding: 0;

    &.background-dark {
      > .title,
      > .description {
        color: white;
      }
    }

    > .description {
      display: none !important;
    }

    > .icon {
      > div {
        margin: 0;
      }
    }

    > .title {
      padding-top: 0.8em;
      font-weight: 500;
    }

    > .action {
      display: none !important;
    }
  }
}
</style>
