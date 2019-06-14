import AsyncComputed from 'vue-async-computed';
import Vue from 'vue';
import oidc from '@uportal/open-id-connect';
import ky from 'ky';

Vue.use(AsyncComputed);

export default {
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
  },
  asyncComputed: {
    layoutApi: {
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
    layoutDocument: {
      async get() {
        const {layoutDocUrl, debug} = this;
        try {
          const headers = debug
            ? {}
            : {
              'Authorization': 'Bearer ' + (await oidc()).encoded,
              'content-type': 'application/jwt',
            };
          return (await ky.get(layoutDocUrl, {headers}).json()).layout;
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
          return [];
        }
      },
      default: [],
    },
    async layout() {
      const [doc, api] = await Promise.all([
        this.layoutDocument,
        this.layoutApi,
      ]);

      const region = api.regions.find(
          (region) => region.name === this.regionName
      );
      if (!region) {
        return;
      }

      const parsed = region.folders.map((folder) => ({
        ...folder,
        content: folder.content.map((card) => ({
          ...card,
          ...doc.find((obj) => obj.fname === card.fname),
        })),
      }));

      return parsed;
    },
  },
};
