<template>
  <main>
    <section>
      <ContentCarousel
        :type="'rss'"
        :source="'/hero.rss'"
        :slickOptions="heroOptions"
        :carouselHeight="heroHeight"
        :fitToContainer="true" />
    </section>
    <section class="content">
      <ContentCarousel
        :type="'rss'"
        :source="'/content.rss'"
        :slickOptions="contentOptions"
        :carouselHeight="contentHeight" />
    </section>
    <section class="content">
      <ContentCarousel
        :type="'portlet'"
        :source="'/portletRegistry.json'"
        :slickOptions="portletOptions"
        :carouselHeight="portletHeight" />
    </section>
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
