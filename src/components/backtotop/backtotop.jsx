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
        delayInMs: PropTypes.number,
        scrollStepInPx: PropTypes.number,
        showAfterScrolledOffsetInPx: PropTypes.number,
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
        delayInMs: 16,
        scrollStepInPx: 50,
        showAfterScrolledOffsetInPx: 320,

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

  manageVisibility(showValue) {
    this.setState({ show: showValue });
  }

  onScroll() {
    const scrollYOffset = this.props.showAfterScrolledOffsetInPx;
    if (window.pageYOffset >= scrollYOffset) {
      if (!this.state.show) {
        this.manageVisibility(true);
      }
    } else {
      if (this.state.show) {
        this.manageVisibility(false);
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

    // TODO: Another alternative implementation. Very elegant but does not work in IE. Check with Imad
    // window.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  render() {
    const { show } = this.state;
    const { text } = this.props;

    return (
      <ScrollStyle id="scrollStyledId"
          {...this.props}
          show={show}
          onClick={this.handleOnClick}
      >
      {text}
      </ScrollStyle>
    );
  }
}

export default BackToTop;