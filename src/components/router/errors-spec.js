import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';
import {
  shallow
} from 'enzyme';
import { NotFound } from './errors';

describe('errors components of router', () => {
  it('renders a not found page with key', () => {
    const wrapper = shallow(<BrowserRouter><NotFound /></BrowserRouter>);
    console.log("wtest", wrapper.dive())
    expect(wrapper.dive().find('a')).to.have.length(1);
  });
});
