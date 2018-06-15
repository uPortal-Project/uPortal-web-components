<template>
    <div :class="mainClass" >
        <div class="icon"><div class="img-wrapper"><img ng-if="iconUrl !== null" :src="iconUrl"></div></div>
        <div class="title">{{title}}</div>
        <div class="description" v-line-clamp:20="2">{{description}}</div>
        <div class="action">
            <div v-if="canFavorites" class="favorites" @click="toggleFavorite(fname, $event)" :title="isFavorite ? translator('message.favorites.remove') : translator('message.favorites.add')">
                <i v-if="isFavorite" class="material-icons">star</i><i v-else class="material-icons">star_border</i>
            </div>
        </div>
    </div>
</template>

<script>
import lineClamp from "vue-line-clamp";

export default {
  name: "PortletCard",
  props: {
    iconUrl: String,
    fname: String,
    title: String,
    description: String,
    categories: Array,
    canFavorites: Boolean,
    isFavorite: Boolean,
    isSmall: Boolean,
    translator: Function
  },
  components: {
    lineClamp
  },
  computed: {
    mainClass: function() {
      var appClass =
        "portlet-card " +
        this.fname.toLowerCase() +
        " " +
        this.categories.join(" ").toLowerCase();
      if (this.isSmall) {
        appClass += " small-card";
      }
      return appClass;
    }
  },
  methods: {
    toggleFavorite: function(fname, event) {
      event.preventDefault();
      if (this.isFavorite) {
        this.removeFromFavorite(fname);
      } else {
        this.addToFavorite(fname);
      }
      return false;
    },
    addToFavorite: function(fname) {
      console.log("Adding to favorites " + fname);
      if (process.env.NODE_ENV !== "development") {
        const options = {
          method: "POST",
          body: null,
          headers: {
            "Content-Type": "application/json"
          }
        };
        fetch(
          process.env.VUE_APP_PORTAL_BASE_URL +
            process.env.VUE_APP_PORTAL_CONTEXT +
            process.env.VUE_APP_FAVORITE_ADD_URI +
            fname,
          options
        )
          .then(res => res.json())
          .then(res => console.log(res))
          .catch(err => console.log("Error, with message:", err.statusText));
      }
    },
    removeFromFavorite: function(fname) {
      console.log("Removing to favorites " + fname);
      if (process.env.NODE_ENV !== "development") {
        const options = {
          method: "POST",
          body: null,
          headers: {
            "Content-Type": "application/json"
          }
        };
        fetch(
          process.env.VUE_APP_PORTAL_BASE_URL +
            process.env.VUE_APP_PORTAL_CONTEXT +
            process.env.VUE_APP_FAVORITE_RM_URI +
            fname,
          options
        )
          .then(res => res.json())
          .then(res => console.log(res))
          .catch(err => console.log("Error, with message:", err.statusText));
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
}
.portlet-card:hover {
  /*transform: scale(1.1);*/
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
    0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
}
.portlet-card > .icon,
.portlet-card > .title,
.portlet-card > .description {
  display: block;
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
}
.portlet-card > .action {
  color: rgba(0, 0, 0, 0.34);
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px;
}
.portlet-card > .action i.material-icons {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 44px;
  height: 44px;
}
.portlet-card > .icon > div {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 83px;
  width: 83px;
  margin-top: -30px;
  background-color: #25b3f5;
  border-radius: 10px;
}

.portlet-card > .icon > div img {
  height: 48px;
  width: auto;
}

.portlet-card > .title {
  padding-top: 1.5em;
  font-size: 18px;
  font-weight: bold;
}
.portlet-card > .description {
  padding-top: 1em;
}

.portlet-card.small-card {
  width: 120px;
  height: auto;
  background-color: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
}
.portlet-card.small-card > .description {
  display: none !important;
}
.portlet-card.small-card > .icon > div {
  height: 83px;
  margin: 0;
}
.portlet-card.small-card > .icon > img {
  margin-top: 0;
}
.portlet-card.small-card > .title {
  padding-top: 0.8em;
  font-weight: 500;
}
.portlet-card.small-card > .action {
  display: none !important;
}
</style>
