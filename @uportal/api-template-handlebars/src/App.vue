<template>
  <api-template-handlebars
      debug
      data-api-url="example.json">
    <h3 slot="content">Hello World!</h3>
  </api-template-handlebars>
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
