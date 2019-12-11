<template>
  <div class="sidebar-nav" v-if="linkDataUrl">
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
              .then(r => r.json())
              .then(json => {
                  this.linkData = json;
              });
      }
  }
};
</script>

<style lang="scss">
a,
a:visited {
  text-decoration: none;
}
</style>
<style lang="scss" scoped>
.sidebar-nav {
  &__accordions {
    margin: 0 0 15px;
  }
}
</style>
