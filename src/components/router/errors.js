import React from 'react';
import Link from 'react-router-dom';
import {
  t
}from '@basepath/utils/appUtils';
import {
  GoHome
} from './index';

export const NotFound = () => {
  return (<div>{ t('errors.notfound') } <GoHome /></div>)
};