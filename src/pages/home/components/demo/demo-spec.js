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

  it('should appear and disappear depending on the scroll event', () => {
      const wrapper = mount((<Demo />));

      // Render the component
      expect(wrapper.find('BackToTop')).to.have.length(1);

      // Ensure page Y coord is at the top
      expect(window.pageYOffset).to.equal(0);

      // Ensure BackToTop is initially hidden
      expect(wrapper.find('BackToTop').children().first().props().show).to.equal(false);

      // Simulate now the scrolling to the bottom by 500 px
      window.pageYOffset = 500;
      window.dispatchEvent(new Event('scroll'));

      // Update the component rendering
      wrapper.update();

      // Ensure page Y has the new Y coord value
      expect(window.pageYOffset).to.equal(500);

      // Ensure BackToTop component is visible
      expect(wrapper.find('BackToTop').children().first().props().show).to.equal(true);
  });

});

