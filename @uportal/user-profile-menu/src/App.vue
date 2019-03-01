<template>
  <header class="example-heading">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous"
    />
    <UserProfileMenu
      display-text="Ryan Mathis"
      fallback-text="RM"
      avatar-size="50px"
    >
      <template #header>
        User Profile
      </template>
      <template #footer>
        <a href="/uPortal/logout"
          >Sign Out <i class="fas fa-sign-out-alt"></i
        ></a>
      </template>
    </UserProfileMenu>
  </header>
</template>

<script>
// avatar-url="http://lorempixel.com/100/100"
import UserProfileMenu from './components/UserProfileMenu.vue';

export default {
  name: 'app',
  components: {
    UserProfileMenu
  }
};
</script>

<style>
html {
  font-size: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
body {
  color: white;
  font-size: 14px;
}
.example-heading {
  background-color: #001c4d;
  padding: 12px;
}
</style>
