<template>
    <div ref="sentence" @click="handleClick"></div>
</template>

<script>
  /**
   * Code translation from https://github.com/jypblue/vue-ellipsis
   * intregration due to a problem : https://github.com/jypblue/vue-ellipsis/issues/2
   */
  export default {
    name: "Ellipsis",
    props: {
      data: { type: String, default: '' },
      lineClamp: { type: Number, default: 1 },
      lineHeight: { type: String, default: '22px' },
      endChar: { type: String, default: '...' },
      endHtml: { type: String, default: '' }
    },
    methods: {
      handleSubstrSentence () {
        const stNode = this.$refs.sentence;
        const html = this.data;
        if (html.length === 0) {
          //throw new Error('the String is empty');
          return false;
        }
        stNode.innerHTML = html;
//
        let startPos = 0;
        let endPos = html.length;
// css line-height
//let stNodeStyles = window.getComputedStyle(stNode, null)
        let stNodeHeight = stNode.getBoundingClientRect().height || 22;
// let stNodeLineHeight = stNodeStyles.lineHeight
// stNodeLineHeight = stNodeLineHeight.slice(0, stNodeLineHeight.length - 2)
// if (!!this.lineHeight) {
//   stNodeLineHeight = !!this.lineHeight.indexOf('px') ? this.lineHeight.slice(0, this.lineHeight.length - 2) : this.lineHeight
// }

        const stNodeLineHeight = this.lineHeight.slice(0, this.lineHeight.length - 2);
        const maxHeight = stNodeLineHeight * this.lineClamp;

        if (stNodeHeight > maxHeight) {
          while (Math.abs(endPos - startPos) > 1) {
            const half = Math.ceil((endPos + startPos) / 2, 10);
            const newHtml = html.substring(0, half);
            stNode.innerHTML = newHtml;
            stNodeHeight = stNode.getBoundingClientRect().height || 22;

            if (stNodeHeight <= maxHeight) {
              startPos = half;
            } else {
              endPos = half;
            }
          }

          while (stNodeHeight > maxHeight) {
            const newHtml = stNode.innerHTML.substring(0, stNode.innerHTML.trimRight().length - 1);
            stNode.innerHTML = newHtml;
            stNodeHeight = stNode.getBoundingClientRect().height || 22;
          }

          const endStr = this.endHtml !== '' ? this.endHtml.replace(/<[^>]+>/g,"") : '';
          const endLen = this.endChar === '...' ? 3 : endStr.length + this.endChar.length;
//
          const stNodeLen = stNode.innerHTML.trimRight().length;
          const stNodeDelStr = stNode.innerHTML.substring(stNodeLen - endLen, stNodeLen);
          const match = stNodeDelStr.match(/\s+/g);
          const extraLen = match && match.length ? match.length : 0;
          const newHtml = stNode.innerHTML.substring(0, stNodeLen - endLen - extraLen) + this.endChar + this.endHtml;
          stNode.innerHTML = newHtml;
        }
      },
      handleClick(e) {
        this.$emit('click', e)
      }
    },
    // watch: {
    //   data () {
    //     this.handleSubstrSentence()
    //   }
    // },
    mounted () {
      this.$nextTick(function() {
        this.handleSubstrSentence()
      });
    }
  }
</script>

<style scoped>

</style>