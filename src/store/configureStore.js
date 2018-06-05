import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import applicationReducer from '@basepath/reducers/index';
import { selectApplicationContext } from '@basepath/utils/appUtils';
import entries from '@basepath/entrypoints';

let StoreInstance = null;
// eslint-disable-next-line
const devTool = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export function getStore() {
  return StoreInstance;
}

function mapReducers() {
  return Object.keys(entries).reduce((prev, key) => {
    const instance = {
      ...prev,
    };
    instance[key] = entries[key].reducer;
    return instance;
  }, {});
}

export default function configureStore() {
  if (!StoreInstance) {
    const context = selectApplicationContext();
    StoreInstance = createStore(
      combineReducers({
        application: applicationReducer,
        ...mapReducers(),
      }),
      {
        application: {
          language: context.language,
          theme: context.theme,
        },
      },
      compose(
        applyMiddleware(thunk),
        devTool || compose,
      ),
    );
  }
  return StoreInstance;
}
