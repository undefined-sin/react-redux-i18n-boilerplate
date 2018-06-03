import React, { Component} from "react";
import { Provider } from 'react-redux';
import {ThemeProvider} from 'styled-components';
import { HashRouter as Router, Switch, Route, browserHistory } from 'react-router-dom';


import 'normalize.css'; // Resets browser defaults
import configureStore from '@basepath/store/configureStore';
import { selectApplicationContext } from "@basepath/utils/appUtils";
import Home from '@basepath/pages/home';
import Page1 from '@basepath/pages/page1';


const store = configureStore();
const context = selectApplicationContext();

const theme = {
  main: context.theme
};

class App extends Component{

  
  render(){
    return(<Provider store={store}>
		    <ThemeProvider theme={theme}>
          <Router history={browserHistory}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/page1" component={Page1}/>
            </Switch>
          </Router>
        </ThemeProvider>
		</Provider>
    );
  }
}

export default App;