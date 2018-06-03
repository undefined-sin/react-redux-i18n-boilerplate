import Page1 from './container/page1';
import Reducer from './reducer';
export const Entrypoint = {
    locale: {
        de: require('@basepath/pages/page1/locale/de/index.json'),
        en: require('@basepath/pages/page1/locale/en/index.json')
    },
    reducer: Reducer
};
export default Page1;