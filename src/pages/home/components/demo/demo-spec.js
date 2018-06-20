import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Demo from './Demo';
import sinon from 'sinon';
const { JSDOM } = require('jsdom');


describe('Demo', () => {
  it('should render the Demo component', () => {
    const wrapper = mount(<Demo />);
    expect(wrapper.find(Demo)).to.have.length(1);
    expect(wrapper.find('#Demo')).to.have.length(1);
  });

  it('should render the Demo component with div id', () => {
    const wrapper = mount(<Demo />);
    expect(wrapper.find(Demo)).to.have.length(1);
    expect(wrapper.find('#BackToTop')).to.have.length(1);
  });

  it('BackToTop button should not be appearing on screen at the beggining', () => {
    const delayInMs = 17;
    const scrollStepInPx = 50;
    const showAfterScrolledOffset = 320;
    const text = 'nach oben';

    const wrapper = mount(<Demo />
                           );

    expect(wrapper.find('#BackToTop')).to.have.length(1);
    expect(wrapper.find('#scrollStyledId').first().props().show).to.equal(false);
  });

  it('simulates click events', () => {
      const handleOnClick = sinon.spy();
      const wrapper = mount((<Demo onClick={handleOnClick}/>));

      expect(wrapper.find('#scrollStyledId').first().props().show).to.equal(false);
      wrapper.find('#scrollStyledId').first().simulate('click');
      expect(wrapper.find('#scrollStyledId').first().props().show).to.equal(false);
  });

  it('simulates scroll events', () => {
      const window = new JSDOM('<Demo />').window;const window = new JSDOM('<Demo />').window;

      window.scrollBy(0, 50);
      expect(window.pageYOffset).to.equal(500);


//      const handleOnClick = sinon.spy();
//      const wrapper = mount((<Demo onClick={handleOnClick}/>));
//
//      expect(wrapper.find('#scrollStyledId').first().props().show).to.equal(false);
//      wrapper.find('#scrollStyledId').first().simulate('click');
//      expect(wrapper.find('#scrollStyledId').first().props().show).to.equal(false);
  });

});

