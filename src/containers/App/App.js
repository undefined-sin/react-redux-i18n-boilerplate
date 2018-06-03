import React, { Component} from "react";
import { Provider } from 'react-redux';
import {ThemeProvider} from 'styled-components';
import 'normalize.css'; // Resets browser defaults
import configureStore from '@basepath/store/configureStore';
import { selectApplicationContext } from "@basepath/utils/appUtils";
import Home from '@basepath/pages/home';


const store = configureStore();
const context = selectApplicationContext();

const theme = {
  main: context.theme
};

class App extends Component{

  
  render(){
    return(<Provider store={store}>
		    <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
		</Provider>
    );
  }
}

export default App;