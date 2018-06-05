import React from 'react';
import { mount } from 'enzyme';
import Home from '@basepath/pages/home';
import App from './App';


describe('', () => {
  it('should render an application component', () => {
    App.getThemeProviderImpl = () => <span />;
    const wrapper = mount(<App />);
    expect(wrapper.find(Home)).to.have.length(1);
  });
});
