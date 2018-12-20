<template>
  <div v-html="portletContent" />
</template>

<script>
import ky from 'ky';

export default {
  name: 'PortletRenderer',
  props: {
    portletHtmlUrl: String,
  },
  asyncComputed: {
    portletContent: {
      async get() {
        const {portletHtmlUrl, debug} = this;
        try {
          const headers = true
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

<style lang="sass" scoped>
    /* TODO add bootstrap? */
</style>
