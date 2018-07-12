<template>
    <section class="content-grid" v-bind:class="{'small' : isSmall}" :style="'background-color:' + backgroundColor">
        <div>
            <div class="title">
                <h1 v-if="!isSmall">{{ translate("message.services.title") }}</h1>
                <div class="filter">
                   <span class="caret"> <input v-if="!isSmall" :title="translate('message.services.filter')" type="text" v-on:input="sourceChanged" list="list"
                           :placeholder="translate('message.services.filter')"/>
                    <input v-else :title="translate('message.services.title')" type="text" v-on:input="sourceChanged" list="list"
                           :placeholder="translate('message.services.title')"/>
                  </span>
                    <datalist id='list'>
                      <select>
                        <option v-if="isSmall" :label="translate('message.services.title')" style="font-weight: bold;"></option>
                        <option v-for="category in getAllCategories" :value="category" :label="category" :key="category"></option>
                      </select>
                    </datalist>
                </div>
            </div>
            <div class="flex-grid">
                <div class="flex-item ma-3 text-xs-center" v-for="portlet in filteredPortlets" :key="portlet.id">
                    <a class="no-style" v-bind:href="portlet.renderUrl" v-bind:target="portlet.layoutObject.altMaxUrl ? '_blank' : '_self'">
                        <portlet-card :portlet-desc="portlet" :is-favorite="isFavorite(portlet.fname)" :is-small="isSmall" :call-after-action="callAfterAction"></portlet-card>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PortletCard from "./PortletCard"
import i18n from "../i18n.js"

export default {
  name: "ContentGrid",
  props: {
    backgroundColor: String,
    callAfterAction: Function,
    favorites: { type: Array, required: true, default: () => [] },
    isSmall: { type: Boolean, default: false },
    portlets: { type: Array, required: true, default: () => [] }
  },
  components: {
    PortletCard
  },
  data() {
    return {
      filteredPortlets: this.portlets.sort(this.sortPortlets)
    };
  },
  methods: {
    translate: function(text, lang) {
      return i18n.t(text, lang);
    },
    isFavorite: function(fname) {
      return this.favorites.indexOf(fname) > -1;
    },
    sourceChanged: function(event) {
      let filterValue = event.target.value;
      if (filterValue !== null) {
        this.filteredPortlets = this.portlets.filter(function(portlet) {
          let cats = portlet.categories.filter(
            cat => cat.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          );
          return (
            cats.length > 0 ||
            portlet.title.toLowerCase().indexOf(filterValue.toLowerCase()) !==
              -1 ||
            portlet.name.toLowerCase().indexOf(filterValue.toLowerCase()) !==
              -1 ||
            portlet.description
              .toLowerCase()
              .indexOf(filterValue.toLowerCase()) !== -1
          );
        });
      } else {
        this.filteredPortlets = this.portlets.sort(this.sortPortlets);
      }
      this.filteredPortlets.sort(this.sortPortlets);
    },
    sortPortlets: function(a, b) {
      return a.title.localeCompare(b.title);
    }
  },
  computed: {
    getAllCategories: function() {
      let cats = [];
      for (let i = 0, size = this.portlets.length; i < size; i++) {
        for (
          let j = 0, categories = this.portlets[i].categories;
          j < categories.length;
          j++
        ) {
          if (cats.indexOf(categories[j]) === -1) {
            cats.push(categories[j]);
          }
        }
      }
      return cats.sort();
    }
  }
}
</script>

<style lang="scss" scoped>
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

  .caret {
    position: relative;
    cursor: pointer;
  }
  .caret:after {
    content: '';
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

    &.small {
      > div {
        background-color: #f3f3f3;
        border-radius: 5px;
        > .title {
          margin: 5px 0;

          > .filter {
            max-width: none;
            input {
              border-radius: initial;
              border-top-left-radius: 5px ;
              border-top-right-radius: 5px ;

              &::placeholder {
                font-style: normal;
                text-transform: uppercase;
                font-weight: bold;
                color: black;
              }
              &::-webkit-input-placeholder {
                font-style: normal;
                text-transform: uppercase;
                color: black;
              }
              &:-moz-placeholder {
                font-style: normal;
                text-transform: uppercase;
                color: black;
              }
              &::-moz-placeholder {
                font-style: normal;
                text-transform: uppercase;
                color: black;
              }
              &:-ms-input-placeholder {
                font-style: normal;
                text-transform: uppercase;
                color: black;
              }
              &::-ms-input-placeholder {
                font-style: normal;
                text-transform: uppercase;
                color: black;
              }
            }
          }
        }
      }
    }

  > div {
    display: block;

    > .title {
      margin: 5px 20px;
      text-transform: uppercase;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;

      > .filter {
        margin: auto 0;
        width: 100%;
        max-width: 300px;
        input {
          line-height: 32px;
          border-radius: 48px;
          border: none;
          width: 100%;
          text-indent: 10px;
          font-size: inherit;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

          -webkit-appearance: none;
          outline: none;

           &::-webkit-calendar-picker-indicator {
             display: none;/* remove default arrow */
           }

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
