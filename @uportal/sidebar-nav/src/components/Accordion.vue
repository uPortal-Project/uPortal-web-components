<template>
  <div class="accordion" :class="{ open: isOpen }" v-if="accordionItem">
    <a href="#" class="accordion__header" @click.prevent="isOpen = !isOpen">{{
      accordionItem.accordionTitle
    }}</a>
    <ul>
      <li v-for="link in links" :key="link.linkID">
        <a href="#">{{ link.linkTitle }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: ['accordionItem'],
  data() {
    return {
      isOpen: false,
      links: [
        {
          linkID: 1,
          linkTitle: 'Link Title'
        },
        {
          linkID: 2,
          linkTitle: 'Link Title'
        },
        {
          linkID: 3,
          linkTitle: 'Link Title'
        },
        {
          linkID: 4,
          linkTitle: 'Link Title'
        },
        {
          linkID: 5,
          linkTitle: 'Link Title'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.accordion {
  background-color: white;
  border: 1px solid #dfdfdf;
  border-radius: 5px;

  &__header {
    display: block;
    background-color: #b2c6db;
    padding: 25px 0 25px 35px;
    color: #042158;
  }

  &.open {
    > ul {
      max-height: 1000px;
      transition: max-height 350ms ease-in-out;
    }
  }
  > ul {
    display: block;
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0 20px;

    // Styles for open/close animation
    max-height: 0;
    overflow: hidden;
    transition: max-height 350ms cubic-bezier(0, 1, 0, 1);
    backface-visibility: hidden;
    transform: scale(1);

    > li {
      display: block;
      color: #042158;
      padding: 10px 15px;
      border-bottom: 1px solid #bfbfbf;

      &:first-child {
        margin-top: 20px;
      }
      &:last-child {
        margin-bottom: 20px;
      }

      > a {
        color: #042158;
      }
    }
  }
}
</style>
