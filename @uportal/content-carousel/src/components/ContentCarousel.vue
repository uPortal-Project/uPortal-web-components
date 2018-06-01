<template>
  <slick
  ref="slick"
  :options="slickOptions">
  <a href="http://placehold.it/2000x1000">{{ msg }}</a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
  <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
</slick>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Slick from 'vue-slick';

@Component({
  components: {
    Slick,
  },
})
export default class ContentCarousel extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
@import '../../node_modules/slick-carousel/slick/slick.css';
</style>
