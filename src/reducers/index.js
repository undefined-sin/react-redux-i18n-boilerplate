const initialState = {
  appName: 'Multi page app'
};

function AppReducer(state, action){
  if (state === undefined){
	  return initialState;
  }
  if(action.type === 'CHANGE_LANGUAGE'){
    return {
      ...state,
      language: action.payload
    };
  }
  return state;  
}

export default AppReducer;