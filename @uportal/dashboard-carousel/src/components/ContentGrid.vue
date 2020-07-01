<template>
  <div>
    <template v-if="!dashboard || !dashboard.length">
      <slot name="empty">
        <p>no results found</p>
      </slot>
    </template>

    <template v-else>
      <div class="card-list">
        <template v-for="region of dashboard">
          <div
            v-for="card of region.content"
            :key="card.name"
            class="card-container"
          >
            <div class="card">
              <div class="card-body">
                <template v-if="card.widgetTemplate">
                  <WidgetRenderer
                    :template="card.widgetTemplate"
                    :config="card.widgetConfig"
                    :url="card.widgetUrl"
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
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import PortletRenderer from '@uportal/content-renderer/src/components/PortletRenderer';
import WidgetRenderer from '@uportal/content-renderer/src/components/WidgetRenderer';
import LayoutDataMixin from '../mixins/LayoutData';

export default {
  name: 'DashboardContentGrid',
  mixins: [LayoutDataMixin],
  components: {
    PortletRenderer,
    WidgetRenderer,
  },
  methods: {},
  props: {
    layoutApiUrl: {
      type: String,
      default: '/uPortal/api/v4-3/dlm/layout.json',
    },
    layoutDocUrl: {
      type: String,
      default: '/uPortal/api/layoutDoc',
    },
    regionName: {
      type: String,
      default: 'dashboard',
    },
    debug: {
      type: Boolean,
      default: false,
    },
    useLayoutDocData: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dashboard() {
      if (!this.layout) {
        console.error('Dashboard data not loaded');
      }
      return this.layout;
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
  align-items: stretch;

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

  > .card {
    flex: 1 0 auto;
  }
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
