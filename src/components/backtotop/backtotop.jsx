import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import img from './images/ic_backToTop.png';

const ScrollStyle = styled.div`
	display: ${props => props.show ? 'block' : 'none'};
	position: ${props => props.position ? props.position : 'fixed'};
	z-index: ${props => props.zIndex ? props.zIndex : 200};
	right: ${props => props.right ? props.right : '20px'};
	bottom: ${props => props.bottom ? props.bottom : '20px'};
	cursor: ${props => props.cursor ? props.cursor : 'pointer'};
	background: #fff url(${img}) 15px 22px no-repeat;
	background-size: 16px;
	border-radius: ${props => props.borderRadius ? props.borderRadius : '3px'};
	border: ${props => props.border ? props.border : '1px solid #0098db'};
	color: ${props => props.color ? props.color : '#0098db'};
	height: ${props => props.height ? props.height : '48px'};
	line-height: ${props => props.lineHeight ? props.lineHeight : '48px'};
	padding: ${props => props.padding ? props.padding : '0 20px 0 48px'};
	-webkit-box-shadow: ${props => props.boxShadow ? props.boxShadow : '0 8px 10px 0 rgba(0,0,0,0.2)'};
	box-shadow: ${props => props.boxShadow ? props.boxShadow : '0 8px 10px 0 rgba(0,0,0,0.2)'};

  &:hover {
	background-image: url(${img});
	background-color: ${props => props.backgroundColor ? props.backgroundColor : '#114969'};
    border-color: ${props => props.borderColor ? props.borderColor : '#114969'};
    color: ${props => props.color ? props.color : '#fff'};
`;

class BackToTop extends Component {

    static propTypes = {
        delayInMs: PropTypes.string,
        scrollStepInPx: PropTypes.string,
        showAfterScrolledOffsetInPx: PropTypes.string,
        position: PropTypes.string,
        zIndex: PropTypes.string,
        right: PropTypes.string,
        bottom: PropTypes.string,
        cursor: PropTypes.string,
        borderRadius: PropTypes.string,
        border: PropTypes.string,
        color: PropTypes.string,
        height: PropTypes.string,
        lineHeight: PropTypes.string,
        padding: PropTypes.string,
        boxShadow: PropTypes.string,
        backgroundColor: PropTypes.string,
        borderColor: PropTypes.string,
        color: PropTypes.string
    };

    static defaultProps = {
        delayInMs: '16',
        scrollStepInPx: '50',
        showAfterScrolledOffsetInPx: '320',

        position: undefined,
        zIndex: undefined,
        right: undefined,
        bottom: undefined,
        cursor: undefined,
        borderRadius: undefined,
        border: undefined,
        color: undefined,
        height: undefined,
        lineHeight: undefined,
        padding: undefined,
        boxShadow: undefined,
        backgroundColor: undefined,
        borderColor: undefined,
        color: undefined
    };

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
    const scrollYOffset = this.props.showAfterScrolledOffsetInPx;
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
    const text = this.props.text;
    const position = this.props.position;
    const zIndex = this.props.zIndex;
    const right = this.props.right;
    const bottom = this.props.bottom;
    const cursor = this.props.cursor;
    const borderRadius = this.props.borderRadius;
    const border = this.props.border;
    const color = this.props.color;
    const height = this.props.height;
    const lineHeight = this.props.lineHeight;
    const padding = this.props.padding;
    const boxShadow = this.props.boxShadow;

    return (
      <ScrollStyle id="scrollStyledId"
          show={showValue}
          onClick={this.handleOnClick}

          position = {position}
          zIndex = {zIndex}
          right = {right}
          bottom = {bottom}
          cursor = {cursor}
          borderRadius = {borderRadius}
          border = {border}
          color = {color}
          height = {height}
          lineHeight = {lineHeight}
          padding = {padding}
          boxShadow = {boxShadow}
      >
      {text}
      </ScrollStyle>
    );
  }
}

export default BackToTop;