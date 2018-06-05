import Home from './container/home';
import Reducer from './reducer';


const de = require('@basepath/pages/home/locale/de/index.json');

const en = require('@basepath/pages/home/locale/en/index.json');

export const Entrypoint = {
  locale: {
    de,
    en,
  },
  reducer: Reducer,
};
export default Home;
