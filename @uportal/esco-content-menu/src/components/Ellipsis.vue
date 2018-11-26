<template>
  <div ref="sentence" />
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
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.timedRun);
      this.handleSubstrSentence();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.timedRun);
  },
  methods: {
    timedRun() {
      setTimeout(() => {
        this.handleSubstrSentence();
      }, 300);
    },
    handleSubstrSentence() {
      const stNode = this.$refs.sentence;
      const html = this.message;
      if (html?.length <= 0) {
        return false;
      }
      const stNodeLineHeight = parseInt(this.lineHeight, 10);
      // firstly we need to obtain the real space available
      stNode.innerHTML = '';
      stNode.style.height = '100%';
      const availableNodeHeight =
        stNode.getBoundingClientRect().height || stNodeLineHeight;

      // now we need to get the space that take the complete description before clamping
      stNode.innerHTML = html;
      // we need to set it as auto to obtain a content height that will evolve depending on content reduced
      stNode.style.height = 'auto';
      let stNodeHeight =
        stNode.getBoundingClientRect().height || stNodeLineHeight;

      let startPos = 0;
      let endPos = html.length;

      // we should fit to the available space or reduce to the indicated nbLines
      const calcMaxHeight =
        stNodeLineHeight * Math.trunc(availableNodeHeight / stNodeLineHeight);
      const desiredMaxHeigth =
        stNodeLineHeight * (this.lineClamp > 0 ? this.lineClamp : 1);
      const maxHeight =
        this.lineClamp > 0 && desiredMaxHeigth < availableNodeHeight
          ? desiredMaxHeigth
          : calcMaxHeight;

      if (stNodeHeight > maxHeight) {
        while (Math.abs(endPos - startPos) > 1) {
          const half = Math.ceil((endPos + startPos) / 2);
          stNode.innerHTML = html.substring(0, half).trim();
          stNodeHeight =
            stNode.getBoundingClientRect().height || stNodeLineHeight;

          if (stNodeHeight <= maxHeight) {
            startPos = half;
          } else {
            endPos = half;
          }
        }

        while (stNodeHeight > maxHeight) {
          stNode.innerHTML = stNode.innerHTML
              .substring(0, stNode.innerHTML.trimRight().length - 1)
              .trim();
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
        stNode.innerHTML =
          stNode.innerHTML.substring(0, stNodeLen - endLen - extraLen).trim() +
          this.endChar +
          this.endHtml;
      }
    },
  },
};
</script>

<style scoped>
</style>
