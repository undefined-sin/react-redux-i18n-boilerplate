import React from 'react';
import {
  mount
} from 'enzyme';
import Header from './header';

describe('Header', () => {
  it('should render the header component', () => {
    const wrapper = mount(<Header language="de" t={t => t}/>);
    expect(wrapper.html()).to.contain('header');
  })
});