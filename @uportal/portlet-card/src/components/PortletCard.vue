<template>
    <div :class="mainClass" >
        <div class="icon"><div class="img-wrapper" :style="'background-color:' + iconBackgroundColor"><img ng-if="iconUrl !== null" :src="iconUrl"></div></div>
        <div class="title">{{title}}</div>
        <div class="description" v-line-clamp:20="2">{{description}}</div>
        <div class="action">
             <action-favorites v-if="canFavorite" :fname="fname" :is-favorite="isFavorite"></action-favorites>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import lineClamp from "vue-line-clamp";
import ActionFavorites from "action-favorites/src/components/ActionFavorites";

Vue.use(lineClamp);

export default {
  name: "PortletCard",
  props: {
    iconUrl: String,
    fname: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    categories: Array,
    canFavorite: {type: Boolean, default: true},
    isFavorite: {type: Boolean, default: false},
    isSmall: {type: Boolean, default: false},
    cssClass: { type: String, default: "portlet-card" },
    iconBackgroundColor: {type: String, default: "Transparent"}
  },
  components: {
    'action-favorites' : ActionFavorites
  },
  computed: {
    mainClass: function() {
      var appClass =
        this.cssClass +
        " " +
        this.fname.toLowerCase() +
        " " +
        (this.categories ? this.categories.join(" ").toLowerCase() : '');
      if (this.isSmall) {
        appClass += " small-card";
      }
      return appClass;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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

  &:hover {
    cursor: pointer;
    /*transform: scale(1.1);*/
    box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
      0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
  }

  > .icon,
  > .title,
  > .description {
    display: block;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
  }

  > .action {
    color: rgba(0, 0, 0, 0.34);
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
  }

  > .icon {
    > div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 83px;
      width: 83px;
      margin-top: -30px;
      border-radius: 10px;

      img {
        height: 48px;
        width: auto;
      }
    }
  }
  > .title {
    padding-top: 1.5em;
    font-size: 18px;
    font-weight: bold;
  }

  > .description {
    padding-top: 1em;
  }

  &.small-card {
    width: 120px;
    height: auto;
    background-color: transparent;
    border: none;
    box-shadow: none;
    padding: 0;

    > .description {
      display: none !important;
    }

    > .icon {
      > div {
        margin: 0;
      }
    }

    > .title {
      padding-top: 0.8em;
      font-weight: 500;
    }

    > .action {
      display: none !important;
    }
  }
}
</style>
