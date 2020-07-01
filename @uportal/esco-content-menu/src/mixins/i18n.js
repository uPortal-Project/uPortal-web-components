import i18n from '../i18n.js';

export default {
  methods: {
    translate(text, lang) {
      return i18n.t(text, lang);
    },
  },
  props: {
    messages: { type: [String, Array] },
  },
  mounted() {
    if (this.customMessages) {
      this.customMessages.forEach((override) => {
        override.locales.forEach((key) =>
          i18n.mergeLocaleMessage(key, override.messages)
        );
      });
    }
  },
  computed: {
    customMessages() {
      const options =
        typeof this.messages === 'string'
          ? JSON.parse(this.messages)
          : this.messages;
      return options;
    },
  },
};
