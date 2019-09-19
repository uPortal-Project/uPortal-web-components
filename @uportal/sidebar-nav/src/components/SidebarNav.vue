<template>
  <div class="sidebar-nav">
    <div class="sidebar-nav__search"></div>

    <div class="sidebar-nav__accordions">
      <accordion v-for="n in 4" :key="n" />
    </div>

    <div class="sidebar-nav__info-box">
      <h6>Need Help?</h6>
      <a class="button" href="#">Grant Process Guide</a>
      <a href="#">Contacts &raquo;</a>
    </div>
  </div>
</template>

<script>
import Accordion from './Accordion';

export default {
  name: 'SidebarNav',
  props: {},
  components: {
    Accordion
  }
};
</script>

<style lang="scss" scoped>
.sidebar-nav {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 330px;
  padding: 15px;
  background-color: #435982;
  overflow: auto;

  &__accordions {
    margin: 0 0 15px;
  }

  &__info-box {
    background-color: #042158;
    color: white;
    padding: 20px 15px;
    border-radius: 5px;

    h6 {
      margin: 0 0 15px;
      font-size: 1rem;
      font-weight: normal;
      text-transform: uppercase;
    }
    .button {
      display: block;
      background-color: #194f9a;
      color: white;
      padding: 10px;
      margin: 0 0 10px;
      text-align: center;
      border-radius: 5px;
    }
    a {
      color: #aadbf6;
      margin-left: 15px;
      text-decoration: none;
    }
  }
}
</style>
