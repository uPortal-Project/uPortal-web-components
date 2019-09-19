<template>
  <div class="sidebar-nav">
    <div class="sidebar-nav__search"></div>

    <div class="sidebar-nav__accordions">
      <div class="accordion" v-for="n in 4" :key="n">
        <a href="#" class="accordion__header">Accordion Header {{ n }}</a>
        <ul>
          <li v-for="link in 4" :key="link">
            <a href="#">Link {{ link }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="sidebar-nav__info-box">
      <h6>Need Help?</h6>
      <a class="button" href="#">Grant Process Guide</a>
      <a href="#">Contacts &raquo;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarNav',
  props: {}
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
}

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

    .accordion {
      background-color: white;
      border: 1px solid #dfdfdf;
      border-radius: 5px;

      &__header {
        display: block;
        background-color: #b2c6db;
        padding: 25px 0 25px 35px;
        color: #042158;
      }

      > ul {
        display: block;
        list-style: none;
        margin: 0;
        padding: 20px;

        > li {
          display: block;
          color: #042158;
          padding: 10px 15px;
          border-bottom: 1px solid #bfbfbf;

          > a {
            color: #042158;
          }
        }
      }
    }
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
