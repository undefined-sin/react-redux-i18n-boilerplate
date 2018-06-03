import React from 'react';
import {
  mount
} from 'enzyme';
import App from './App';
import Home from '@basepath/pages/home';
describe('', () => {
  it('should render an application component', () => {
    App.getThemeProviderImpl = () => <span />;
    const wrapper = mount(<App />);
    expect(wrapper.find(Home)).to.have.length(1);
  })
});