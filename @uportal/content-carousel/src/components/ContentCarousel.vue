<template src="./ContentCarousel.html"></template>
<style lang="scss">
@import '../../node_modules/slick-carousel/slick/slick.css';
@import '../../node_modules/slick-carousel/slick/slick-theme.css';

.slick-container.responsive {
  .slick-list {
    width: 100%;

    img {
      max-width: 100%;
      height: inherit;
      vertical-align: middle;
    }
  }

  .slick-prev {
    left: 25px;
    z-index: 2;
  }

  .slick-next {
    right: 25px;
    z-index: 2;
  }
}
</style>
<script lang="ts" src="./ContentCarousel.ts">
</script>
