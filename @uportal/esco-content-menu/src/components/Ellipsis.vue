<template>
  <div
    class="autofit-ellipsis clamp"
    ref="sentence">{{ message }}</div>
</template>

<script>
// Code translation from https://github.com/jypblue/vue-ellipsis
// intregration due to some problems and customization needs : https://github.com/jypblue/vue-ellipsis/issues/2

export default {
  name: 'Ellipsis',
  props: {
    message: {type: String, default: ''},
    lineClamp: {type: Number, default: 0},
    lineHeight: {type: String, default: '22px'},
    endChar: {type: String, default: '...'},
    endHtml: {type: String, default: ''},
  },
};
</script>

<style lang="scss" scoped>
.autofit-ellipsis {
  height: 100%;
}

.clamp {
  position: relative;
  height: 3.6em;
  overflow: hidden;
  line-height: 1.2em;
}

.clamp::after {
  content: '';
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 1.2em;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 80%
  );
}

/* Now add in code for the browsers that support -webkit-line-clamp and overwrite the non-supportive stuff */
@supports (-webkit-line-clamp: 3) {
  .clamp {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .clamp::after {
    display: none;
  }
}
</style>
