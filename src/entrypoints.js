import React from 'react';
import { Route } from 'react-router-dom';
import Home from '@basepath/pages/home';
import Page1 from '@basepath/pages/page1';
import { Entrypoint as HomeCfg } from '@basepath/pages/home/index';
import { Entrypoint as Page1Cfg } from '@basepath/pages/page1/index';


export const routes = {
  '/': Home,
  '/about': Page1
};

export function getRoutes() {
  return Object
    .keys(routes)
    .map(path => <Route key={path} exact={path === '/'} path={path} component={routes[path]} />);
}

export default {
  home: HomeCfg,
  page1: Page1Cfg,
};
