import * as enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';


require.extensions['.css'] = () => null;

require.extensions['.png'] = () => null;

require.extensions['.jpg'] = () => null;

const { JSDOM } = require('jsdom');

const appContext = JSON.stringify({
  language: 'de',
  theme: 'theme1',
});
const html = `<!doctype html><html><body><div id='application' data-app-context='${appContext}'/></body></html>`;
const jsdom = new JSDOM(html);

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
enzyme.configure({ adapter: new ReactSixteenAdapter() });

global.expect = require('chai').expect;

