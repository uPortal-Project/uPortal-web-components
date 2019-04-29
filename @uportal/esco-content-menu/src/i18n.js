import Vue from 'vue';
import VueI18n from 'vue-i18n';

function getBrowserLang(availableLanguages) {
  // These window.navigator contain language information
  // 1. languages -> Array of preferred languages
  //                 (eg ["en-US", "zh-CN", "ja-JP"]) Firefox^32, Chrome^32
  // 2. language  -> Preferred language as String
  //                 (eg "en-US") Firefox^5, IE^11, Safari,
  //                 Chrome sends Browser UI language
  // 3. browserLanguage -> UI Language of IE
  // 4. userLanguage    -> Language of Windows Regional Options
  // 5. systemLanguage  -> UI Language of Windows
  const browserLanguagePropertyKeys = [
    'languages',
    'language',
    'browserLanguage',
    'userLanguage',
    'systemLanguage',
  ];

  const allLangs = browserLanguagePropertyKeys
  // merge all values into flattened array
      .flatMap((key) => navigator[key])
  // Remove undefined values
      .filter((v) => v)
  // Shorten strings to use two chars (en-US -> en)
      .map((v) => v.substring(0, 2))
  // Returns unique values
      .filter((v, i, a) => a.indexOf(v) === i);

  // Returns first language matched in available languages
  const detectedLocale = allLangs.find((x) => availableLanguages.includes(x));

  // If no locale is detected, fallback to 'en'
  return detectedLocale || 'en';
}

function getPageLang(availableLanguages) {
  // retrieve lang from html lang tag
  const pageLang = document.documentElement.lang;
  if (pageLang) {
    // we add the the shorten two char lang in the list in case the more specific lang isn't provided
    const allLangs = [pageLang, pageLang.substring(0, 2)];
    // Returns first language matched in available languages
    const detectedLocale = allLangs.find((x) => availableLanguages.includes(x));
    // If no available language is detected, fallback to 'en'
    return detectedLocale || 'en';
  }
  // if no lang is retrieved from the document page we try to resolve from the browser
  return getBrowserLang(availableLanguages);
}

function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[a-z0-9-]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([a-z0-9-]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

Vue.use(VueI18n);

export default new VueI18n({
  locale: getPageLang(['fr-FR', 'fr', 'en-US', 'en']),
  fallbackLocale: 'en',
  messages: loadLocaleMessages(),
});
