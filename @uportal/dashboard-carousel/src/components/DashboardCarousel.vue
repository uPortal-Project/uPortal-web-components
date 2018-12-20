<template>
  <div>
    <Slick
      ref="slick"
      :options="slickOptions"
    >
      <div
        class="slick-item"
        v-for="region of dashboard.folders"
        :key="region.name"
      >
        <div
          v-for="card of region.content"
          :key="card.name"
        >
          <h3>{{ card.name }}</h3>
        </div>
      </div>
    </Slick>
    <ul>
      <li
        v-for="(region, index) in dashboard.folders"
        :key="region.name"
      >
        <button
          class="btn"
          @click="clickHandler(index)"
        >
          {{ region.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import Slick from 'vue-slick';
import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';
import ky from 'ky';
import oidc from '@uportal/open-id-connect';

Vue.use(AsyncComputed);

export default {
  name: 'DashboardCarousel',
  data: function() {
    return {
      slickOptions: {
        dots: false,
      },
    };
  },
  components: {
    Slick,
  },
  methods: {
    clickHandler(slideIndex) {
      this.$refs.slick.goTo(slideIndex);
    },
  },
  props: {
    layoutApiUrl: {
      type: String,
      default: 'layout.json',
    },
  },
  asyncComputed: {
    layout: {
      async get() {
        const {layoutApiUrl, debug} = this;
        try {
          const headers = true
            ? {}
            : {
              'Authorization': 'Bearer ' + (await oidc()).encoded,
              'content-type': 'application/jwt',
            };
          return await ky.get(layoutApiUrl, {headers}).json();
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
          return [];
        }
      },
      default: {
        regions: [],
      },
    },
  },
  computed: {
    dashboard() {
      const slick = this.$refs.slick || {
        currentSlide: () => {},
        destroy: () => {},
        create: () => {},
        goTo: () => {},
      };
      const currentIndex = slick.currentSlide();

      slick.destroy();
      this.$nextTick(() => {
        slick.create();
        slick.goTo(currentIndex, true);
      });
      return (
        this.layout.regions.find((region) => region.name === 'dashboard') || {}
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../node_modules/slick-carousel/slick/slick.css';
@import '../../node_modules/slick-carousel/slick/slick-theme.css';

.btn {
  background-color: aquamarine;
}
</style>
