<template>
  <div class="widget">
    <div v-html="html" />
    <div class="links" :v-if="configuration.links.length > 0">
      <a
        v-for="(link, index) in configuration.links"
        :key="index"
        :href="link.href"
        :title="link.title"
        :target="link.target"
        :aria-label="'Launch ' + link.title"
      >
        {{ config.launchText }}
      </a>
    </div>
  </div>
</template>

<script>
import ky from 'ky';
import oidc from '@uportal/open-id-connect';
import Handlebars from 'handlebars/lib/handlebars';
import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';
Vue.use(AsyncComputed);

export default {
  name: 'WidgetRenderer',
  props: {
    template: {
      type: String,
      required: true,
    },
    config: {
      type: Object,
      default: () => ({ links: [] }),
    },
    type: String,
    url: String,
    debug: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    html() {
      return Handlebars.compile(this.template)({
        $root: {
          tabContext: this.type,
        },
        content: this.content,
        config: this.configuration,
      });
    },
    configuration() {
      return this.config || { links: [] };
    },
  },
  asyncComputed: {
    content: {
      async get() {
        const { url, debug } = this;
        if (url) {
          try {
            const headers = debug
              ? {}
              : {
                  Authorization: 'Bearer ' + (await oidc()).encoded,
                  'content-type': 'application/jwt',
                };
            return await ky.get(url, { headers }).json();
          } catch (err) {
            // eslint-disable-next-line no-console
            console.error(err);
            return '';
          }
        }
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.widget {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  color: var(--widget-fg-color, #333);

  & a {
    color: #333;
    color: var(--widget-title-fg-link-color, #333);
    text-decoration: none;

    &:hover {
      color: #444;
      color: var(--widget-title-fg-link-hover-color, #444);
      text-decoration: underline;
    }
  }

  > *:first-child {
    flex-grow: 1;
  }
}
</style>
