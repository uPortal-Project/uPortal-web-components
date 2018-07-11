<template>
  <div id="app">
    <header>
      <eyebrow-user-infos display-name="John Doe" picture="https://lycees.netocentre.fr/portail/media/skins/respondr/common/images/noPictureUser.svg" email="john.doe@edu.univ.org"
                  logout-link="/uPortal/Logout" avatarSize="48px"></eyebrow-user-infos>
    </header>
    <div class="content">
      a content for test !
    </div>
  </div>
</template>

<script>
import EyebrowUserInfos from './components/EyebrowUserInfos'

export default {
  name: 'app',
  components: {
    EyebrowUserInfos
  }
}
</script>

<style>
#app > header {
    display: block;
    width: 100%;
    height: 48px;
    position: fixed;
  background-color: #25b2f3;

}
#app > header > .user-infos {
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
