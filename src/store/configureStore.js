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
import HomeReducer from '@basepath/pages/home/reducer/index';

let StoreInstance = null;

//const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducers = combineReducers({
   application: applicationReducer,
   home: HomeReducer
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
        //devTool
      )
    );
  }
  return StoreInstance;
}