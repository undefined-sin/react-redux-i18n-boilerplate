import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '@basepath/css/style.css';

class BackToTop extends Component {

  constructor() {
    super();

    this.state = {
      intervalId: 0,
      show: false
    }

    this.scrollStep = this.scrollStep.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    const scrollYOffset = this.props.showAfterScrolledOffset;
    if (window.pageYOffset >= scrollYOffset) {
      if (!this.state.show) {
        this.setState({ show: true });
      }
    } else {
      if (this.state.show) {
        this.setState({ show: false });
      }
    }
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep, this.props.delayInMs);
    this.setState({ intervalId });
  }

  render() {
    const showValue = this.state.show;
    const styleSufix = showValue ? 'Visible' : 'Hidden';
    const style = `scroll${styleSufix}`;

    return (
      <button
        title='Back to top'
        className={style}
        onClick={() => { this.scrollToTop(); }}
      >
      UP
      </button>
    );
  }
}

BackToTop.propTypes = {
  scrollStepInPx: PropTypes.number,
  delayInMs: PropTypes.number,
  showAfterScrolledOffset: PropTypes.number
};

BackToTop.defaultProps = {
  scrollStepInPx: 50,
  delayInMs: 16,
  showAfterScrolledOffset: 200
};

export default BackToTop;
