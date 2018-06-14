import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Demo from './demo';


describe('Demo', () => {
  it('should render the demo component', () => {
    const wrapper = mount(<MemoryRouter><Header language="de" t={t => t} /></MemoryRouter>);
    expect(wrapper.html()).to.contain('demo');
  });
});
