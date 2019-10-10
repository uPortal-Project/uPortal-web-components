<template>
  <div class="sidebar-nav">
    <div class="sidebar-nav__accordions">
      <accordion
        v-for="accordionItem in accordions"
        :accordionItem="accordionItem"
        :key="accordionItem.accordionID"
      />
    </div>

    <div class="sidebar-nav__info-box">
      <h6>Need Help?</h6>
      <a class="button" href="#">Grant Process Guide</a>
      <a href="#">Contacts &raquo;</a>
    </div>
  </div>
</template>

<script>
import Accordion from './Accordion';

export default {
  name: 'SidebarNav',
  props: ['portlet-api-url'],
  data() {
    return {
      accordions: [
        {
          accordionID: 1,
          accordionTitle: 'Pre-Award'
        },
        {
          accordionID: 2,
          accordionTitle: 'Financial Management'
        },
        {
          accordionID: 3,
          accordionTitle: 'Personnel Management'
        },
        {
          accordionID: 4,
          accordionTitle: 'Compliance and Training'
        },
        {
          accordionID: 5,
          accordionTitle: 'Facilities and Lab Management'
        },
        {
          accordionID: 6,
          accordionTitle: 'Industry Engagement'
        },
        {
          accordionID: 7,
          accordionTitle: 'Accordion Item'
        }
      ]
    };
  },
  components: {
    Accordion
  }
};
</script>

<style lang="scss" scoped>
.sidebar-nav {
  &__accordions {
    margin: 0 0 15px;
  }

  &__info-box {
    background-color: #042158;
    color: white;
    padding: 20px 15px;
    border-radius: 5px;

    h6 {
      margin: 0 0 15px;
      font-size: 1rem;
      font-weight: normal;
      text-transform: uppercase;
    }
    .button {
      display: block;
      background-color: #194f9a;
      color: white;
      padding: 10px;
      margin: 0 0 10px;
      text-align: center;
      border-radius: 5px;
    }
    a {
      color: #aadbf6;
      margin-left: 15px;
      text-decoration: none;
    }
  }
}
</style>
