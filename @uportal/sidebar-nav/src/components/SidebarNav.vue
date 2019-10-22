<template>
  <div class="sidebar-nav">
    <div class="sidebar-nav__accordions" v-if="linkDataUrl !== null">
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
      // linkData: {
      //   topics: [
      //     {
      //       title: 'Pre-Award',
      //       links: [
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         }
      //       ]
      //     },
      //     {
      //       title: 'Financial Management',
      //       links: [
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         }
      //       ]
      //     },
      //     {
      //       title: 'Personnel Management',
      //       links: [
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         }
      //       ]
      //     },
      //     {
      //       title: 'Compliance and Training',
      //       links: [
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         }
      //       ]
      //     },
      //     {
      //       title: 'Facilities and Lab Management',
      //       links: [
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         }
      //       ]
      //     },
      //     {
      //       title: 'Industry Engagement',
      //       links: [
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         }
      //       ]
      //     },
      //     {
      //       title: 'Accordion Item',
      //       links: [
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         },
      //         {
      //           title: 'Link Title',
      //           url: '/'
      //         }
      //       ]
      //     }
      //   ]
      // }
    };
  },
  components: {
    Accordion
  },
  mounted() {
    fetch(this.linkDataUrl)
      .then(r => r.json())
      .then(json => {
        this.linkData = json;
      });
    // response => {
    //     console.log('Error loading json:', response)
    // });
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
