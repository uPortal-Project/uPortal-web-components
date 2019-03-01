<template>
  <div class="user-profile-menu-container" ref="userProfileMenu">
    <button class="user-profile-trigger" @click="toggleMenu()">
      <div class="avatar" :style="{ width: avatarSize, height: avatarSize }">
        <img :src="avatarUrl" v-if="avatarUrl" />
        <span class="fallback" v-else>{{ fallbackText }}</span>
      </div>
      <span>{{ displayText }}</span>
    </button>
    <div class="user-profile-dropdown" v-if="menuOpen">
      <div class="profile-dropdown-section profile-dropdown-heading">
        <slot name="header"> </slot>
      </div>
      <div>
        <slot></slot>
      </div>
      <div>
        <slot name="footer"> </slot>
      </div>
    </div>
  </div>
</template>
<script>
/*
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
library.add(faUser);
*/
export default {
  name: 'user-profile',
  components: {
    // FontAwesomeIcon,
  },
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.user-profile-menu-container {
  color: white;
  display: flex;
  margin-left: auto;
  position: relative;
  padding: 0;
}

.user-profile-trigger {
  color: var(--user-prof-fg-color, #ffffff);
  padding: 0;
  margin-left: auto;
  background: transparent;
  border: 0 none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1em;

  .avatar {
    border-radius: 50%;
    overflow: hidden;
    margin: 0em 0.5em;
    background-color: var(--user-prof-fallback-bg-color, #cccccc);
    color: var(--user-prof-fallback-fg-color, #333333);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8em;
    img {
      object-fit: cover;
    }
  }
}

.user-profile-dropdown {
  position: absolute;
  top: 150%;
  right: 0;
  z-index: 1000;
  display: flex;
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
  flex-direction: column;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
}
</style>
