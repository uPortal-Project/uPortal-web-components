import Vue from "vue";
import VueI18n from "vue-i18n";

const locales = {
  en: {
    message: {
      services: {
        title: "All services",
        filter: "Find a service..."
      },
      favorites: {
        add: "Add to favorites",
        remove: "Remove from favorites",
        title: "My Favorites"
      }
    }
  },
  fr: {
    message: {
      services: {
        title: "Tous les services",
        filter: "Rechercher un service..."
      },
      favorites: {
        add: "Ajouter aux favoris",
        remove: "Supprimer des favoris",
        title: "Mes favoris"
      }
    }
  }
};

function checkLang() {
  // These window.navigator contain language information
  // 1. languages -> Array of preferred languages (eg ["en-US", "zh-CN", "ja-JP"]) Firefox^32, Chrome^32
  // 2. language  -> Preferred language as String (eg "en-US") Firefox^5, IE^11, Safari,
  //                 Chrome sends Browser UI language
  // 3. browserLanguage -> UI Language of IE
  // 4. userLanguage    -> Language of Windows Regional Options
  // 5. systemLanguage  -> UI Language of Windows
  var browserLanguagePropertyKeys = [
    "languages",
    "language",
    "browserLanguage",
    "userLanguage",
    "systemLanguage"
  ];

  var availableLanguages = ["fr", "en"];

  var allLangs = [];
  browserLanguagePropertyKeys.forEach(a => allLangs.push(navigator[a]));
  allLangs = [].concat
    .apply([], allLangs) // merge all values into flattened array
    .filter(v => v) //Remove undefined values
    .map(v => v.substring(0, 2)) //Shorten strings to use two chars (en-US -> en)
    .filter((v, i, a) => a.indexOf(v) === i); // Returns unique values
  var detectedLocale = allLangs.find(x => availableLanguages.includes(x)); //Returns first language matched in available languages

  var locale = detectedLocale || "en"; //If no locale is detected, fallback to 'en'
  return locale;
}

Vue.use(VueI18n);

export default new VueI18n({
  locale: checkLang(),
  fallbackLocale: "en",
  messages: locales
});

// i18n;
