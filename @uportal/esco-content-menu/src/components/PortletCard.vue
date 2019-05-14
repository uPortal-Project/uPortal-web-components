<template>
  <div :class="mainClass">
    <div class="portlet-card-icon">
      <div
        v-if="iconUrl !== null"
        :style="'background-color:' + iconBackgroundColor"
        class="img-wrapper">
        <img
          :src="iconUrl"
          :alt="title" >
      </div>
      <div
        v-else
        :style="'background-color:' + iconBackgroundColor"
        class="img-wrapper"/>
    </div>
    <div class="portlet-card-title">
      {{ title }}
    </div>
    <div class="portlet-card-description">
      <ellipsis
        v-if="append"
        :message="truncate(description)"
        :line-height="'20px'"
        :end-char="'...'"/>
    </div>
    <div
      v-if="!hideAction"
      class="portlet-card-action">
      <action-favorites
        v-if="canFavorite"
        :messages="messages"
        :fname="fname"
        :chan-id="channelId"
        :is-favorite="isFavorite"
        :call-on-toggle-fav="callAfterAction"
        :favorite-api-url="favoriteApiUrl"
        :user-info-api-url="userInfoApiUrl"
        :back-ground-is-dark="favBgIsDark"
        :debug="debug"/>
    </div>
  </div>
</template>

<script>
import Ellipsis from './Ellipsis';
import i18nMixin from '../mixins/i18n.js';
import ActionFavorites from './ActionFavorites';
import {sizeValidator} from '../services/sizeTools';
import computeUrl from '../services/computeUrl';

export default {
  name: 'PortletCard',
  mixins: [i18nMixin],
  components: {
    ActionFavorites,
    Ellipsis,
  },
  props: {
    callAfterAction: {type: Function, default: () => {}},
    cssClass: {type: String, default: 'portlet-card'},
    // Background is needed if your icons doesn't have it integrated
    iconBackgroundColor: {type: String, default: 'Transparent'},
    isFavorite: {type: Boolean, default: false},
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
    size: {
      validator: (value) => sizeValidator(value, true, true),
      default: 'medium',
    },
    hideAction: {type: Boolean, default: false},
    portletDesc: {type: Object, required: true},
    backGroundIsDark: {type: Boolean, default: false},
  },
  data() {
    return {
      fname: this.portletDesc.fname,
      channelId: this.portletDesc.id,
      description: this.portletDesc.description,
      title: this.portletDesc.title,
      canFavorite: this.portletDesc?.canAdd ? this.portletDesc.canAdd : true,
      iconUrl: computeUrl(
        this.portletDesc.parameters?.iconUrl?.value
          ? this.portletDesc.parameters?.iconUrl?.value
          : null
      ),
      append: false,
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.append = true;
    });
  },
  computed: {
    mainClass() {
      let appClasses = [];
      appClasses.push(this.cssClass);
      appClasses.push(this.fname);

      if (this.portletDesc && this.portletDesc.categories) {
        appClasses = appClasses.concat(this.portletDesc.categories);
      }

      appClasses.push(this.size + '-card');

      if (this.backGroundIsDark) {
        appClasses.push('background-dark');
      }

      if (this.hideAction) {
        appClasses.push('hide-action');
      }

      return appClasses.map((v) => v.toLowerCase()).join(' ');
    },
    favBgIsDark() {
      return this.backGroundIsDark && this.size.includes('small');
    },
  },
  methods: {
    truncate(entry) {
      if (entry) {
        const text = entry.split('   ');
        return text[0].trim();
      }
      return entry;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './../styles/vars.scss';

.portlet-card {
  width: $PortletCardSizeLarge;
  height: 170px;
  padding: 5px;
  line-height: 20px;
  background-color: white;
  text-align: center;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;

  /* prettier-ignore */
  box-shadow:
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.25s;

  &:hover {
    cursor: pointer;

    /* prettier-ignore */
    box-shadow:
      0 7px 8px -4px rgba(0, 0, 0, 0.2),
      0 12px 17px 2px rgba(0, 0, 0, 0.14),
      0 5px 22px 4px rgba(0, 0, 0, 0.12);
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
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > .portlet-card-description {
    padding-top: 0.3em;
    flex: 1;
    font-size: 14px;
  }

  &.custom-card {
    padding: 5px;
    padding: var(--content-gridcard-padding, 5px);
    border: none;
    border: var(--content-gridcard-border, none);
    background-color: white;
    background-color: var(--content-gridcard-bg-color, white);
    border-radius: 5px;
    border-radius: var(--content-gridcard-border-radius, 5px);
    box-shadow: none;
    box-shadow: var(--content-gridcard-shadow, none);
    transition: box-shadow 0.25s;
    width: $PortletCardSizeCustomWidth;
    width: var(--content-gridcard-size-w, $PortletCardSizeCustomWidth);
    height: $PortletCardSizeCustomHeight;
    height: var(--content-gridcard-size-h, $PortletCardSizeCustomHeight);

    &:hover {
      box-shadow: none;
      box-shadow: var(--content-gridcard-shadow-hover, none);
    }

    & > .portlet-card-icon {
      > div {
        height: 75px;
        height: var(--content-gridcard-icon-size, 75px);
        width: 75px;
        width: var(--content-gridcard-icon-size, 75px);
        margin-top: 0;
      }
    }

    > .portlet-card-title {
      overflow-x: hidden;
      overflow-y: visible;
      text-overflow: ellipsis;
      font-size: var(--content-gridcard-title-fontsize, 16px);
    }

    > .portlet-card-description {
      font-size: var(--content-gridcard-description-fontsize, 16px);
    }
  }

  &.medium-card,
  &.small-card,
  &.smaller-card {
    height: 160px;

    > .portlet-card-icon {
      > div {
        height: 75px;
        width: 75px;
      }
    }
  }

  &.small-card,
  &.smaller-card {
    height: auto;
    background-color: transparent;
    border: none;
    box-shadow: none;
    padding: 0;

    &.background-dark {
      > .portlet-card-title,
      > .portlet-card-description {
        color: white;
      }
    }

    > .portlet-card-description {
      display: none;
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
      margin: 0;
    }

    &:not(.hide-action) {
      margin-top: $PortletCardButtonSize / 2;

      > .portlet-card-action {
        top: $PortletCardButtonSize - (($PortletCardButtonSize / 2) * 3);
      }
    }
  }

  &.medium-card {
    width: $PortletCardSizeMedium;
  }

  &.small-card {
    width: $PortletCardSizeSmall;
  }

  &.smaller-card {
    width: $PortletCardSizeSmaller;
  }
}
</style>
