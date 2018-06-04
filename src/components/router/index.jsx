import React from "react";
import {
    Link
} from 'react-router-dom';
import {
    t
  } from '@basepath/utils/appUtils';

//const t = selectTranslator();
  
// TODO: Remove history prop.
export const GoBack = ({ history, children }) => 
 (<a href="#">{ children }</a>);

export const GoHome = () => (<Link to='/'>{ t('goback') }</Link>); 