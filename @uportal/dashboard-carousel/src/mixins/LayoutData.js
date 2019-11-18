import AsyncComputed from 'vue-async-computed';
import Vue from 'vue';
import oidc from '@uportal/open-id-connect';
import ky from 'ky';

Vue.use(AsyncComputed);

export default {
  props: {
    layoutApiUrl: {
      type: String,
      default: '/uPortal/api/v4-3/dlm/layout.json'
    },
    layoutDocUrl: {
      type: String,
      default: '/uPortal/api/layoutDoc'
    },
    regionName: {
      type: String,
      default: 'dashboard'
    },
    useLayoutDocData: {
      type: Boolean,
      default: false
    }
  },
  asyncComputed: {
    layoutApi: {
      async get() {
        const { layoutApiUrl, debug } = this;
        try {
          const headers = debug
            ? {}
            : {
                Authorization: 'Bearer ' + (await oidc()).encoded,
                'content-type': 'application/jwt'
              };
          return (await ky.get(layoutApiUrl, { headers }).json()).layout;
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
          return [];
        }
      },
      default: {
        regions: []
      }
    },
    layoutDocument: {
      async get() {
        const { layoutDocUrl, debug, useLayoutDocData } = this;
        try {
          const headers = debug
            ? {}
            : {
                Authorization: 'Bearer ' + (await oidc()).encoded,
                'content-type': 'application/jwt'
              };
          return useLayoutDocData
            ? (await ky.get(layoutDocUrl, { headers }).json()).layout
            : Promise.resolve({ layout: [] });
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
          return [];
        }
      },
      default: { layout: [] }
    },
    async layout() {
      const promises = [this.layoutApi, this.layoutDocument];

      const [api, doc] = await Promise.all(promises);

      const region = api.regions.find(
        region => region.name === this.regionName
      );
      if (!region) {
        return;
      }

      const parsed = this.useLayoutDocData
        ? region.folders.map(folder => ({
            ...folder,
            content: folder.content.map(card => ({
              ...card,
              ...doc.find(obj => obj.fname === card.fname)
            }))
          }))
        : region.folders;

      return parsed;
    }
  }
};
