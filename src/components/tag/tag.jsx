import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import img from './images/ic_deleteTag.png';

const TagStyled = styled.div`
    color: #888;
    line-height: 20px;
    padding: 5px 5px 5px 10px;
    border: 1px solid #c3c3c3;
    border-radius: 3px;
    margin: 5px 6px 0 0;
	width: 132px;

	&:hover {
	    color: #666;
        background: #f2f7fb;
	}
`;

const ImgStyled = styled.img`
	position: relative;
	height: 20px;
	float: right;
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
  }

  render() {
    const { title, onClick, onDelete } = this.props;

    return (
      <TagStyled onClick={onClick}>
        <span>{title}</span>
        <a onClick={onDelete}>
            <ImgStyled src={img}></ImgStyled>
        </a>
      </TagStyled>
    );
  }
}

export default Tag;