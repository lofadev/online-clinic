import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as en from './en';
import * as jp from './jp';

import { convertLanguageJsonToObject } from './translations';

export const translationsJson = {
  jp: {
    translation: jp,
  },
  en: {
    translation: en,
  },
};

// Create the 'translations' object to provide full intellisense support for the static json files.
convertLanguageJsonToObject(en);

export const i18n = i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: translationsJson,
    lng: 'jp',
    fallbackLng: 'jp',
    debug: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
