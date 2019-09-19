<template>
  <div class="accordion" :class="{ open: isOpen }">
    <a href="#" class="accordion__header" @click.prevent="isOpen = !isOpen"
      >Accordion Header {{ n }}</a
    >
    <ul>
      <li v-for="link in 4" :key="link">
        <a href="#">Link {{ link }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  data() {
    return {
      isOpen: false
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
