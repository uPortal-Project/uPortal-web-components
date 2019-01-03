<template>
  <div>
    <template v-if="!dashboard">
      <slot name="empty">
        <p>no results found</p>
      </slot>
    </template>

    <template v-else>
      <Slick
        ref="slick"
        :options="slickOptions"
        @afterChange="handleAfterChange"
      >
        <div
          class="slick-item"
          v-for="region of dashboard.folders"
          :key="region.name"
        >
          <span
            v-for="card of region.content"
            :key="card.name"
          >
            <PortletRenderer :portlet-html-url="card.url" />
          </span>
        </div>
      </Slick>
      <ul ref="buttons">
        <li
          v-for="(region, index) in dashboard.folders"
          :key="region.name"
          :id="'dashboardCarousel-' + index"
        >
          <button
            :class="{ 'active': activeIndex === index }"
            class="btn"
            @click="clickHandler(index)"
          >
            {{ region.name }}
          </button>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import Slick from 'vue-slick';
import PortletRenderer from './PortletRenderer';
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
        arrows: true,
      },
      activeIndex: 0,
    };
  },
  components: {
    Slick,
    PortletRenderer,
  },
  methods: {
    clickHandler(slideIndex) {
      this.activeIndex = slideIndex;
      this.$refs.slick.goTo(slideIndex);
    },
    handleAfterChange(event, slick, currentSlide) {
      this.activeIndex = currentSlide;
    },
  },
  props: {
    layoutApiUrl: {
      type: String,
      default: '/uPortal/api/v4-3/dlm/layout.json',
    },
    debug: {
      type: Boolean,
      default: true,
    },
  },
  asyncComputed: {
    layout: {
      async get() {
        const {layoutApiUrl, debug} = this;
        try {
          const headers = debug
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
        layout: {
          regions: [],
        },
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
      const dashboard = this.layout.layout.regions.find(
          (region) => region.name === 'dashboard'
      );

      if (!dashboard) {
        console.error('Dashboard data not loaded');
      }
      return dashboard;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../node_modules/slick-carousel/slick/slick.css';
@import '../../node_modules/slick-carousel/slick/slick-theme.css';

.slick-item {
  display: flex !important;
  justify-content: space-evenly;

  > span {
    flex: 1 0 auto;
    background-color: #fff;
    margin: 0 20px;
    padding: 10px;
    border: 1px solid #ccc;
  }
}

.slick-dots {
  li {
    button::before {
      font-size: 16px;
    }
  }
}

.slick-slider {
  margin: 0 40px;
}

.slick-slider /deep/ .slick-prev,
.slick-slider /deep/ .slick-next {
  height: 30px;
  width: 30px;
  background-color: black;
  border-radius: 50%;
}

.slick-slider /deep/ .slick-prev {
  left: -35px;
}

.slick-slider /deep/ .slick-next {
  right: -35px;
}

.slick-slider /deep/ .slick-prev::before,
.slick-slider /deep/ .slick-next::before {
  color: white;
  font-family: inherit;
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;

  li {
    list-style-type: none;
    margin: 0 10px;
    min-width: 125px;
  }
}

.btn {
  color: #fff;
  background-color: #007bff;
  display: block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid #007bff;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  width: 100%;

  &.active {
    background-color: #fff;
    color: #000;
  }
}
</style>
