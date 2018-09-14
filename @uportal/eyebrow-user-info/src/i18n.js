import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function checkLang() {
  // These window.navigator contain language information
  // 1. languages -> Array of preferred languages (eg ["en-US", "zh-CN", "ja-JP"]) Firefox^32, Chrome^32
  // 2. language  -> Preferred language as String (eg "en-US") Firefox^5, IE^11, Safari,
  //                 Chrome sends Browser UI language
  // 3. browserLanguage -> UI Language of IE
  // 4. userLanguage    -> Language of Windows Regional Options
  // 5. systemLanguage  -> UI Language of Windows
  let browserLanguagePropertyKeys = [
    "languages",
    "language",
    "browserLanguage",
    "userLanguage",
    "systemLanguage"
  ];

  let availableLanguages = ["fr", "en"];

  let allLangs = [];
  browserLanguagePropertyKeys.forEach(a => allLangs.push(navigator[a]));
  allLangs = [].concat
    .apply([], allLangs) // merge all values into flattened array
    .filter(v => v) //Remove undefined values
    .map(v => v.substring(0, 2)) //Shorten strings to use two chars (en-US -> en)
    .filter((v, i, a) => a.indexOf(v) === i); // Returns unique values
  let detectedLocale = allLangs.find(x => availableLanguages.includes(x)); //Returns first language matched in available languages

  return detectedLocale || "en"; //If no locale is detected, fallback to 'en'
}

function loadLocaleMessages() {
  const locales = require.context("./locales", true, /[a-z0-9]+\.json$/i);
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([a-z0-9]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

export default new VueI18n({
  locale: checkLang(),
  fallbackLocale: "en",
  messages: loadLocaleMessages()
});
