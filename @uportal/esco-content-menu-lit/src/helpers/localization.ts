import { configureLocalization } from '@lit/localize';
export const { setLocale } = configureLocalization({
  sourceLocale: 'en',
  targetLocales: ['fr'],
  loadLocale: (locale) =>
    import(/* webpackMode: "eager" */ `@locales/${locale}.ts`),
});
