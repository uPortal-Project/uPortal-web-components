<template>
  <div class="user-info">
    <div class="dropdown" ref="dropdownMenu">
      <div class="dropdown-menu" :class="menuIsDark ? 'lighter' : ''" @click="toggleDropdown($event)">
        <div class="user-name"><span class="label">{{displayName}}</span></div>
        <div class="user-avatar"><img :src="picture" :alt="'avatar'" :style="'height: ' + avatarSize + '; width: ' + avatarSize + ';'"/></div>
      </div>
      <div v-if="visible" class="dropdown-content">
        <div class="user-details">
          <div class="user-avatar">
            <a v-if="moreLink" :href="moreLink" :title="translate('userInfoPortletUrl.title')"><img :src="picture" :alt="'avatar'"/></a>
            <img v-else :src="picture" :alt="'avatar'"/>
          </div>
          <div class="wrapper-info">
            <div class="user-name"><span class="label">{{displayName}}</span></div>
            <div class="user-mail"><span class="label">{{email}}</span></div>
          </div>
        </div>
        <div v-if="logoutLink" class="sign-out">
          <a :href="logoutLink" :title="translate('buttons.logout')"><span>{{translate('buttons.logout')}}</span><i class="fa fa-sign-out" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "../i18n.js"

export default {
  name: 'EyebrowUserInfo',
  props: {
    displayName: { type: String, required: true },
    email: String,
    picture: { type: String, required: true },
    moreLink: String,
    logoutLink: String,
    menuIsDark: { type: Boolean, default: true },
    avatarSize: { type: String, default: "28px"}
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    translate(text, lang) {
      return i18n.t(text, lang);
    },
    toggleDropdown(e) {
      e.preventDefault();
      this.visible = !this.visible;
    },
    getEventTarget(nativeEvent) {
      let target = nativeEvent.target || window;

      // If composed / inside open shadow-dom use first item of composed path #9242
      if (nativeEvent.composed && typeof nativeEvent.composedPath === 'function') {
        const path = nativeEvent.composedPath();
        target = path[0];
      }

      // Normalize SVG <use> element events #4963
      if (target.correspondingUseElement) {
        target = target.correspondingUseElement;
      }

      // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
      // @see http://www.quirksmode.org/js/events_properties.html
      return target.nodeType === 3 ? target.parentNode : target;
    },
    documentClick(e) {
      let el = this.$refs.dropdownMenu;
      let target = this.getEventTarget(e);
      if (( el !== target) && !el.contains(target)) {
        this.visible=false
      }
    }
  },
  created () {
      document.addEventListener('click', this.documentClick);
  },
  destroyed () {
    // important to clean up!!
    document.removeEventListener('click', this.documentClick)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .user-info {
    // used fonts and content : we need to add them for the build to be able to use it into shadow DOM and from parent html
    .fa {
      display: inline-block;
      font: normal normal normal 14px/1 FontAwesome;
      font-size: inherit;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .fa-sign-out:before {
      content: "\f08b";
    }


    > .dropdown {
      height: 100%;
      width: 100%;
      position: relative;
      display: inline-block;
      right: 0;

      > .dropdown-menu {
        cursor: pointer;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        &.lighter {
          color: white;
        }
        :not(:first-child) {
          margin-left: 5px;
        }
        > .user-avatar {
          display: flex;
          align-items: center;
          > img {
            background-color: #d0d0d0;
            border-radius: 50%;
            overflow: hidden;
          }
        }

      }
      > .dropdown-content {

        position: absolute;

        min-width: 280px;
        background-color: #fff;
        color: #000;
        border: solid 1px #d0d0d0;
        box-shadow: 0 5px 5px -3px #888, 5px 5px 5px -4px #888;
        z-index: 15;
        right: 0;
        border-bottom-right-radius: 2px;
        border-bottom-left-radius: 2px;
        border-bottom: solid 1px #d0d0d0;
        border-left: solid 1px #d0d0d0;
        border-right: solid 1px #d0d0d0;
        text-align: initial;

        > div.user-details {
          padding: 25px 10px;
          display: flex;
          flex-flow: row nowrap;
          > * {
            margin: 0 0 0 15px;
          }
          > :last-child {
            margin-right: 15px;
          }

          > .user-avatar {
            height: 100%;
            display: flex;
            align-items: center;
            img {
              background-color: #d0d0d0;
              border-radius: 50%;
              height: 68px;
              width: 68px;
            }
          }

          .wrapper-info {
            display: flex;
            flex-flow: column nowrap;
            align-self: center;
          }
        }
        > .sign-out {
          display: block;
          background-color: #d0d0d0;
          width: 100%;
          text-align: end;
          > a {
            margin-right: 15px;
            text-decoration: none;
            color: inherit;
            display: inline-block;
            > * {
              line-height: 32px;
              vertical-align: top;
            }
            > span {
              text-transform: uppercase;
              margin-right: 5px ;
            }
          }
        }
      }
    }
  }
</style>
