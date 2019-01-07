<template>
  <select
    @change="fireFilterCategoryEvent()"
    class="grid-categories"
    v-model="filterCategory">
    <option
      class="default"
      selected
      value="">
      {{ translate('message.filter.selectOption') }}
    </option>
    <option
      v-for="category in allCategories"
      :value="category"
      :label="category"
      :key="category">
      {{ category }}
    </option>
  </select>
</template>

<script>
import i18n from '../i18n.js';

export default {
  name: 'ContentGridFilter',
  data() {
    return {
      filterCategory: '',
      allCategories: [],
    };
  },
  beforeMount() {
    window.addEventListener('gridCategories', this.setAllCategories);
  },
  mounted() {
    this.fireCategoriesRequest();
  },
  beforeDestroy() {
    window.removeEventListener('gridCategories', this.setAllCategories);
  },
  methods: {
    translate(text, lang) {
      return i18n.t(text, lang);
    },
    fireCategoriesRequest() {
      this.$nextTick(() => {
        // await for data to resolve
        if (this?.allCategories?.length > 0) {
          return;
        }
        setTimeout(() => {
          const event = new Event('gridNeedCategories');
          // should check for fallback on older browsers
          window.dispatchEvent(event);
          this.fireCategoriesRequest(); // recursive
        }, 500);
      });
    },
    fireFilterCategoryEvent() {
      const event = new CustomEvent('gridCategoryFilter', {
        bubbles: true,
        detail: this.filterCategory,
      });
      //
      // should check for fallback on older browsers
      // event = document.createEvent('Event');
      // event.initCustomEvent('gridcategoryFilter',true, true, {detail: this.filterCategory});
      //
      window.dispatchEvent(event);
    },
    setAllCategories(e) {
      this.allCategories = e.detail || [];
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-categories {
  display: inline-block;
  width: 100%;
  max-width: 50rem;
  height: calc(2.5rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background-color: #fff;
  background-size: auto auto;
  background-size: 8px 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>
