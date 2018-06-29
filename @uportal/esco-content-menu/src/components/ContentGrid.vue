<template>
    <section class="content-grid" :style="'background-color:' + backgroundColor">
        <div v-bind:class="{'small' : isSmall}">
            <div class="title">
                <h1>{{ translate("message.services.title") }}</h1>
                <div class="filter">
                    <input :title="translate('message.services.filter')" type="text" v-on:input="sourceChanged" list="list" :placeholder="translate('message.services.filter')"/>
                    <datalist id='list'>

                        <option v-for="category in getAllCategories" :value="category" :label="category" :key="category"></option>
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
import PortletCard from "./PortletCard.vue";
import i18n from "../i18n.js";

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
      filteredPortlets: this.portlets
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
        this.filteredPortlets = this.portlets;
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
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  }
};
</script>

<style lang="scss" scoped>

.content-grid {
  min-width: 250px;

  > div {
    display: block;

    .small {
      background-color: #e1e1e1;
    }

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
        > input {
          line-height: 32px;
          border-radius: 48px;
          border: none;
          width: 100%;
          text-indent: 10px;
          font-size: inherit;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
        }
      }
    }

    .flex-grid {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
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
