import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
  getStore
} from '@basepath/store/configureStore';
import resources from './i18n-resources';

export default function init() {
  i18next
    .use(LanguageDetector)
    .init({
      fallbackLng: 'en',
      resources,
      fallbackNS: 'application',
      debug: true,
      interpolation: {
        escapeValue: true
      }
    });

  i18next.on('languageChanged', (lng) => {
    const store = getStore();
    store.dispatch({
      type: "CHANGE_LANGUAGE",
      payload: lng
    });
  });

  i18next.on('initialized', (options) => {
    console.log(options);
  });
}