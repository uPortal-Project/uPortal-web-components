<template>
  <div ref="sentence" />
</template>

<script>
// Code translation from https://github.com/jypblue/vue-ellipsis
// intregration due to a problem : https://github.com/jypblue/vue-ellipsis/issues/2

export default {
  name: 'Ellipsis',
  props: {
    message: {type: String, default: ''},
    lineClamp: {type: Number, default: 1},
    lineHeight: {type: String, default: '22px'},
    endChar: {type: String, default: '...'},
    endHtml: {type: String, default: ''},
  },
  watch: {
    message: {
      handler() {
        this.calcFavoritesPortlets();
      },
    },
  },
  mounted() {
    this.$nextTick(function() {
      setTimeout(() => {
        this.handleSubstrSentence();
      }, 200);
    });
  },
  methods: {
    handleSubstrSentence() {
      const stNode = this.$refs.sentence;
      const html = this.message;
      if (html.length === 0) {
        // throw new Error('the String is empty');
        return false;
      }
      stNode.innerHTML = html;

      let startPos = 0;
      let endPos = html.length;

      const stNodeLineHeight = parseInt(this.lineHeight, 10);
      const maxHeight = stNodeLineHeight * this.lineClamp;

      let stNodeHeight =
        stNode.getBoundingClientRect().height || stNodeLineHeight;

      if (stNodeHeight > maxHeight) {
        while (Math.abs(endPos - startPos) > 1) {
          const half = Math.ceil((endPos + startPos) / 2);
          const newHtml = html.substring(0, half).trim();
          stNode.innerHTML = newHtml;
          stNodeHeight =
            stNode.getBoundingClientRect().height || stNodeLineHeight;

          if (stNodeHeight <= maxHeight) {
            startPos = half;
          } else {
            endPos = half;
          }
        }

        while (stNodeHeight > maxHeight) {
          const newHtml = stNode.innerHTML.substring(
              0,
              stNode.innerHTML.trimRight().length - 1
          );
          stNode.innerHTML = newHtml.trim();
          stNodeHeight =
            stNode.getBoundingClientRect().height || stNodeLineHeight;
        }

        const endStr =
          this.endHtml !== '' ? this.endHtml.replace(/<[^>]+>/g, '') : '';
        const endLen =
          this.endChar === '...' ? 3 : endStr.length + this.endChar.length;

        const stNodeLen = stNode.innerHTML.trimRight().length;
        const stNodeDelStr = stNode.innerHTML
            .substring(stNodeLen - endLen, stNodeLen)
            .trim();
        const match = stNodeDelStr.match(/\s+/g);
        const extraLen = match && match.length ? match.length : 0;
        const newHtml =
          stNode.innerHTML.substring(0, stNodeLen - endLen - extraLen).trim() +
          this.endChar +
          this.endHtml;
        stNode.innerHTML = newHtml;
      }
    },
  },
};
</script>

<style scoped>
</style>
