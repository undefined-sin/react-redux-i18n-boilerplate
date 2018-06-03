/*
Tests are placed alongside files under test.

  This file does the following:
    1. Sets the environment to 'production' so that
       dev-specific babel config in .babelrc doesn't run.
    2. Disables Webpack-specific features that Mocha doesn't understand.
    3. Registers babel for transpiling our code for testing.

    This assures the .babelrc dev config (which includes
    hot module reloading code) doesn't apply for tests.
  */

  /*
    Disable webpack-specific features for tests since
    Mocha doesn't know what to do with them.
  */
  require.extensions['.css'] = function () {
    return null;
  };
  require.extensions['.png'] = function () {
    return null;
  };
  require.extensions['.jpg'] = function () {
    return null;
  };
  
  /* Register babel so that it will transpile ES6 to ES5 before our tests run. */
  require('babel-register')();


  /* setup.js */

const { JSDOM } = require('jsdom');


const jsdom = new JSDOM('<!doctype html><html><body><div id="application" data-app-context="{}"/></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

import * as enzyme from 'enzyme';
import ReactSixteenAdapter  from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new ReactSixteenAdapter () });

global.expect = require('chai').expect;
