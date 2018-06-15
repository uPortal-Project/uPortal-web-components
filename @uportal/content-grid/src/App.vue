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
                <div class="flex-item ma-3 text-xs-center" v-for="portlet in filteredPortlets" :key="portlet.fname">
                    <a class="no-style" v-bind:href="portlet.renderUrl" v-bind:target="portlet.layoutObject.altMaxUrl ? '_blank' : '_self'">
                        <portlet-card :icon-url="portlet.layoutObject.iconUrl !== null ? computeIconUrl(portlet.layoutObject.iconUrl) : null"
                                      :title="portlet.title" :description="portlet.description" :categories="portlet.categories" :isSmall="isSmall"
                                      :fname="portlet.fname" :can-favorites="portlet.canAdd" :is-favorite="isFavorite(portlet.fname)" v-bind:translator="translate">
                        </portlet-card>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PortletCard from "./components/PortletCard.vue";
import oidc from "@uportal/open-id-connect/src/open-id-connect";
import i18n from "./i18n.js";

const checkStatus = function(response) {
  console.log("check response ", response);
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJSON = function(response) {
  console.log("Parse response for json ", response);
  return response.json();
};

export default {
  components: {
    PortletCard
  },
  data() {
    return {
      portlets: [],
      isSmall: false,
      filteredPortlets: []
    };
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.isXs);
      this.isXs();
      this.fetchPortlets();
    });
    console.log(this, i18n.t("message.services.title"));
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
    computeIconUrl: function(url) {
      if (url != null && !url.startsWith("http")) {
        return process.env.VUE_APP_PORTAL_BASE_URL + url;
      }
      return url;
    },
    isFavorite: function(fname) {
      //console.log("TODO implementation is needed");
      console.log("look for " + fname + " is favorites ?");
      return false;
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
            portlet.title
              .toLowerCase().indexOf(filterValue.toLowerCase()) !== -1 ||
            portlet.name
              .toLowerCase().indexOf(filterValue.toLowerCase()) !== -1 ||
            portlet.description
              .toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          );
        });
      } else {
        this.filteredPortlets = this.portlets;
      }
      this.filteredPortlets.sort(this.sortPortlets);
    },
    sortPortlets: function(a, b) {
      return a.title.localeCompare(b.title);
    },
    fetchPortlets() {
      if (process.env.NODE_ENV === "development") {
        let datas = require("./assets/browseable.json");

        this.portlets = datas.portlets;
        this.filteredPortlets = this.portlets;
        this.filteredPortlets.sort(this.sortPortlets);
      } else {
        oidc({
          userInfoApiUrl: process.env.VUE_APP_PORTAL_BASE_URL +
          process.env.VUE_APP_PORTAL_CONTEXT + '/api/v5-1/userinfo', timeout: 180000
        })
          .then(token => {
          const options = {
            method: "GET",
            credentials: "same-origin",
            headers: {
              Authorization: "Bearer " + token.encoded,
              "Content-Type": "application/json"
            }
          };
        fetch(
          process.env.VUE_APP_PORTAL_BASE_URL +
          process.env.VUE_APP_PORTAL_CONTEXT +
          process.env.VUE_APP_BROWSABLE_PORTLETS_URI,
          options
        )
          .then(checkStatus)
          .then(parseJSON)
          .then(data => {
          console.log("getting data 1 ", data.portlets);
        this.portlets = data.portlets;
        console.log("getting data 2", this.filteredPortlets);
        this.filteredPortlets = this.portlets;
        console.log("getting data 3", this.filteredPortlets);
        this.filteredPortlets.sort(this.sortPortlets);
        console.log("getting data 4", this.filteredPortlets);
      })
        ;


      })

      .
        catch(function (err) {
          console.log(err);
        });
      }
    }
  },
  computed: {
    getAllCategories: function() {
      console.log(this.portlets);
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
  },
  created() {
    /*if (process.env.NODE_ENV === "development") {
      let datas = require("./assets/browseable.json");

      this.portlets = datas.portlets;
      this.filteredPortlets = this.portlets;
      this.filteredPortlets.sort(this.sortPortlets);
    } else { */
        //this.fetchPortlets();
    //}
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
