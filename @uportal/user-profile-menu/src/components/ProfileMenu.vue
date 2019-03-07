<template>
  <div class="profile-menu-container" ref="userProfileMenu">
    <button class="profile-trigger" @click="toggleMenu()">
      <div class="avatar">
        <img :src="avatarUrl" v-if="avatarUrl && !useInitials" />
        <span class="fallback" v-else>{{ fallbackText }}</span>
      </div>
      <span>{{ displayText }}</span>
    </button>
    <div class="profile-dropdown" v-if="menuOpen">
      <div class="profile-dropdown-section profile-dropdown-header">
        <slot name="header"></slot>
      </div>
      <div class="profile-dropdown-section profile-dropdown-content">
        <slot name="default"></slot>
      </div>
      <div class="profile-dropdown-section profile-dropdown-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import oidc from '@uportal/open-id-connect';

export default {
  name: 'profile',
  data() {
    return {
      menuOpen: false,
      user: {
        name: '',
        family_name: '',
        given_name: '',
        image: null
      },
      dataLoaded: false,
      hasError: false,
      errorMessage: ''
    };
  },
  computed: {
    avatarUrl: function() {
      return this.user.image;
    },
    displayText: function() {
      return this.user.name;
    },
    fallbackText: function() {
      return (
        this.user.family_name.substr(0, 1) + this.user.given_name.substr(0, 1)
      );
    }
  },
  props: {
    useInitials: { type: Boolean, default: false, required: false },
    oidcUrl: {
      type: String,
      default: '/uPortal/api/v5-1/userinfo'
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleOutsideClick(event) {
      const menu = this.$refs.userProfileMenu;
      const target = event.target;
      const shadow = target.shadowRoot ? target.shadowRoot : false;
      if (menu !== target && !shadow && !menu.contains(target)) {
        this.menuOpen = false;
      }
    },
    handleOidcError() {
      this.hasError = true;
      this.errorMessage = 'There was a problem authorizing this request.';
    },
    async getToken() {
      try {
        return await oidc({ userInfoApiUrl: this.oidcUrl });
      } catch (err) {
        this.handleOidcError(err);
      }
    },
    async fetchMenuData() {
      const token = this.debug ? null : (await this.getToken()).decoded;
      this.user = token;
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick, false);
    this.fetchMenuData();
  }
};
</script>
<style lang="scss">
.profile-menu-container {
  color: white;
  display: flex;
  margin-left: auto;
  position: relative;
  padding: 0;

  a {
    text-decoration: none;
    color: #495057;
    color: var(--user-prof-menu-fg-color, #495057);
  }

  .profile-trigger {
    color: #fff;
    color: var(--user-prof-fg-color, #fff);
    padding: 0;
    margin-left: auto;
    background: transparent;
    border: 0 none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;

    .avatar {
      $default-avatar-size: 30px;

      border-radius: 50%;
      overflow: hidden;
      margin: 0 0.2em;
      background-color: #ccc;
      background-color: var(--user-prof-fallback-bg-color, #ccc);
      color: #333;
      color: var(--user-prof-fallback-fg-color, #333);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      width: var(--user-prof-avatar-size, $default-avatar-size);
      height: 30px;
      height: var(--user-prof-avatar-size, $default-avatar-size);
      font-size: 30px;
      font-size: var(--user-prof-avatar-size, $default-avatar-size);

      .fallback {
        font-size: 0.5em;
      }

      img {
        object-fit: cover;
      }
    }
  }

  .profile-dropdown {
    position: absolute;
    top: 125%;
    right: 0;
    z-index: 1000;
    display: flex;
    min-width: 10rem;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: hsl(210, 11%, 15%);
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.05);
    width: 220px;
    flex-direction: column;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  }

  .profile-dropdown-section {
    &.profile-dropdown-footer,
    &.profile-dropdown-header {
      padding: 1em;
      font-size: 1.2em;
      background-color: #eee;
      background-color: var(--user-prof-header-bg-color, #eee);
      color: #000;
      color: var(--user-prof-header-fg-color, #000);
    }

    &.profile-dropdown-content {
      display: flex;
      flex-direction: column;
      padding-left: 0;
      margin-bottom: 0;

      a {
        $border-style: 1px solid rgba(0, 0, 0, 0.125);

        align-items: center;
        justify-content: space-between;
        display: flex;
        padding: 0.75rem 1.25rem;
        margin-bottom: -1px;
        background-color: #fff;
        border-top: $border-style;
        border-bottom: $border-style;
        border-right: 0;
        border-left: 0;
        color: #495057;
        color: var(--user-prof-menu-fg-color, #495057);
        text-align: inherit;
        text-decoration: none;

        &:hover {
          z-index: 1;
          color: #495057;
          color: var(
            --user-prof-menu-fg-hover-color,
            var(--user-prof-menu-fg-color, #495057)
          );
          text-decoration: none;
          background-color: #f8f9fa;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
