<template>
  <div class="atv-outer">
    <div class="atv-spinner p-3">
      <div class="spinner-grow text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div class="atv-inner" style="display: none;">
      <slot>
        <h3>No Content Specified</h3>
        <p>Please specify content for this component using the default slot.</p>
      </slot>
    </div>
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
          },
          validateStatus: function(status) {
            // Always resolve the promise, even on non-200 status codes.
            return true;
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
        el: this.$el.querySelector('.atv-inner'),
        data: () => ({ data: this.json })
      });

      this.$el.querySelector('.atv-inner').style.display = 'block';
      this.$el.querySelector('.atv-spinner').style.display = 'none';
    }
  },

  // entrypoint
  mounted() {
    return this.processTemplate();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* HACK: needed to scope styles for browsers that do not have shadow dom support */
.atv-outer /deep/ {
  @import '../../node_modules/bootstrap/scss/bootstrap';
}
</style>
