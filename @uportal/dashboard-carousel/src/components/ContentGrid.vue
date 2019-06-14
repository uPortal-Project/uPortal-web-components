<template>
  <div>
    <template v-if="!dashboard">
      <slot name="empty">
        <p>no results found</p>
      </slot>
    </template>

    <template v-else>
      <div class="card-list">
        <template v-for="region of dashboard.folders">
          <div
            v-for="card of region.content"
            :key="card.name"
            class="card-container"
          >
            <div class="card">
              <div class="card-body">
                <PortletRenderer
                  :portlet-html-url="card.url"
                  :debug="debug"
                />
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import PortletRenderer from './PortletRenderer';
import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';
import ky from 'ky';
import oidc from '@uportal/open-id-connect';

Vue.use(AsyncComputed);

export default {
  name: 'DashboardContentGraid',
  data: function() {
    return {
      activeIndex: 0,
    };
  },
  components: {
    PortletRenderer,
  },
  methods: {},
  props: {
    layoutApiUrl: {
      type: String,
      default: '/uPortal/api/v4-3/dlm/layout.json',
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
          return (await ky.get(layoutApiUrl, {headers}).json()).layout;
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
      const dashboard = this.layout.regions.find(
          (region) => region.name === this.regionName
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
.card-list {
  display: flex;
  display: var(--dcg-container-flex, flex);
  flex-flow: row wrap;
  flex-flow: var(--dcg-container-flex-flow, row wrap);
  justify-content: center;
  justify-content: var(--dcg-container-justify, center);

  & * {
    box-sizing: border-box;
  }

  .card-container {
    flex: 1 0 33%;
    flex: var(--dcg-card-flex, 1 0 33%);
  }
}

.card-container {
  display: flex;
  flex-direction: column;
  padding: 8px;
  padding: var(--dcg-card-spacing, 8px);
  box-sizing: border-box;
}

.card {
  min-width: 0;
  word-wrap: break-word;
  background-color: white;
  background-color: var(--dcg-card-bg-color, white);
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border: var(--dcg-card-border, 1px solid rgba(0, 0, 0, 0.125));
  border-radius: 0.25rem;
  border-radius: var(--dcg-card-border-radius, 0.25rem);
  box-sizing: border-box;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
  padding: var(--dcg-card-body-padding, 1.25rem);
}

@media (max-width: 767.98px) {
  .card-list {
    .card-container {
      flex: 1 1 100%;
    }
  }
}

/* Small devices (landscape phones, less than 768px) */
</style>
