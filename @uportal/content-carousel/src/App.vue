<template>
  <ContentCarousel msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContentCarousel from './components/ContentCarousel.vue';

@Component({
  components: {
    ContentCarousel,
  },
})
export default class App extends Vue {}
</script>
