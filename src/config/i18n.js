import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import moment from 'moment';
import numeral from 'moment';
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
      fallbackNS: ['application', 'errors'],
      debug: true,
      interpolation: {
        escapeValue: true,
        formatSeparator: ',',
        format: function(value, format, lng) {
          if (format === 'uppercase') return value.toUpperCase();
          if (format === 'lowercase') return value.toUpperCase();
          if (value instanceof Date) return moment(value).format(format);
          return value;
        }
      }
    });

  i18next.on('languageChanged', (lng) => {
    moment.locale(lng)
    numeral.locale(lng);
    const store = getStore();
    store.dispatch({
      type: "CHANGE_LANGUAGE",
      payload: lng
    });
  });

}