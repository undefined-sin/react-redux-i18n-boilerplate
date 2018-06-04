import React from 'react';
import {
  mount
} from 'enzyme';
import {
  MemoryRouter
} from 'react-router-dom'
import Header from './header';


describe('Header', () => {
  it('should render the header component', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Header language="de" t={t => t}/>
      </MemoryRouter>
    );
    expect(wrapper.html()).to.contain('header');
  })
});