<template>
  <section
    :class="['parent-' + parentScreenSize, elementSize]"
    :style="'background-color:' + backgroundColor"
    class="content-grid"
  >
    <div>
      <div class="title" v-if="!hideTitle">
        <slot name="header-left">
          <h1>
            {{ translate('message.services.title') }}
          </h1>
        </slot>
        <slot name="header-right">
          <div
            :class="visible ? 'opened' : 'closed'"
            class="filter custom-caret"
          >
            <input
              :title="translate('message.services.filter')"
              v-model.trim="filterValue"
              :placeholder="translate('message.services.filter')"
              type="text"
              @focus="filterValue = ''"
              autofocus
            />
            <select v-model="filterCategory">
              <option class="default" selected value="">
                {{ translate('message.filter.selectOption') }}
              </option>
              <option
                v-for="category in allCategories"
                :value="category"
                :label="category"
                :key="category"
              >
                {{ category }}
              </option>
            </select>
            <div @click="visible = !visible">
              <i class="fa fa-search" aria-hidden="true" />
            </div>
          </div>
        </slot>
      </div>
      <div class="preamble">
        <slot name="preamble" class="preamble" />
      </div>
      <div class="flex-grid">
        <div
          v-for="portlet in filteredPortlets"
          :key="portlet.id"
          :class="['portlet-card-' + _portletCardSize]"
          class="flex-item ma-3 text-xs-center"
        >
          <a
            :href="getRenderPortletUrl(portlet)"
            :target="hasAlternativeMaximizedUrl(portlet) ? '_blank' : '_self'"
            :rel="
              hasAlternativeMaximizedUrl(portlet) ? 'noopener noreferrer' : ''
            "
            class="no-style"
          >
            <portlet-card
              :messages="messages"
              :portlet-desc="portlet"
              :is-favorite="isFavorite(portlet.fname)"
              :size="_portletCardSize"
              :hide-action="hideAction"
              :call-after-action="actionToggleFav"
              :favorite-api-url="favoriteApiUrl"
              :user-info-api-url="userInfoApiUrl"
              :back-ground-is-dark="portletBackgroundIsDark"
              :debug="debug"
            />
          </a>
        </div>
      </div>
      <slot name="footer">
        <select
          class="footer-categories"
          v-if="showFooterCategories"
          v-model="filterCategory"
        >
          >
          <option class="default" selected value="">
            {{ translate('message.filter.selectOption') }}
          </option>
          <option
            v-for="category in allCategories"
            :value="category"
            :label="category"
            :key="category"
          >
            {{ category }}
          </option>
        </select>
      </slot>
    </div>
  </section>
</template>

<script>
import i18nMixin from '../mixins/i18n.js';
import PortletCard from './PortletCard';
import fetchPortlets from '../services/fetchPortlets';
import byPortlet from '../services/sortByPortlet';
import fetchFavorites from '../services/fetchFavorites';
import flattenFavorites from '../services/flattenFavorites';
import { portletRegistryToArray } from '../services/portlet-registry-to-array';
import toggleArray from '../services/toggleArray';
import {
  elementWidth,
  breakPointName,
  sizeValidator
} from '../services/sizeTools';
import {
  hasAlternativeMaximizedUrl,
  getRenderUrl
} from '../services/managePortletUrl';
import matchSorter from 'match-sorter';

