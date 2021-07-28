<template>
  <api-template-vue debug data-api-url="example.json">
    <div v-pre>
      <!-- Directive v-pre required b/c Vue will attempt to process anything in App.vue -->
      <h3>{{ data.displayName[0] }}</h3>
      <dl>
        <dt>username:</dt>
        <dd>{{ data.username[0] }}</dd>
        <dt>email:</dt>
        <dd>{{ data.mail[0] }}</dd>
        <dt>Phone:</dt>
        <dd>{{ data.telephoneNumber[0] }}</dd>
      </dl>
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
@media screen and (min-width: 576px) {
  dl {
    display: flex;
    flex-flow: row wrap;
  }

  dt {
    flex-basis: 20%;
    border-top: 1px solid #dee2e6;
    height: 3em;
    padding: 4px 4px;
  }

  dd {
    flex-basis: 70%;
    flex-grow: 1;
    border-top: 1px solid #dee2e6;
    height: 3em;
    padding: 4px 4px;
  }
}
</style>
