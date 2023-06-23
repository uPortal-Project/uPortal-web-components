<template>
  <main>
    <header class="example-heading">
      <UserProfileMenu oidc-url="/proxy/uPortal/api/v5-1/userinfo">
        <template v-slot:header>
          User Profile
        </template>
        <template>
          <div class="list-group list-group-flush">
            <a
              href="/manage"
              class="list-group-item list-group-item-action d-flex justify-content-between"
              >Manage Account <i class="fa fa-user"></i
            ></a>
            <a
              href="/manage"
              class="list-group-item list-group-item-action d-flex justify-content-between"
              >Another link <i class="fa fa-cog"></i
            ></a>
            <a
              href="/manage"
              class="list-group-item list-group-item-action d-flex justify-content-between"
              >Chat <i class="fa fa-comments"></i
            ></a>
          </div>
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
import UserProfileMenu from './components/ProfileMenu.vue';

export default {
  name: 'app',
  components: {
    UserProfileMenu
  }
};
</script>

<style>

:root {
  --user-profile-dropdown-item-bg-color: black;
  --user-profile-dropdown-item-fg-color: white;
  --user-profile-dropdown-item-bg-color-hover: white;
  --user-profile-dropdown-item-fg-color-hover: black;
}

html {
  font-size: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

body {
  color: white;
  font-size: 14px;
  padding: 0;
  margin: 0;
}

.example-heading {
  background-color: #001c4d;
  padding: 12px;
}
</style>
