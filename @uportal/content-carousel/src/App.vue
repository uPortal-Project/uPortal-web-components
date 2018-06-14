<template>
  <main>
    <section>
      <ContentCarousel
        :rss="'/hero.rss'"
        :slickOptions="heroOptions"
        :carouselHeight="heroHeight"
        :fitToContainer="true" />
    </section>
    <!--
    <section class="content">
      <ContentCarousel
        :rss="'/content.rss'"
        :slickOptions="contentOptions"
        :carouselHeight="contentHeight" />
    </section>
    -->
  </main>
</template>
<script lang="ts" src="./App.ts">
</script>
<style lang="scss">
body {
  background: #dddddd;
  height: 100%;
  main {
    & > section {
      margin-bottom: 50px;

      &.content {
        width: 720px;
        margin: auto;
      }
    }
  }
}
</style>
