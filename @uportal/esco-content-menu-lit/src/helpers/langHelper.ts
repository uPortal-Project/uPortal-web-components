import get from 'lodash/get';
export default class langHelper {
  private static locale = 'en';
  private static reference: LangRef[];

  static setLocale(lang: string): void {
    this.locale = lang;
  }

  static setReference(ref: LangRef[]): void {
    this.reference = ref;
  }

  static getBrowserLocales(options = {}): string[] {
    const defaultOptions = {
      languageCodeOnly: true,
      defaultLanguage: 'en',
    };

    const opt = {
      ...defaultOptions,
      ...options,
    };

    const browserLocales =
      navigator.languages === undefined
        ? [navigator.language]
        : navigator.languages;

    if (!browserLocales) {
      return [opt.defaultLanguage];
    }

    return browserLocales.map((locale) => {
      const trimmedLocale = locale.trim();

      return opt.languageCodeOnly
        ? trimmedLocale.split(/-|_/)[0]
        : trimmedLocale;
    });
  }

  static getPageLang(options = {}): string {
    const defaultOptions = {
      languageCodeOnly: true,
      availableLanguages: ['en'],
      defaultLanguage: 'en',
    };

    const opt = {
      ...defaultOptions,
      ...options,
    };

    const pageLang = document.documentElement.lang;
    let allLangs: string[] = [];
    if (pageLang) {
      allLangs = opt.languageCodeOnly ? [pageLang.split(/-|_/)[0]] : [pageLang];
    } else {
      const fOpts = {
        anguageCodeOnly: opt.languageCodeOnly,
        defaultLanguage: opt.defaultLanguage,
      };
      allLangs = this.getBrowserLocales(fOpts);
    }

    const detectedLocale = allLangs.find((x) =>
      opt.availableLanguages.includes(x)
    );

    return detectedLocale || opt.defaultLanguage;
  }

  static localTransation(stringId: string, defaultString: string): string {
    const currentRef = this.reference?.find((ref) =>
      ref.locales.includes(this.locale)
    );
    const currentMessages = currentRef?.messages?.message;
    return currentMessages
      ? get(currentMessages as unknown, stringId, defaultString)
      : defaultString;
  }
}
