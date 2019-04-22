<template>
  <div :class="$style.userInfo">
    <div
      ref="dropdownMenu"
      :class="$style.dropdown">
      <div
        :class="
          menuIsDark
            ? [$style.lighter, $style.dropdownMenu]
            : $style.dropdownMenu
        "
        @click="toggleDropdown($event)">
        <div :class="$style.userName">
          <span :class="$style.label">{{ displayName }}</span>
        </div>
        <div :class="$style.userAvatar">
          <img
            :src="picture"
            :alt="'avatar'"
            :style="'height: ' + avatarSize + '; width: ' + avatarSize + ';'">
        </div>
      </div>
      <div
        :class="
          visible
            ? $style.dropdownContent
            : [$style.dropdownContent, $style.closed]
        ">
        <div :class="$style.userDetails">
          <div :class="$style.userAvatar">
            <a
              v-if="moreLink"
              :href="moreLink"
              :title="translate('userInfoPortletUrl.title')"><img
                :src="picture"
                :alt="'avatar'"></a>

            <img
              v-else
              :src="picture"
              :alt="'avatar'" >
          </div>
          <div :class="$style.wrapperInfo">
            <div :class="$style.userName">
              <span :class="$style.label">{{ displayName }}</span>
            </div>
            <div :class="$style.userMail">
              <span :class="$style.label">{{ email }}</span>
            </div>
          </div>
        </div>
        <div
          v-if="logoutLink"
          :class="$style.signOut">
          <a
            :href="logoutLink"
            :title="translate('buttons.logout')"><span>{{ translate('buttons.logout') }}</span><i
              :class="[$style.fa, $style.faSignOut]"
              aria-hidden="true"/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '../i18n.js';

export default {
  name: 'EyebrowUserInfo',
  props: {
    displayName: {type: String, required: true},
    email: {type: String, default: ''},
    picture: {type: String, required: true},
    moreLink: {type: String, default: null},
    logoutLink: {type: String, default: null},
    menuIsDark: {type: Boolean, default: true},
    avatarSize: {type: String, default: '28px'},
  },
  data() {
    return {
      visible: false,
    };
  },
  created() {
    document.addEventListener('click', this.documentClick);
  },
  destroyed() {
    // important to clean up!!
    document.removeEventListener('click', this.documentClick);
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
      if (
        nativeEvent.composed &&
        typeof nativeEvent.composedPath === 'function'
      ) {
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
      const el = this.$refs.dropdownMenu;
      const target = this.getEventTarget(e);
      if (el !== target && !el.contains(target)) {
        this.visible = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" module>
$grey: #d0d0d0;

.user-info {
  /* used fonts and content : we need to add them for the build to be able to use it into shadow DOM and from parent html */
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome, sans-serif;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .fa-sign-out::before {
    content: '\f08b';
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
      color: #000;

      &.lighter {
        color: white;
      }

      :not(:first-child) {
        margin-left: 5px;
      }

      > .user-name {
        display: block;
      }

      > .user-avatar {
        display: flex;
        align-items: center;

        > img {
          background-color: $grey;
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
      box-shadow: 0 5px 5px -3px #888, 5px 5px 5px -4px #888;
      z-index: 15;
      right: 0;
      text-align: initial;
      visibility: visible;
      opacity: 1;
      transition: opacity 800ms, visibility 800ms;
      animation: fade 800ms;

      &.closed {
        visibility: hidden;
        opacity: 0;
      }

      > div.user-details {
        padding: 25px 10px;
        display: flex;
        flex-flow: row nowrap;
        font-size: 14px;

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
            background-color: $grey;
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
        display: flex;
        background-color: $grey;
        width: 100%;
        text-align: right;

        &:hover {
          background-color: darken($grey, 10%);
        }

        > a {
          padding-right: 15px;
          text-decoration: none;
          color: inherit;
          width: 100%;

          > * {
            line-height: 32px;
            vertical-align: top;
          }

          > span {
            text-transform: uppercase;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
