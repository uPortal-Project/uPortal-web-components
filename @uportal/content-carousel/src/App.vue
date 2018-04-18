<template>
  <carousel
    :perPage="1"
    :perPageCustom="[[480, 2], [768, 3]]"
    :navigationEnabled="true"
    :paginationEnabled="false"
  >
    <slide>
      Slide 1 Content
    </slide>
    <slide>
      Slide 2 Content
    </slide>
    <slide>
      Slide 2 Content
    </slide>
    <slide>
      Slide 2 Content
    </slide>
    <slide>
      Slide 2 Content
    </slide>
    <slide>
      Slide 2 Content
    </slide>
    <slide>
      Slide 2 Content
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>
