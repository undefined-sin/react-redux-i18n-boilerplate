import React from 'react';
import { Route } from 'react-router-dom';

export const routes = {
  '/': window.PAGE_LOADER.getByName('home').page,
  about: window.PAGE_LOADER.getByName('page1').page
};


export function getRoutes() {
  return Object
    .keys(routes)
    .map(path => <Route key={path} exact={path === '/'} path={path} component={routes[path]} />);
}

export default {
  home: window.PAGE_LOADER.getByName('home').entrypoint,
  page1: window.PAGE_LOADER.getByName('page1').entrypoint,
};
