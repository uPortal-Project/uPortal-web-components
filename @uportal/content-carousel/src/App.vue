<template>
  <carousel
    :perPage="1"
    :perPageCustom="[[480, 2], [768, 3]]"
    :navigationEnabled="true"
    :paginationEnabled="false"
  >
    <slide v-for="item in items" :key="item.id">
      <a v-bind:href="item.destinationHref">
        <img width="100%" v-bind:src="item.imageSrc" v-bind:alt="item.imageDescription">
      </a>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      items: [
        {
          id: "unique1",
          destinationHref: "https://example.com",
          imageSrc:
            "https://images.unsplash.com/photo-1519104482037-8b4a7c13ad29",
          imageDescription: "example"
        },
        {
          id: "unique2",
          destinationHref: "https://example.com",
          imageSrc:
            "https://images.unsplash.com/photo-1508485654983-d3ff70e70357",
          imageDescription: "example"
        },
        {
          id: "unique3",
          destinationHref: "https://example.com",
          imageSrc:
            "https://images.unsplash.com/photo-1504786328163-b16f428adc28",
          imageDescription: "example"
        },
        {
          id: "unique4",
          destinationHref: "https://example.com",
          imageSrc:
            "https://images.unsplash.com/photo-1522205940279-d75807ebcd91",
          imageDescription: "example"
        },
        {
          id: "unique5",
          destinationHref: "https://example.com",
          imageSrc:
            "https://images.unsplash.com/photo-1504466664756-1adbe6d13b36",
          imageDescription: "example"
        }
      ]
    };
  }
};
</script>
