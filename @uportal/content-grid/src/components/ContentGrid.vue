<template>
    <section class="content-grid">
        <div v-bind:class="{'small' : isSmall}">
            <div class="title">
                <h1>{{ translate("message.services.title") }}</h1>
                <div class="filter">
                    <input :title="translate('message.services.filter')" type="text" v-on:input="sourceChanged" list="list" :placeholder="translate('message.services.filter')"/>
                    <!--<select v-on:select="sourceChanged">-->
                    <datalist id='list'>
                        <!--<option></option>-->
                        <option v-for="category in getAllCategories" :value="category" :label="category" :key="category"></option>
                    </datalist>
                    <!--</select>-->
                </div>
            </div>
            <div class="flex-grid">
                <div class="flex-item ma-3 text-xs-center" v-for="portlet in filteredPortlets" :key="portlet.id">
                    <a class="no-style" v-bind:href="portlet.renderUrl" v-bind:target="portlet.layoutObject.altMaxUrl ? '_blank' : '_self'">
                        <portlet-card :portlet-desc="portlet" :is-favorite="isFavorite(portlet.fname)" :is-small="isSmall"></portlet-card>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PortletCard from "portlet-card/src/components/PortletCard.vue";
import i18n from "../i18n.js";

export default {
  name: "ContentGrid",
  props: {
    portlets: { type: Array, required: true, default: () => [] },
    favorites: { type: Array, required: true, default: () => [] }
  },
  components: {
    PortletCard
  },
  data() {
    return {
      isSmall: false,
      filteredPortlets: this.portlets
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.isXs);
      this.isXs();
    });
  },
  methods: {
    translate: function(text, lang) {
      return i18n.t(text, lang);
    },
    getWindowWidth: function() {
      return this.$el.clientWidth;
    },
    isXs: function() {
      this.isSmall = this.getWindowWidth() < 620;
    },
    isFavorite: function(fname) {
      return this.favorites.indexOf(fname) > -1;
    },
    sourceChanged: function(event) {
      var filterValue = event.target.value;
      if (filterValue !== null) {
        this.filteredPortlets = this.portlets.filter(function(portlet) {
          var cats = portlet.categories.filter(
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
      var cats = [];
      for (var i = 0, size = this.portlets.length; i < size; i++) {
        for (
          var j = 0, categories = this.portlets[i].categories;
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

<style scoped>
.content-grid * {
  font-family: Roboto, sans-serif;
}
.content-grid {
  background-color: #b7b7b7;
  min-width: 250px;
}
.content-grid > div.small {
  background-color: #e1e1e1;
}
.content-grid > div {
  display: block;
  padding: 1.5em;
}
.content-grid > div > .title {
  margin: 5px 20px;
  text-transform: uppercase;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.content-grid > div > .title > .filter {
  margin: auto 0;
  width: 100%;
  max-width: 300px;
}
.content-grid > div > .title > .filter > input {
  line-height: 32px;
  border-radius: 48px;
  border: none;
  width: 100%;
  text-indent: 10px;
  font-size: inherit;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.content-grid .flex-grid {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
.content-grid .flex-grid .flex-item {
  margin: 20px 5px;
}
.content-grid a.no-style {
  text-decoration: none;
  color: inherit;
}
</style>
