<template>
  <div v-html="portlet" />
</template>

<script>
import ky from 'ky';
import oidc from '@uportal/open-id-connect';
import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';
Vue.use(AsyncComputed);

export default {
  name: 'PortletRenderer',
  props: {
    portletHtmlUrl: String,
    portletContent: String,
    debug: {
      type: Boolean,
      default: false,
    },
  },
  asyncComputed: {
    portlet: {
      async get() {
        const { portletHtmlUrl, debug } = this;
        try {
          const headers = debug
            ? {}
            : {
                Authorization: 'Bearer ' + (await oidc()).encoded,
                'content-type': 'application/jwt',
              };
          return await ky.get(portletHtmlUrl, { headers }).text();
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
          return '';
        }
      },
    },
  },
};
</script>
