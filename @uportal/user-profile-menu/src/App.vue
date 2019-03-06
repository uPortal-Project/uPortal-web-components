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
        oidc-url="/proxy/uPortal/api/v5-1/userinfo"
        avatar-size="30px"
      >
        <template v-slot:header>
          User Profile
        </template>
        <template>
          <a href="/manage" icon="user"
            >Manage Account <i class="fa fa-user"></i
          ></a>
          <a href="/manage" icon="cog"
            >Another link <i class="fa fa-cog"></i
          ></a>
          <a href="/manage" icon="comments"
            >Chat <i class="fa fa-comments"></i
          ></a>
        </template>
        <template v-slot:footer>
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
import UserProfileMenu from './components/ProfileMenu.vue';

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
  padding: 0px;
  margin: 0px;
}
.example-heading {
  background-color: #001c4d;
  padding: 12px;
}
</style>
