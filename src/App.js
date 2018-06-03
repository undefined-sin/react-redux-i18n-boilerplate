import React, { Component} from "react";
import { Provider } from 'react-redux';
import {ThemeProvider} from 'styled-components';
//import 'normalize.css'; // Resets browser defaults
import configureStore from './store/configureStore';
import { selectApplicationContext } from "./utils/appUtils";
import Home from './pages/home/home.js';


const store = configureStore();
const context = selectApplicationContext();

const theme = {
  main: context.theme
};

class App extends Component{

  
  getProviderImpl(){
    return Provider;
  }

  getThemeProviderImpl(){
    return ThemeProvider;
  }

  render(){
    const ProviderImpl = this.getProviderImpl();
    const ThemeProviderImpl = this.getThemeProviderImpl();


    
    return(<ProviderImpl store={store}>
		    <ThemeProviderImpl theme={theme}>
          <Home />
        </ThemeProviderImpl>
		</ProviderImpl>
    );
  }
}

export default App;