<template>
  <div class="sidebar-nav" v-if="linkData">
    <div class="sidebar-nav__accordions">
      <accordion
        v-for="(accordionItem, index) in linkData.topics"
        :topic="accordionItem"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import Accordion from './Accordion';

export default {
  name: 'SidebarNav',
  props: {
    linkDataUrl: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      linkData: null
    };
  },
  components: {
    Accordion
  },
  mounted() {
      if (this.linkDataUrl) {
          fetch(this.linkDataUrl)
              .then((response) => {
                  // Catch HTTP errors
                  if (!response.ok) {
                      throw Error(response.statusText);
                  }
                  return response;
              })
              .then(r => r.json())
              .then(json => {
                  this.linkData = json;
              })
              // Catch fetch errors
              // eslint-disable-next-line no-console
              .catch( error => console.error(error) );
      } else {
          // eslint-disable-next-line no-console
          console.error('Empty or missing link-data-url attribute on <sidebar-nav>');
      }
  }
};
</script>

<style lang="scss" scoped>
  .sidebar-nav__accordions {
    margin: 0 0 15px;
  }
</style>
