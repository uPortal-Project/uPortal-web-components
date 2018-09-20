<template>
  <section class="content-grid" v-bind:class="{'small' : isSmall}" :style="'background-color:' + backgroundColor">
    <div>
      <div class="title">
        <h1>
          {{ translate("message.services.title") }}
        </h1>
        <div class="filter" :class="visible ? 'opened' : 'closed'">
          <span class="content-grid-caret">
            <input :title="translate('message.services.filter')" type="text" list="list" v-model.trim="filterValue"
                                      :placeholder="translate('message.services.filter')" />
          </span>
          <datalist id='list'>
            <select>
              <option v-for="category in allCategories" :value="category" :label="category" :key="category">
                {{category}}
              </option>
            </select>
          </datalist>
          <div @click="visible = !visible">
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div class="flex-grid">
        <div class="flex-item ma-3 text-xs-center" v-for="portlet in filteredPortlets" :key="portlet.id">
          <a class="no-style" v-bind:href="portlet.renderUrl" v-bind:target="portlet.layoutObject.altMaxUrl ? '_blank' : '_self'">
            <portlet-card :portlet-desc="portlet" :is-favorite="isFavorite(portlet.fname)" :is-small="isSmall" :call-after-action="callAfterAction"
                          :favorite-api-url="favoriteApiUrl" :user-info-api-url="userInfoApiUrl"></portlet-card>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import i18n from "../i18n.js";
import PortletCard from "./PortletCard";

export default {
  name: "ContentGrid",
  props: {
    backgroundColor: String,
    callAfterAction: Function,
    favoriteApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT +
        process.env.VUE_APP_FAVORITES_PORTLETS_URI
    },
    userInfoApiUrl: {
      type: String,
      default:
        process.env.VUE_APP_PORTAL_CONTEXT + process.env.VUE_APP_USER_INFO_URI
    },
    favorites: { type: Array, required: true, default: () => [] },
    isSmall: { type: Boolean, default: false },
    portlets: { type: Array, required: true, default: () => [] }
  },
  components: {
    PortletCard
  },
  data() {
    return {
      filterValue: "",
      visible: false
    };
  },
  methods: {
    translate: function(text, lang) {
      return i18n.t(text, lang);
    },
    isFavorite: function(fname) {
      return this.favorites.indexOf(fname) > -1;
    }
  },
  computed: {
    allCategories: function() {
      const allCategories = this.portlets.flatMap(
        ({ categories }) => categories
      );
      const uniqueCategories = [...new Set(allCategories)];
      return uniqueCategories.sort();
    },
    filteredPortlets: function() {
      const filterValue = this.filterValue.toLowerCase();
      if (filterValue === "") {
        return this.portlets;
      }

      return this.portlets.filter(
        ({ categories, title, name, description }) =>
          categories.some(cat => cat.toLowerCase().includes(filterValue)) ||
          title.toLowerCase().includes(filterValue) ||
          name.toLowerCase().includes(filterValue) ||
          description.toLowerCase().includes(filterValue)
      );
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

  :-moz-placeholder {
    font-style: italic;
  }

  ::-moz-placeholder {
    font-style: italic;
  }

  :-ms-input-placeholder {
    font-style: italic;
  }

  ::-ms-input-placeholder {
    font-style: italic;
  }

  .content-grid-caret {
    position: relative;
    cursor: pointer;
  }

  .content-grid-caret:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    display: inline-block;
    /*vertical-align: middle;*/
    top: 25%;
    right: 10px;
    border-top: 10px solid #000;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

    pointer-events: none;
  }

  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .fa-search:before {
    content: "\f002";
  }

  &.small {
    .content-grid-caret:after {
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
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

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
}
</style>
