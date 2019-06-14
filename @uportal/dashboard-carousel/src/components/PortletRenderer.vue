<template>
  <div v-if="portletContent">
    <div v-html="portletContent" />
  </div>
  <div v-else>
    <div v-html="portlet" />
  </div>
</template>

<script>
import ky from 'ky';
import oidc from '@uportal/open-id-connect';

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
        const {portletHtmlUrl, debug} = this;
        try {
          const headers = debug
            ? {}
            : {
              'Authorization': 'Bearer ' + (await oidc()).encoded,
              'content-type': 'application/jwt',
            };
          return await ky.get(portletHtmlUrl, {headers}).text();
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
