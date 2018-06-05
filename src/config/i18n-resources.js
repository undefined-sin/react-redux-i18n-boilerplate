import entries from '@basepath/entrypoints';


function mapLocales(locale) {
  return Object.keys(entries).reduce((prev, key) => {
    const instance = {
      ...prev,
    };
    if (!entries[key].locale[locale]) {
      return null;
    }
    instance[key] = entries[key].locale;
    instance[key] = {
      ...entries[key].locale[locale],
    };
    return instance;
  }, {});
}
const instancesEN = mapLocales('en');
const instancesDE = mapLocales('de');
const applicationEN = require('@basepath/locale/en/application.json');
const applicationDE = require('@basepath/locale/de/application.json');
const errorsEN = require('@basepath/locale/en/errors.json');
const errorsDE = require('@basepath/locale/de/errors.json');

export default {
  en: {
    application: applicationEN,
    errors: errorsEN,
    ...instancesEN,
  },
  de: {
    application: applicationDE,
    errors: errorsDE,
    ...instancesDE,
  },
};
