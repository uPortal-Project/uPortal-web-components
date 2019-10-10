<template>
  <div id="sidebar-nav">
    <sidebar-nav />
  </div>
</template>

<script>
import SidebarNav from './components/SidebarNav';

export default {
  name: 'app',
  components: {
    SidebarNav
  }
};
</script>

<style>
a,
a:visited {
  text-decoration: none;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
}
</style>
