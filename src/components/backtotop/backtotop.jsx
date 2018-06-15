import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ExpandLessIcon from 'react-icons/lib/md/expand-less';

const ScrollButtonStyle = styled.button`
    opacity: ${props => props.show ? 0.3 : 0};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'aqua'};
    width: 40px;
    height: 40px;
    position: ${props => props.position ? props.position : 'fixed'};
    bottom: ${props => props.bottom ? props.bottom : '10px'};
    right: ${props => props.right ? props.right : '10px'};
    border-radius: 5px;
    border: ${props => props.border ? props.border : 'none'};
    transition: width 0.35s, height 0.35s, border-radius 0.35s;
  }

  &:hover {
    opacity: ${props => props.show ? 1 : 0};
    cursor: ${props => props.show ? 'pointer' : 'auto'};
    width: 44px;
    height: 44px;
    border-radius: 10px;    
  }
`;


class BackToTop extends Component {

  constructor(props) {
    super(props);

    this.state = {
      intervalId: 0,
      show: false
    }

    // binding
    this.handleOnClick = this.handleOnClick.bind(this);
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

  handleOnClick() {
    const intervalId = setInterval(this.scrollStep, this.props.delayInMs);
    this.setState({ intervalId });
  }

  render() {
    const showValue = this.state.show;

    return (
      <ScrollButtonStyle show={showValue}
          onClick={this.handleOnClick}
      >
          <ExpandLessIcon />
      </ScrollButtonStyle>
    );
  }
}

BackToTop.propTypes = {
  scrollStepInPx: PropTypes.string,
  delayInMs: PropTypes.string,
  showAfterScrolledOffset: PropTypes.string
};

BackToTop.defaultProps = {
  scrollStepInPx: '50',
  delayInMs: '16',
  showAfterScrolledOffset: '200'
};

export default BackToTop;
