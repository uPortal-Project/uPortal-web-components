<template>
  <api-template-vue
      debug
      data-api-url="example.json">
    <div v-pre><!-- Directive v-pre required b/c Vue will attempt to process anything in App.vue -->
      <h3>{{ displayName[0] }}</h3>
      <table class="table">
        <tr>
          <td>username:</td>
          <td>{{ username[0] }}</td>
        </tr>
        <tr>
          <td>email:</td>
          <td>{{ mail[0] }}</td>
        </tr>
        <tr>
          <td>Phone:</td>
          <td>{{ telephoneNumber[0] }}</td>
        </tr>
      </table>
    </div>
  </api-template-vue>
</template>

<script>
import ApiTemplateVue from './components/ApiTemplateVue.vue';

export default {
  name: 'app',
  components: {
    ApiTemplateVue
  }
};
</script>

<style>
</style>
