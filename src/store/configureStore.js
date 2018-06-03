import {
  createStore, 
  applyMiddleware, 
  combineReducers,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import applicationReducer from '../reducers/index';
import {
  selectApplicationContext
} from '../utils/appUtils'

let StoreInstance = null;

const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducers = combineReducers({
   application: applicationReducer,
   home: require('../pages/home/reducer/index').default
});

export function getStore(){
  return StoreInstance;
}

export default function configureStore() {  
  if (!StoreInstance){
    const context = selectApplicationContext();
    StoreInstance = createStore(
      reducers,
      {
        application: {
          language: context.language,
          theme: context.theme
        }
      },
      compose(
        applyMiddleware(thunk),
        devTool
      )
    );
  }
  return StoreInstance;
}