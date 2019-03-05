<template>
  <main>
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
        avatar-size="40px"
      >
        <template #header>
          User Profile
        </template>
        <template>
          <UserProfileMenuItem href="/manage"
            >Manage Account <i class="fas fa-user"
          /></UserProfileMenuItem>
          <UserProfileMenuItem href="/manage"
            >Another link <i class="fas fa-cog"
          /></UserProfileMenuItem>
          <UserProfileMenuItem
            >Some Tools <i class="fas fa-tools"
          /></UserProfileMenuItem>
          <UserProfileMenuItem href="/manage"
            >Chat <i class="fas fa-comments"
          /></UserProfileMenuItem>
        </template>
        <template #footer>
          <a href="/uPortal/logout"
            >Sign Out <i class="fas fa-sign-out-alt"></i
          ></a>
        </template>
      </UserProfileMenu>
    </header>
  </main>
</template>

<script>
// avatar-url="http://lorempixel.com/100/100"
import UserProfileMenu from './components/UserProfileMenu.vue';
import UserProfileMenuItem from './components/UserProfileMenuItem.vue';

export default {
  name: 'app',
  components: {
    UserProfileMenu,
    UserProfileMenuItem
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
  padding: 0px;
  margin: 0px;
}
.example-heading {
  background-color: #001c4d;
  padding: 12px;
}
</style>
