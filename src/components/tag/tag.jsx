import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import img from './images/ic_deleteTag.svg';

const TagStyled = styled.div`
    color: #888;
    line-height: 20px;
    padding: 5px 5px 0px 10px;
    border: 1px solid #c3c3c3;
    border-radius: 3px;
    margin: 5px 6px 0 0;

     -webkit-transition: .13s ease-out;
     -o-transition: .13s ease-out;
     transition: .13s ease-out;
     -webkit-animation: .3s tags--bump 1 ease-out;
     animation: .3s tags--bump 1 ease-out;

	&:hover {
	    color: #666;
	    background: ${props => props.iconImageIsHover ? '#ddecf6' : '#f2f7fb'};
	}
`;

const ImgStyled = styled.img`
	position: relative;
	top: -5%;
	height: 24px;
	float: right;
	margin-left: 6px;
	transform: rotate(45deg);

	&:hover {
	    cursor: pointer;
	}
`;

class Tag extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        clearAll: PropTypes.bool.isRequired,
        onClick: PropTypes.func,
        onDelete: PropTypes.func
    };

    static defaultProps = {
        title: '-',
        clearAll: false
    };

  constructor(props) {
    super(props);

    this.state = { iconImageIsHover: false };

    this.onMouseEnterInImageIcon = this.onMouseEnterInImageIcon.bind(this);
    this.onMouseLeaveInImageIcon = this.onMouseLeaveInImageIcon.bind(this);
  }

  onMouseEnterInImageIcon() {
    this.setState({ iconImageIsHover: true });
  }

  onMouseLeaveInImageIcon() {
    this.setState({ iconImageIsHover: false });
  }

  render() {
    const { title, onClick, onDelete } = this.props;
    const { iconImageIsHover } = this.state;

    return (
      <TagStyled onClick={onClick} iconImageIsHover={iconImageIsHover} >
        <span title={title}>{title}</span>
        <a onClick={onDelete} onMouseEnter={this.onMouseEnterInImageIcon} onMouseLeave={this.onMouseLeaveInImageIcon}>
            <ImgStyled src={img}></ImgStyled>
        </a>
      </TagStyled>
    );
  }
}

export default Tag;