import Home from './container/home';
import Reducer from './reducer';
export const Entrypoint = {
    locale: {
        de: require('@basepath/pages/home/locale/de/index.json'),
        en: require('@basepath/pages/home/locale/en/index.json')
    },
    reducer: Reducer
};
export default Home;