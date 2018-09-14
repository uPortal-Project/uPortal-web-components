<template>
  <div :class="mainClass" >
    <div class="portlet-card-icon"><div v-if="iconUrl !== null" class="img-wrapper" :style="'background-color:' + iconBackgroundColor"><img :src="iconUrl" :alt="title"></div>
      <div v-else class="img-wrapper" :style="'background-color:' + iconBackgroundColor"></div></div>
    <div class="portlet-card-title">{{title}}</div>
      <div class="portlet-card-description">
      <ellipsis :message="description" :line-clamp="2" :line-height="'20px'" :end-char="'...'"></ellipsis>
    </div>
    <div class="portlet-card-action">
      <action-favorites v-if="canFavorite" :fname="fname" :chan-id="channelId" :is-favorite="isFavorite" :call-on-toggle-fav="callAfterAction"
                        :favorite-api-url="favoriteApiUrl" :user-info-api-url="userInfoApiUrl"></action-favorites>
    </div>
  </div>
</template>

<script>
import Ellipsis from "./Ellipsis";
import ActionFavorites from "./ActionFavorites";

export default {
  name: "PortletCard",
  props: {
    callAfterAction: Function,
    cssClass: { type: String, default: "portlet-card" },
    // Background is needed if your icons doesn't have it integrated
    iconBackgroundColor: { type: String, default: "Transparent" },
    isFavorite: { type: Boolean, default: false },
    favoriteApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT +
        process.env.VUE_APP_FAVORITES_PORTLETS_URI
    },
    userInfoApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT + process.env.VUE_APP_USER_INFOS_URI
    },
    isSmall: { type: Boolean, default: false },
    portletDesc: { type: Object, required: true },
    backGroundIsDark: { type: Boolean, default: false }
  },
  data() {
    return {
      fname: this.portletDesc.fname,
      channelId: this.portletDesc.id,
      description: this.truncate(this.portletDesc.description),
      title: this.portletDesc.title,
      canFavorite: this.portletDesc.canAdd,
      iconUrl:
        this.portletDesc.layoutObject.iconUrl !== null
          ? this.computeIconUrl(this.portletDesc.layoutObject.iconUrl)
          : null
    };
  },
  components: {
    ActionFavorites,
    Ellipsis
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
        appClass += " background-dark";
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
    },
    truncate: function(entry) {
      if (entry) {
        let text = entry.split("   ");
        return text[0].trim();
      }
      return entry.trim();
    }
  }
  //,
  // watch: {
  //   isSmall: {
  //     handler: function() {
  //       this.description = "";
  //       this.description = this.truncate(this.portletDesc.description);
  //     }
  //   }
  // }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.portlet-card {
  width: 255px;
  height: 170px;
  padding: 12px;
  line-height: 20px;
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

  > .portlet-card-icon,
  > .portlet-card-title,
  > .portlet-card-description {
    display: block;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
  }

  > .portlet-card-action {
    color: rgba(0, 0, 0, 0.34);
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
  }

  > .portlet-card-icon {
    > div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 83px;
      width: 83px;
      margin-top: -30px;
      border-radius: 10px;

      img {
        height: 100%;
        width: auto;
        border-radius: 10px;
      }
    }
  }
  > .portlet-card-title {
    padding-top: 1em;
    font-size: 18px;
    font-weight: bold;
  }

  > .portlet-card-description {
    padding-top: 0.3em;
    // security to avoid to be outside of the portlet-card
    max-height: 40px;
    /*overflow: hidden;*/
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

    > .portlet-card-description {
      display: none !important;
    }

    > .portlet-card-icon {
      > div {
        margin: 0;
      }
    }

    > .portlet-card-title {
      padding-top: 0.8em;
      font-weight: 500;
    }

    > .portlet-card-action {
      display: none !important;
    }
  }
}
</style>
