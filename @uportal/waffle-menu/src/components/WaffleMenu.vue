<template>
  <div
    class="waffle-menu-container"
    ref="waffleMenu"
  >
    <button
      class="waffle-trigger"
      @click="toggleMenu()"
    >
      <FontAwesomeIcon
        icon="th"
        :color="buttonColor"
        size="2x"
      />
      <div v-if="menuOpen">
        <div class="waffle-triangle-black" />
        <div
          class="waffle-triangle"
          :style="{
            borderColor:
              'transparent transparent ' + menuBackgroundColor + ' transparent',
          }"
        />
      </div>
    </button>
    <ul
      class="waffle-dropdown"
      v-if="menuOpen && dataLoaded"
      :style="{ backgroundColor: menuBackgroundColor }"
    >
      <li
        class="waffle-menu-item"
        v-for="(item, index) in this.dataMenuItems"
        :key="index"
      >
        <a
          :href="item.link"
          :background="item.image"
          :target="item.targetLink"
          :rel="item.targetLink === '_blank' ? 'noopener noreferrer' : ''"
        >
          <img
            :src="item.image"
            alt=""
          > <span>{{ item.label }}</span>
        </a>
      </li>
      <li
        class="waffle-dropdown-footer"
        v-for="(item, index) in this.dataMenuFooter"
        :key="index"
      >
        <a
          :href="item.link"
          :target="item.targetLink"
          :rel="item.targetLink === '_blank' ? 'noopener noreferrer' : ''"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import oidc from '@uportal/open-id-connect';
import {portletRegistryToArray} from '@uportal/portlet-registry-to-array';
import get from 'lodash/get';
// import PropTypes from 'prop-types';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTh} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faTh);

export default {
  name: 'WaffleMenu',
  components: {
    FontAwesomeIcon,
  },
  props: {
    url: {
      type: String,
      default: '/uPortal/api/v4-3/dlm/portletRegistry.json',
    },
    oidcUrl: {
      type: String,
      default: '/uPortal/api/v5-1/userinfo',
    },
    buttonColor: {
      type: String,
      default: '#fff',
    },
    menuBackgroundColor: {
      type: String,
      default: '#fff',
    },
    debug: {
      type: Boolean,
      default: false,
    },
    defaultIcon: {
      type: String,
      default:
        '/ResourceServingWebapp/rs/tango/0.8.90/32x32/categories/applications-other.png',
    },
    truncateLength: {
      type: Number,
      default: 50,
    },
  },

  computed: {
    dataMenuItems: function() {
      return this.data.filter((datum) => datum.type === 'box');
    },
    dataMenuFooter: function() {
      return this.data.filter((datum) => datum.type === 'footer');
    },
  },
  data() {
    return {
      menuOpen: false,
      data: [],
      dataItems: [],
      dataLoaded: false,
      hasError: false,
      errorMessage: '',
    };
  },
  methods: {
    handleOidcError(err) {
      console.error(err);
      this.hasError = true;
      this.errorMessage = 'There was a problem authorizing this request.';
    },
    handleWflError(err) {
      this.hasError = true;
      this.errorMessage = 'There was a problem cooking your waffle.';
    },
    async getToken() {
      try {
        return await oidc({userInfoApiUrl: this.oidcUrl});
      } catch (err) {
        console.error(err);
        this.handleOidcError(err);
      }
    },
    truncateTitle(title) {
      return title.substring(0, this.truncateLength + 1) + '...';
    },
    wafflePress(registry) {
      const menuItems = portletRegistryToArray(registry).map(
          ({fname, parameters, title}) => {
            const imgUrl = get(parameters, 'iconUrl.value') || this.defaultIcon;

            const alternativeMaximizedLink = get(
                parameters,
                'alternativeMaximizedLink.value'
            );

            let targetLinkValue = '_self';
            if (alternativeMaximizedLink) {
              targetLinkValue = '_blank';
            }

            return {
              link: alternativeMaximizedLink || '/uPortal/p/' + fname,
              image: imgUrl
              ? process.env.NODE_ENV === 'development'
                ? 'proxy/' + imgUrl
                : imgUrl
              : undefined,
              label: this.truncateTitle(title),
              type: 'box',
              targetLink: targetLinkValue,
            };
          }
      );

      this.data = menuItems;
      this.dataLoaded = true;
    },
    async fetchMenuData() {
      const token = this.debug ? null : (await this.getToken()).encoded;

      try {
        const response = await fetch(this.url, {
          credentials: 'same-origin',
          headers: {
            'Authorization': 'Bearer ' + token,
            'content-type': 'application/jwt',
          },
        });

        if (!response.ok || response.status !== 200) {
          throw new Error(response.statusText);
        }

        const payload = await response.json();

        this.wafflePress(payload);
      } catch (err) {
        console.error(err);
      }
    },
    // toggle the menu
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    // close the menu if we're clicking outside the menu or trigger
    handleOutsideClick(event) {
      const menu = this.$refs.waffleMenu;
      const target = event.target;
      const shadow = target.shadowRoot ? target.shadowRoot : false;
      if (menu !== target && !shadow && !menu.contains(target)) {
        this.menuOpen = false;
      }
    },
  },
  mounted() {
    // Initialize Menu Date when Mounted
    document.addEventListener('click', this.handleOutsideClick, false);
    this.fetchMenuData();
  },
};
</script>
<style lang="scss">
.waffle-menu-container {
  display: flex;
  margin-left: auto;
  position: relative;
  line-height: 0;
  padding: 0;
}

.waffle-trigger {
  width: 25px;
  height: 25px;
  line-height: 0;
  padding: 0;
  margin-left: auto;
  background: transparent;
  border: 0 none;

  svg {
    padding: 0;
    margin: 0;
  }
}

.waffle-dropdown {
  position: absolute;
  top: 150%;
  right: 0;
  z-index: 1000;
  display: flex;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.05);
  width: 220px;
  flex-flow: row wrap;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
}

.waffle-menu-item {
  display: block;
  flex: 0 0 46%;
  margin: 0 2%;
  line-height: 1rem;

  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  }

  a {
    display: block;
    padding: 5px;
    margin: 0;
    position: relative;
    text-decoration: none;

    img {
      width: 60%;
      margin: 0 auto;
      display: block;
    }

    span {
      bottom: 0;
      display: block;
      color: #333;
      text-align: center;
      font-size: 80%;
      padding: 3px 0;
    }
  }
}

.waffle-dropdown-footer {
  display: block;
  flex: 1 0 100%;
  line-height: 1rem;
  margin-top: 4px;

  a {
    display: block;
    font-size: 80%;
    font-weight: 400;
    text-align: center;
    padding: 10px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: #333;

    &:hover {
      background: white;
    }
  }
}

.waffle-triangle-black {
  border-color: transparent transparent #fff transparent;
  border-style: dashed dashed solid;
  border-width: 0 8.5px 8.5px;
  border-bottom-color: rgba(0, 0, 0, 0.25);
  width: 0;
  height: 0;
  position: absolute;
  top: 31px;
  right: 20px;
  z-index: 2000;
}

.waffle-triangle {
  border-color: transparent transparent #fff transparent;
  border-style: dashed dashed solid;
  border-width: 0 8.5px 8.5px;
  width: 0;
  height: 0;
  position: absolute;
  top: 32px;
  right: 20px;
  z-index: 2000;
}
</style>
