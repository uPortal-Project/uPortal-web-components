<template>
  <div id="app">
    <header>
      <eyebrow-user-info display-name="John Doe" picture="https://lycees.netocentre.fr/images/icones//noPictureUser.svg" email="john.doe@edu.univ.org"
                  logout-link="/uPortal/Logout" avatarSize="48px" :menu-is-dark="false"></eyebrow-user-info>
    </header>
    <div class="content">
      a content for test !
    </div>
  </div>
</template>

<script>
import EyebrowUserInfo from './components/EyebrowUserInfo';

export default {
  name: 'app',
  components: {
    EyebrowUserInfo,
  },
};
</script>

<style>
#app > header {
  display: block;
  width: 100%;
  height: 48px;
  position: fixed;
  background-color: #25b2f3;
}
#app > header > * {
  float: right;
  margin-right: 25px;
}
#app > div {
  padding-top: 150px;
  height: 200vh;
  width: 100%;
  display: block;
}
</style>
