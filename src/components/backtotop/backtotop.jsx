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

  &:hover {
    opacity: ${props => props.show ? 1 : 0};
    cursor: ${props => props.show ? 'pointer' : 'auto'};
    width: 44px;
    height: 44px;
    border-radius: 10px;
`;

const ScrollStyle = styled.div`
	display: ${props => props.show ? 'block' : 'none'};
	position: fixed;
	z-index: 200;
	right: 20px;
	bottom: 20px;
	cursor: pointer;
	background: #fff url(ic_backToTop.svg) 17px 18px no-repeat;
	background-size: 16px;
	border-radius: 3px;
	border: 1px solid #0098db;
	color: #0098db;
	height: 48px;
	line-height: 46px;
	padding: 0 20px 0 48px;
	-webkit-box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2);
	box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2);

  &:hover {
	background-image: url(ic_backToTop.svg);
	background-color: #114969;
    border-color: #114969;
    color: #fff;
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
      <ScrollStyle show={showValue}
          onClick={this.handleOnClick}
      >
          <ExpandLessIcon>nach oben</ExpandLessIcon>
      </ScrollStyle>
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
