<template>
  <section>
    <h1>Recommended</h1>
    <carousel
      :perPage="1"
      :perPageCustom="[[1, 2], [480, 4], [768, 6]]"
      :navigationEnabled="true"
      :paginationEnabled="false"
    >
      <slide v-for="item in items" :key="item.id">
        <a v-bind:href="item.destinationHref">
          <img width="100%" v-bind:src="item.imageSrc" v-bind:alt="item.imageDescription">
          <section class="item-title">
            {{ item.imageDescription }}
          </section>
        </a>
      </slide>
    </carousel>
  </section>
</template>

<style>
html,
body {
  width: 100%;
  margin: 0;
  overflow: hidden;
}

body {
  font-family: sans-serif;
  padding: 10px;
}

h1 {
  margin-bottom: 0;
  margin-left: 10px;
}

a {
  text-decoration: none;
  color: black;
}

.item-title {
  padding: 2px 5px 5px 5px;
}

.VueCarousel-slide {
  /* border: 1px solid grey; */
  box-shadow: 0 2px 4px grey;
  border-radius: 2px;
  overflow: hidden;
  margin: 10px;
}
</style>

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
          imageDescription: "Big Sporting Event"
        },
        {
          id: "unique2",
          destinationHref: "https://example.com",
          imageSrc:
            "https://images.unsplash.com/photo-1508485654983-d3ff70e70357",
          imageDescription: "Campus Map"
        },
        {
          id: "unique3",
          destinationHref: "https://example.com",
          imageSrc:
            "https://images.unsplash.com/photo-1504786328163-b16f428adc28",
          imageDescription: "Parking Permit Renewal"
        },
        {
          id: "unique4",
          destinationHref: "https://example.com",
          imageSrc:
            "https://images.unsplash.com/photo-1522205940279-d75807ebcd91",
          imageDescription: "Computer Lab Update Hours"
        },
        {
          id: "unique5",
          destinationHref: "https://example.com",
          imageSrc:
            "https://images.unsplash.com/photo-1504466664756-1adbe6d13b36",
          imageDescription: "Photo of the week by John Doe"
        },
        {
          id: "unique6",
          destinationHref: "https://example.com",
          imageSrc:
            "https://images.unsplash.com/photo-1508693926297-1d61ee3df82a",
          imageDescription: "Fall Colors Trip"
        },
        {
          id: "unique7",
          destinationHref: "https://example.com",
          imageSrc:
            "https://images.unsplash.com/photo-1515614457209-3c7081d62743",
          imageDescription: "Special Guest Talk: Energy Conservation"
        },
        {
          id: "unique7",
          destinationHref: "https://example.com",
          imageSrc:
            "https://images.unsplash.com/photo-1490984902283-b7f4723f3955",
          imageDescription: "Please stop feeding the gulls"
        }
      ]
    };
  }
};
</script>
