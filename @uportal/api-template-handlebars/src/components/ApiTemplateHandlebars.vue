<template>
  <h2>Hello World!</h2>
</template>

<script>
import oidc from '@uportal/open-id-connect';
import { get } from 'axios';

export default {
  name: 'ApiTemplateHandlebars',

  props: {
    debug: {
      type: Boolean,
      default: false
    },
    userInfoApiUrl: {
      type: String,
      default: '/uPortal/api/v5-1/userinfo'
    },
    dataApiUrl: {
      type: String,
      default: undefined
    }
  },

  data() {
    return {
      // JSON from dataApiUrl
      json: []
    };
  },

  methods: {
    async fetchJson() {
      // Read props
      const { debug, userInfoApiUrl, dataApiUrl } = this;
      try {
        // Obtain an OIDC Id Token, except in debug mode
        const { encoded: token } = debug
          ? { encoded: null }
          : await oidc({ userInfoApiUrl });
        // Gather JSON data
        const { data: json } = await get(dataApiUrl, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
            'content-type': 'application/jwt'
          }
        });
        // store notifications to state... necessary?
        // this.json = json;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    }
  },

  // entrypoint
  created() {
    return this.fetchJson();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
