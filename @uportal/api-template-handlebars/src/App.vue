<template>
  <api-template-handlebars
    debug
    data-api-url="example.json" />
</template>

<script>
import ApiTemplateHandlebars from './components/ApiTemplateHandlebars.vue';

export default {
  name: 'app',
  components: {
    ApiTemplateHandlebars
  }
};
</script>

<style>
</style>
