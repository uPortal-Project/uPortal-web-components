<template>
  <main>
    <section>
      <ContentCarousel
        :type="'rss'"
        :source="'/hero.rss'"
        :slickOptions="heroOptions"
        :carouselHeight="heroHeight"
        :fitToContainer="true"
        :textAlign="alignText" />
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
        :type="'rss'"
        :source="'/empty.rss'"
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
    <section class="content">
      <ContentCarousel
        :type="'passthrough'"
        :slickOptions="contentOptions"
        :carouselHeight="portletHeight">
        <div class="slick-item">
          arbitrary
        </div>
        <div class="slick-item">
          content
        </div>
        <div class="slick-item">
          displayed
        </div>
        <div class="slick-item">
          as
        </div>
        <div class="slick-item">
          slides
        </div>
      </ContentCarousel>
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
