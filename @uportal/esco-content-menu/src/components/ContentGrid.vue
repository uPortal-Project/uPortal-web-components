<template>
  <section
    :class="['parent-' + parentScreenSize, elementSize]"
    :style="'background-color:' + backgroundColor"
    class="content-grid">
    <div>
      <div class="title">
        <slot name="header-left">
          <h1>
            {{ translate("message.services.title") }}
          </h1>
        </slot>
        <slot name="header-right">
          <div
            :class="visible ? 'opened' : 'closed'"
            class="filter">
            <span class="content-grid-caret">
              <input
                :title="translate('message.services.filter')"
                v-model.trim="filterValue"
                :placeholder="translate('message.services.filter')"
                type="text"
                list="list">
            </span>
            <datalist id="list">
              <select>
                <option
                  v-for="category in allCategories"
                  :value="category"
                  :label="category"
                  :key="category">
                  {{ category }}
                </option>
              </select>
            </datalist>
            <div @click="visible = !visible">
              <i
                class="fa fa-search"
                aria-hidden="true" />
            </div>
          </div>
        </slot>
      </div>
      <div class="flex-grid">
        <div
          v-for="portlet in filteredPortlets"
          :key="portlet.id"
          class="flex-item ma-3 text-xs-center">
          <a
            :href="portlet.renderUrl"
            :target="portlet.layoutObject.altMaxUrl ? '_blank' : '_self'"
            :rel="portlet.layoutObject.altMaxUrl ? 'noopener noreferrer' : ''"
            class="no-style">
            <portlet-card
              :portlet-desc="portlet"
              :is-favorite="isFavorite(portlet.fname)"
              :size="_portletCardSize"
              :hide-action="hideAction"
              :call-after-action="callAfterAction"
              :favorite-api-url="favoriteApiUrl"
              :user-info-api-url="userInfoApiUrl" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import i18n from '../i18n.js';
import PortletCard from './PortletCard';
import fetchPortlets from '../services/fetchPortlets';
import {elementWidth, breakPointName} from '../services/sizeTools';

export default {
  name: 'ContentGrid',
  components: {
    PortletCard,
  },
  props: {
    backgroundColor: {type: String, default: 'rgba(0, 0, 0, 0)'},
    callAfterAction: {type: Function, default: () => {}},
    favoriteApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT +
        process.env.VUE_APP_FAVORITES_PORTLETS_URI,
    },
    contextApiUrl: {
      type: String,
      default: process.env.VUE_APP_PORTAL_CONTEXT,
    },
    userInfoApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT + process.env.VUE_APP_USER_INFO_URI,
    },
    favorites: {type: Array, default: () => []},
    parentScreenSize: {
      validator: (value) =>
        ['large', 'medium', 'small', 'smaller'].includes(value),
      default: 'medium',
    },
    portletCardSize: {
      validator: (value) =>
        ['auto', 'large', 'medium', 'small', 'smaller'].includes(value),
      default: 'auto',
    },
    hideAction: {type: Boolean, default: false},
    portlets: {type: Array, default: null},
  },
  data() {
    return {
      filterValue: '',
      visible: false,
      portletsAPI: [],
      elementSize: this.parentScreenSize,
    };
  },
  computed: {
    _portlets: function() {
      // if portlets are passed as a prop, use the prop
      // otherwise use a local fallback copy of portlets
      return this.portlets || this.portletsAPI;
    },
    _portletCardSize: function() {
      this.calculateSize();
      if (this.portletCardSize === 'auto') {
        return this.elementSize;
      }
      return this.portletCardSize;
    },
    allCategories: function() {
      const allCategories = this._portlets.flatMap(
          ({categories}) => categories
      );
      const uniqueCategories = [...new Set(allCategories)];
      return uniqueCategories.sort();
    },
    filteredPortlets: function() {
      const filterValue = this.filterValue.toLowerCase();

      if (filterValue === '') {
        return this._portlets;
      }

      return this._portlets.filter(
          ({categories, title, name, description}) =>
            categories.some((cat) => cat.toLowerCase().includes(filterValue)) ||
          title.toLowerCase().includes(filterValue) ||
          name.toLowerCase().includes(filterValue) ||
          description.toLowerCase().includes(filterValue)
      );
    },
  },
  mounted() {
    if (!this.portlets) {
      this.fetchPortlets();
    }
    this.$nextTick(function() {
      window.addEventListener('resize', this.calculateSize);
      this.calculateSize();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateSize);
  },
  methods: {
    translate: function(text, lang) {
      return i18n.t(text, lang);
    },
    isFavorite: function(fname) {
      return this.favorites.includes(fname);
    },
    fetchPortlets,
    calculateSize: function() {
      this.elementSize = breakPointName(elementWidth(this.$el));
    },
  },
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

  .content-grid-caret {
    position: relative;
    cursor: pointer;
  }

  .content-grid-caret::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    display: inline-block;
    top: 25%;
    right: 10px;
    border-top: 10px solid #000;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    pointer-events: none;
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

  > div {
    display: block;

    > .title {
      padding: 5px 20px;
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
        margin: 10px 0;
        width: 100%;
        max-width: 300px;

        input {
          line-height: 32px;
          border-radius: 48px;
          border: none;
          width: 100%;
          height: 100%;
          text-indent: 10px;
          font-size: 16px;

          /* prettier-ignore */
          box-shadow:
            0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 3px 1px -2px rgba(0, 0, 0, 0.12),
            0 1px 5px 0 rgba(0, 0, 0, 0.2);
          -webkit-appearance: none;
          outline: none;

          &::-webkit-calendar-picker-indicator {
            display: none; /* remove default arrow */
          }
        }

        > div {
          display: none;
        }
      }
    }

    .flex-grid {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;

      .flex-item {
        margin: 20px 5px;
      }
    }

    a.no-style {
      text-decoration: none;
      color: inherit;
    }
  }

  &.small,
  &.smaller {
    .content-grid-caret::after {
      border: none;
    }

    > div {
      background-color: #f3f3f3;
      border-radius: 5px;

      > .title {
        position: relative;
        background-color: white;
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
          height: calc(100% - 15px);
          max-width: unset;
          right: 15px;

          &.closed {
            width: $searchSize;

            input {
              visibility: hidden;
            }
          }

          > span {
            width: 100%;
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