export default {
  name: 'ContentGrid',
  mixins: [i18nMixin],
  components: {
    PortletCard
  },
  props: {
    hideTitle: { type: Boolean, default: false },
    backgroundColor: { type: String, default: 'rgba(0, 0, 0, 0)' },
    callAfterAction: { type: Function, default: undefined },
    contextApiUrl: {
      type: String,
      default: process.env.VUE_APP_PORTAL_CONTEXT
    },
    favoriteApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT +
        process.env.VUE_APP_FAVORITES_PORTLETS_URI
    },
    layoutApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT + process.env.VUE_APP_FAVORITES_URI
    },
    portletApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT +
        process.env.VUE_APP_BROWSABLE_PORTLETS_URI
    },
    userInfoApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT + process.env.VUE_APP_USER_INFO_URI
    },
    debug: { type: Boolean, default: false },
    /**
     * Warning the default value as undefined permit to distinct if the component should manage favorites locally.
     */
    favorites: { type: Array, default: undefined },
    parentScreenSize: {
      validator: sizeValidator,
      default: 'medium'
    },
    portletCardSize: {
      validator: value => sizeValidator(value, true, true),
      default: 'auto'
    },
    hideAction: { type: Boolean, default: false },
    /**
     * Warning the default value as undefined permit to distinct if the component should manage portlets locally.
     */
    portlets: { type: Array, default: undefined },
    showFooterCategories: { type: Boolean, default: false },
    useExternalFilter: { type: Boolean, default: true },
    portletBackgroundIsDark: { type: Boolean, default: false }
  },
  data() {
    return {
      filterValue: '',
      filterCategory: '',
      visible: false,
      elementSize: this.parentScreenSize,
      localPortlets: [],
      localFavorites: []
    };
  },
  computed: {
    _portletCardSize() {
      this.calculateSize();
      if (this.portletCardSize === 'auto') {
        return this.elementSize;
      }
      return this.portletCardSize;
    },
    allCategories() {
      const portlets = this.portlets || this.localPortlets;
      const allCategories = portlets.flatMap(({ categories }) => categories);
      const uniqueCategories = [...new Set(allCategories)];
      return uniqueCategories.sort();
    },
    filteredPortlets() {
      const portlets = this.portlets || this.localPortlets;

      const categoryFilter =
        this.filterCategory.trim() === ''
          ? // no filter applied return everything
            portlets => portlets
          : // filter by category
            portlets =>
              matchSorter(portlets, this.filterCategory, {
                keys: ['categories'],
                threshold: matchSorter.rankings.EQUAL
              });

      const valueFilter =
        this.filterValue.trim() === ''
          ? // no filter applied return everything
            portlets => portlets
          : // filter and sort by best match
            portlets =>
              matchSorter(portlets, this.filterValue, {
                keys: ['title', 'name', 'description'],
                threshold: matchSorter.rankings.ACRONYM
              });

      return valueFilter(categoryFilter(portlets).sort(byPortlet));
    }
  },
  beforeMount() {
    if (this.useExternalFilter) {
      window.addEventListener('gridNeedCategories', this.emitAllCategories);
      window.addEventListener('gridCategoryFilter', this.setFilterCategory);
    }
    window.addEventListener('gridFavoritesUpdated', this.reload);
  },
  mounted() {
    if (!this.portlets) {
      this.fetchPortlets();
    }
    if (!this.favorites) {
      this.fetchFavorites();
    }
    this.$nextTick(function() {
      window.addEventListener('resize', this.calculateSize);
      this.calculateSize();
    });
    if (this.useExternalFilter) {
      this.$nextTick(function() {
        this.emitAllCategories();
      });
    }
  },
  beforeDestroy() {
    if (this.useExternalFilter) {
      window.removeEventListener('gridCategoryFilter', this.setFilterCategory);
      window.removeEventListener('gridNeedCategories', this.emitAllCategories);
    }
    window.removeEventListener('gridFavoritesUpdated', this.reload);
    window.removeEventListener('resize', this.calculateSize);
  },
  methods: {
    hasAlternativeMaximizedUrl(portletDesc) {
      return hasAlternativeMaximizedUrl(portletDesc);
    },
    getRenderPortletUrl(portletDesc) {
      return getRenderUrl(portletDesc, this.contextApiUrl);
    },
    isFavorite(fname) {
      const favorites = this.favorites || this.localFavorites;
      return favorites.includes(fname);
    },
    reload(event) {
      if (this._uid !== event.detail) {
        this.fetchPortlets();
      }
    },
    async fetchPortlets() {
      const portlets = await fetchPortlets(
        this.userInfoApiUrl,
        this.portletApiUrl,
        this.debug
      );
      this.localPortlets = portletRegistryToArray(portlets);
    },
    async fetchFavorites() {
      const favoritesTree = await fetchFavorites(
        this.userInfoApiUrl,
        this.layoutApiUrl,
        this.debug
      );
      this.localFavorites = flattenFavorites(favoritesTree);
    },
    calculateSize() {
      this.elementSize = breakPointName(elementWidth(this.$el));
    },
    actionToggleFav(fname) {
      const event = new CustomEvent('gridFavoritesUpdated', {
        bubbles: true,
        detail: this._uid
      });
      window.dispatchEvent(event);
      /**
       * use case:
       * if used independently or without external component need on favorites we should manage locally favorited
       * the callAfterAction function is needed to manage favorites from parent element.
       */
      if (this.callAfterAction) {
        return this.callAfterAction(fname);
      }
      if (!this.favorites) {
        this.localFavorites = toggleArray(this.localFavorites, fname);
      }
    },
    setFilterCategory(e) {
      this.filterCategory = e.detail || '';
    },
    emitAllCategories() {
      this.$nextTick(() => {
        // nextTick() waits for data to be resolved
        if (this.allCategories.length > 0) {
          const event = new CustomEvent('gridCategories', {
            detail: this.allCategories
          });
          window.dispatchEvent(event);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$searchSize: 32px;

.content-grid {
  min-width: 250px;

  ::placeholder {
    font-style: italic;
  }

  ::-webkit-input-placeholder {
    font-style: italic;
  }

  ::-ms-input-placeholder {
    font-style: italic;
  }

  ::-moz-placeholder {
    font-style: italic;
  }

  :-moz-placeholder {
    font-style: italic;
  }

  :-ms-input-placeholder {
    font-style: italic;
  }

  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome, sans-serif;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .fa-search::before {
    content: '\f002';
  }

  .footer-categories {
    display: inline-block;
    width: 100%;
    max-width: 50rem;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    line-height: 1.5;
    color: #495057;
    vertical-align: middle;
    background-color: #fff;
    background-size: auto auto;
    background-size: 8px 10px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  > div {
    display: block;
    color: #000;

    > .title {
      padding: 0 20px;
      margin-bottom: 15px;
      text-transform: uppercase;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;

      > h1 {
        margin-bottom: 15px;
        margin-top: 15px;
        font-weight: normal;
        font-size: 24px;
      }

      > .filter {
        margin: auto 0;
        width: 100%;
        height: 32px;
        max-width: 400px;
        display: flex;
        flex-flow: row nowrap;

        /* custom caret to override bad firefox one */
        &.custom-caret {
          position: relative;
          cursor: pointer;

          &::after {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            display: inline-block;
            top: 48%;
            right: 10px;
            border-top: 6px solid #000;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            pointer-events: none;
          }

          select {
            -webkit-appearance: none;
            -moz-appearance: none;
            padding: 5px 24px 5px 5px;

            &::-ms-expand {
              display: none;
            }
          }
        }

        input,
        select {
          border: none;
          height: 100%;

          /* prettier-ignore */
          box-shadow:
            0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 3px 1px -2px rgba(0, 0, 0, 0.12),
            0 1px 5px 0 rgba(0, 0, 0, 0.2);
          outline: none;
          padding: 0;
          margin: 0;
        }

        input {
          line-height: 32px;
          border-top-left-radius: 48px;
          border-bottom-left-radius: 48px;
          width: 60%;
          text-indent: 10px;
          font-size: 16px;
        }

        select {
          border-top-right-radius: 48px;
          border-bottom-right-radius: 48px;
          width: 40%;

          option.default {
            font-style: italic;
            color: grey;
          }
        }

        > div {
          display: none;
        }
      }
    }

    .preamble {
      display: flex;
      flex-flow: row wrap;
      padding: 0 20px;
    }

    .flex-grid {
      display: flex;
      flex-flow: row wrap;
      justify-content: var(--content-grid-flex-grid-justify, center);

      .flex-item {
        margin: 20px auto;
        margin: var(--content-griditem-margin, 20px auto);
        padding: 0 2.5px;
      }

      /** fix IE flexbox bug on margin auto https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/14593426/. */
      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        .flex-item {
          margin: 20px 5px;
        }
      }
    }

    a.no-style {
      text-decoration: none;
      color: inherit;
    }
  }

  &.small,
  &.smaller {
    > div {
      border-radius: 5px;

      > .title {
        position: relative;
        border-radius: 5px;

        > h1 {
          margin-right: $searchSize;
        }

        > .filter {
          margin: auto 0;
          position: absolute;
          display: flex;
          flex-flow: row nowrap;
          width: calc(100% - 30px);
          height: calc(100% - 10px);
          padding: 5px 0;
          max-width: unset;
          right: 15px;

          &.closed {
            width: $searchSize;

            > input,
            > select,
            &::after {
              visibility: hidden;
              padding: 0;
              display: none;
            }
          }

          > div {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            align-items: center;
            text-align: center;

            > .fa {
              margin-left: 5px;
              font-size: $searchSize;
              opacity: 0.4;
            }
          }

          &.opened {
            transition: width 1s;
            backface-visibility: hidden;

            &::after {
              right: 40px;
            }

            @media screen and (max-width: 400px) {
              flex-flow: column wrap;
              height: 100%;

              > input,
              > select {
                width: calc(100% - 42px);
                height: 50%;
                border-radius: unset;
              }

              &::after {
                right: 50px;
                top: 75%;
              }

              > div {
                flex: 1 1 100%;
              }
            }

            > div > .fa {
              opacity: 1;
            }
          }
        }
      }
    }
  }
}
</style>
