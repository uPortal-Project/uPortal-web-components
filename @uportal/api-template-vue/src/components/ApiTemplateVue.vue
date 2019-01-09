<template>
  <div id="ath-container">
    <slot>
      <h3>No Content Specified</h3>
      <p>Please specify content for this component using the default slot.</p>
    </slot>
  </div>
</template>

<script>
import oidc from '@uportal/open-id-connect';
import { get } from 'axios';
import Vue from 'vue';

export default {
  name: 'ApiTemplateVue',

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
        // store notifications to state
        this.json = json;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    },
    async processTemplate() {
      // Load data from the server
      await this.fetchJson();
      // Render the slot content as a new Vue instance
      new Vue({
        el: this.$el,
        data: this.json
      });
    }
  },

  // entrypoint
  mounted() {
    return this.processTemplate();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
