import Page1 from './container/page1';
import Reducer from './reducer';

const de = require('@basepath/pages/page1/locale/de/index.json');
const en = require('@basepath/pages/page1/locale/en/index.json');

export const Entrypoint = {
  locale: {
    de,
    en,
  },
  reducer: Reducer,
};

function registerPage() {
  window.PAGE_LOADER.register('page1', Page1, Entrypoint);
}
registerPage();

export default Page1;
