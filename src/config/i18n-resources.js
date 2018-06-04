import _ from 'lodash';
import {
  Entrypoint as HomeCfg
} from '@basepath/pages/home/index';

import entries from '@basepath/entrypoints';


function mapLocales (locale){
  return Object.keys(entries).reduce((prev, key) => {
    const instance = {
      ...prev,
    };
    if(!entries[key].locale[locale]){
      return null;
    }
    instance[key] = entries[key].locale;
    instance[key] = {
       ...entries[key].locale[locale]
    };
    return instance;
  }, {});
}
const instancesEN = mapLocales("en");
const instancesDE = mapLocales("de");

export default {
    en: {
     application: require('@basepath/locale/en/application.json'),
     errors: require('@basepath/locale/en/errors.json'),
     ...instancesEN
    },
    de: {
      application: require('@basepath/locale/de/application.json'),
      errors: require('@basepath/locale/de/errors.json'),
      ...instancesDE
    }
};
