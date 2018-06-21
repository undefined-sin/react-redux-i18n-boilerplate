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

  // This should be feasible to do when using karma in the project
  it.skip('simulates scroll and click to top events work', () => {
      const wrapper = mount(<Demo />);

      expect(wrapper.find('#BackToTop')).to.have.length(1);
      expect(window.pageYOffset).to.equal(0);
      expect(wrapper.find('#scrollStyledId').first().props().show).to.equal(false);

      // Simulate now the scrolling to the bottom by 500 px
      window.scrollBy(0, 500);

      expect(window.pageYOffset).to.equal(500);
      expect(wrapper.find('#scrollStyledId').first().props().show).to.equal(true);


      const BackToTop = mount(wrapper.find('#BackToTop'));
      BackToTop.find('#scrollStyledId').first().simulate('click');

      expect(window.pageYOffset).to.equal(0);
      expect(wrapper.find('#scrollStyledId').first().props().show).to.equal(false);
  });

});

