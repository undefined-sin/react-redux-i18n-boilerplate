import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import BackToTop from './backtotop';

describe('BackToTop', () => {
  it('should render the BackToTop component', () => {
    const delayInMs = 17;
    const scrollStepInPx = 50;
    const showAfterScrolledOffset = 320;
    const text = "nach oben";
    const wrapper = mount(<div id="BackToTopId"><BackToTop delayInMs={delayInMs}
                                     scrollStepInPx={scrollStepInPx}
                                     showAfterScrolledOffset={showAfterScrolledOffset}
                                     text={text}
                          /></div>
                         );
    expect(wrapper.find(BackToTop)).to.have.length(1);
  });

  it('should have the component rendered based on CSS Id', () => {
    const wrapper = mount(<BackToTop />);
    expect(wrapper.find("#scrollStyledId").first()).to.have.length(1);
  });

  it('should render the BackToTop component with the external div id', () => {
    const delayInMs = 17;
    const scrollStepInPx = 50;
    const showAfterScrolledOffset = 320;
    const text = "nach oben";

    const wrapper = mount(<div id="BackToTopId"><BackToTop delayInMs={delayInMs}
                                     scrollStepInPx={scrollStepInPx}
                                     showAfterScrolledOffset={showAfterScrolledOffset}
                                     text={text}
                          /></div>
                         );
    expect(wrapper.find("#BackToTopId")).to.have.length(1);
  });

  it('should have the passed mandatory props', () => {
    const delayInMs = 17;
    const scrollStepInPx = 50;
    const showAfterScrolledOffset = 320;
    const text = 'nach oben';

    const wrapper = mount(<BackToTop delayInMs={delayInMs}
                                     scrollStepInPx={scrollStepInPx}
                                     showAfterScrolledOffset={showAfterScrolledOffset}
                                     text={text}
                          />
                         );
    expect(wrapper.props().delayInMs).to.equal(delayInMs);
    expect(wrapper.props().scrollStepInPx).to.equal(scrollStepInPx);
    expect(wrapper.props().showAfterScrolledOffset).to.equal(showAfterScrolledOffset);
    expect(wrapper.props().text).to.equal(text);
  });

  it('should have the non required props with the default values', () => {
    const delayInMs = 17;
    const scrollStepInPx = 50;
    const showAfterScrolledOffset = 320;
    const text = 'nach oben';

    const wrapper = mount(<BackToTop delayInMs={delayInMs}
                                     scrollStepInPx={scrollStepInPx}
                                     showAfterScrolledOffset={showAfterScrolledOffset}
                                     text={text}
                          />
                         );
    expect(wrapper.props().delayInMs).to.equal(delayInMs);
    expect(wrapper.props().scrollStepInPx).to.equal(scrollStepInPx);
    expect(wrapper.props().showAfterScrolledOffset).to.equal(showAfterScrolledOffset);
    expect(wrapper.props().position).to.equal(undefined);
    expect(wrapper.props().zIndex).to.equal(undefined);
    expect(wrapper.props().right).to.equal(undefined);
    expect(wrapper.props().bottom).to.equal(undefined);
    expect(wrapper.props().cursor).to.equal(undefined);
    expect(wrapper.props().borderRadius).to.equal(undefined);
    expect(wrapper.props().border).to.equal(undefined);
    expect(wrapper.props().color).to.equal(undefined);
    expect(wrapper.props().height).to.equal(undefined);
    expect(wrapper.props().lineHeight).to.equal(undefined);
    expect(wrapper.props().padding).to.equal(undefined);
    expect(wrapper.props().boxShadow).to.equal(undefined);
    expect(wrapper.props().backgroundColor).to.equal(undefined);
    expect(wrapper.props().borderColor).to.equal(undefined);
    expect(wrapper.props().color).to.equal(undefined);
  });

  it('should have the ´show´ state changed properly', () => {
    const delayInMs = 17;
    const scrollStepInPx = 50;
    const showAfterScrolledOffset = 320;
    const text = 'nach oben';

    const wrapper = mount(<BackToTop delayInMs={delayInMs}
                                     scrollStepInPx={scrollStepInPx}
                                     showAfterScrolledOffset={showAfterScrolledOffset}
                                     text={text}
                          />
                         );

    const instance = wrapper.instance();
    expect(wrapper.state().show).to.equal(false);

    instance.manageVisibility(true);
    expect(wrapper.state().show).to.equal(true);

    instance.manageVisibility(false);
    expect(wrapper.state().show).to.equal(false);
  });
});

