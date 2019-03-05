<template>
  <div class="profile-menu-container" ref="userProfileMenu">
    <button class="profile-trigger" @click="toggleMenu()">
      <div
        class="avatar"
        :style="{
          width: avatarSize,
          height: avatarSize,
          'font-size': avatarSize
        }"
      >
        <img :src="avatarUrl" v-if="avatarUrl" />
        <span class="fallback" v-else>{{ fallbackText }}</span>
      </div>
      <span>{{ displayText }}</span>
    </button>
    <div class="profile-dropdown" v-if="menuOpen">
      <div class="profile-dropdown-section profile-dropdown-header">
        <slot name="header"></slot>
      </div>
      <div
        class="profile-dropdown-section profile-dropdown-content list-group list-group-flush"
      >
        <slot></slot>
      </div>
      <div class="profile-dropdown-section profile-dropdown-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'user-profile',
  data() {
    return {
      menuOpen: false
    };
  },
  props: {
    fallbackText: { type: String, required: false },
    displayText: { type: String, required: false },
    avatarUrl: { type: String, required: false },
    avatarSize: { type: String, default: '50px' }
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
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick, false);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.profile-menu-container /deep/ {
  @import '../../node_modules/bootstrap/scss/functions';
  @import '../../node_modules/bootstrap/scss/variables';
  @import '../../node_modules/bootstrap/scss/mixins';
  // bootstrap styles needed by component
  @import '../../node_modules/bootstrap/scss/list-group';
  @import '../../node_modules/bootstrap/scss/utilities';

  color: white;
  display: flex;
  margin-left: auto;
  position: relative;
  padding: 0;

  a {
    text-decoration: none;
  }

  .profile-trigger {
    color: var(--user-prof-fg-color, #ffffff);
    padding: 0;
    margin-left: auto;
    background: transparent;
    border: 0 none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;

    .avatar {
      border-radius: 50%;
      overflow: hidden;
      margin: 0em 0.2em;
      background-color: var(--user-prof-fallback-bg-color, #cccccc);
      color: var(--user-prof-fallback-fg-color, #333333);
      display: flex;
      align-items: center;
      justify-content: center;

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
    top: 150%;
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
      background-color: var(--user-prof-header-bg-color, #eee);
      color: var(--user-prof-header-fg-color, #000);
    }

    .list-group-item-action {
      width: auto;
    }
  }
}
</style>
