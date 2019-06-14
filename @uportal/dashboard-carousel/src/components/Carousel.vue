<template>
  <div>
    <template v-if="!dashboard || !dashboard.length">
      <slot name="empty">
        <p>no results found</p>
      </slot>
    </template>

    <template v-else>
      <Slick
        ref="slick"
        :options="computedSlickOptions"
        @afterChange="handleAfterChange"
      >
        <div
          class="slick-item"
          v-for="region of dashboard"
          :key="region.name"
        >
          <div
            v-for="card of region.content"
            :key="card.name"
          >
            <template v-if="card.widgetTemplate">
              <WidgetRenderer
                :template="card.widgetTemplate"
                :config="card.widgetConfig"
                :url="card.widgetURL"
                :type="card.widgetType"
                :debug="debug"
              />
            </template>
            <template v-else>
              <PortletRenderer
                :portlet-html-url="card.url"
                :debug="debug"
              />
            </template>
          </div>
        </div>
      </Slick>
      <ul
        ref="buttons"
        v-if="!computedSlickOptions.dots && dashboard.length > 1"
      >
        <li
          v-for="(region, index) in dashboard"
          :key="region.name"
          :id="'dashboardCarousel-' + index"
        >
          <button
            :class="{ active: activeIndex === index }"
            class="btn"
            @click="clickHandler(index)"
            v-html="region.name"
          />
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import Slick from 'vue-slick';
import PortletRenderer from './PortletRenderer';
import WidgetRenderer from './WidgetRenderer';
import LayoutData from '../mixins/LayoutData';

export default {
  name: 'DashboardCarousel',
  mixins: [LayoutData],
  data: function() {
    return {
      activeIndex: 0,
    };
  },
  components: {
    Slick,
    PortletRenderer,
    WidgetRenderer,
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
    slickOptions: {
      type: [String, Object],
      default: () => ({
        dots: false,
        arrows: true,
      }),
    },
    debug: {
      type: Boolean,
      default: false,
    },
    regionName: {
      type: String,
      default: 'dashboard',
    },
  },
  computed: {
    computedSlickOptions() {
      const options =
        typeof this.slickOptions === 'string'
          ? JSON.parse(this.slickOptions)
          : this.slickOptions;
      return {slick: this.$el || '', swipeToSlide: true, ...options};
    },
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
      if (!this.layout) {
        console.error('Dashboard data not loaded');
        return;
      }

      return this.layout;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../node_modules/slick-carousel/slick/slick.css';
@import '../../node_modules/slick-carousel/slick/slick-theme.css';

.slick-track {
  background-color: aquamarine;
}

.slick-list {
  width: 100%;
}

.slick-initialized {
  display: flex;
  justify-content: center;
  align-items: center;

  .slick-slide {
    display: none !important;

    .slick-current {
      display: block !important;
    }
  }

  .slick-list {
    flex: 1 1 auto;
  }

  .slick-arrow {
    flex: 0 0 auto;
    width: 50px;
  }
}

.slick-item {
  display: flex !important;
  justify-content: space-evenly;

  > div {
    flex: 1 1 auto;
    background-color: #fff;
    margin: 0 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border: var(--dash-carousel-item-border, 1px solid #ccc);
    max-width: 33%;
    border-radius: 0;
    border-radius: var(--dash-carousel-item-border-radius, 0);
    display: inline-flex;
    flex-direction: column;
  }
}

.slick-dots {
  li {
    button::before {
      font-size: 16px;
    }
  }
}

.slick-slider /deep/ .slick-prev,
.slick-slider /deep/ .slick-next {
  position: relative;
  height: inherit;
  width: inherit;
  top: inherit;

  &::before {
    color: #666;
    font-family: inherit;
    font-size: 5rem;
    font-weight: 700;
  }
}

.slick-slider /deep/ .slick-prev {
  &::before {
    content: '\3008';
  }
}

.slick-slider /deep/ .slick-next {
  &::before {
    content: '\3009';
  }
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;

  li {
    list-style-type: none;
    margin: 0 10px;
    min-width: 125px;
  }
}

.btn {
  color: #fff;
  color: var(--dash-carousel-btn-fg-color, #fff);
  background-color: #007bff;
  background-color: var(--dash-carousel-btn-bg-color, #007bff);
  display: block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: #007bff;
  border: 1px solid var(--dash-carousel-btn-bg-color, #007bff);
  padding: 0.375rem 0.75rem;
  padding: var(--dash-carousel-btn-padding, 0.375rem 0.75rem);
  font-size: 1rem;
  font-size: var(--dash-carousel-btn-font-size, 1rem);
  line-height: 1.5;
  border-radius: 0.25rem;
  width: 100%;

  &:hover {
    background-color: #fff;
    /* stylelint-disable-next-line declaration-colon-newline-after */
    background-color: var(
      --dash-carousel-btn-bg-hover-color,
      var(--dash-carousel-btn-bg-active-color, #fff)
    );
    color: #000;
    /* stylelint-disable-next-line declaration-colon-newline-after */
    color: var(
      --dash-carousel-btn-fg-hover-color,
      var(--dash-carousel-btn-fg-active-color, #000)
    );
  }

  &.active {
    background-color: #fff;
    background-color: var(--dash-carousel-btn-bg-active-color, #fff);
    color: #000;
    color: var(--dash-carousel-btn-fg-active-color, #000);
  }
}

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  .slick-item {
    flex-direction: column;

    & > span {
      max-width: none;
    }
  }

  ul {
    flex-direction: column;

    li {
      margin-top: 10px;
    }
  }
}
</style>
