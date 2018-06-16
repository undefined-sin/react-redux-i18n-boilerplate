import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Icon
} from 'react-materialize';
import { Link } from 'react-router-dom';
import Pallete from '@basepath/components/pallete';


const Wrapper = styled.div`
  position: fixed;
  display: block;
  top: 0;
  > ul {
    list-style-type: none;
    padding: 0px;
    display: ${props => props.open ? 'visible' : 'none'};
  }
  height: 100%;
  width: ${props => props.open ? '15rem' : '5rem'};
  transition: width 1s;
  background-color: ${Pallete.baseGrey};
  box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.3);
  padding: 15px;
`;

const MenuOption = styled.li`
  margin-top: 35px;
  padding: 10px;
  &:hover {
    background-color: ${Pallete.baseHoverGrey};
    cursor: pointer;
  }
`;

const spinFrame = keyframes`
  50% { transform:translateX(-10px); }
`;

const LeftIcon = styled.span`
  float: right;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
  animation:${spinFrame} 1.5s ease-out infinite;
`;
const Box = styled.div`
  padding: 15px 0 15px 0px;
`;

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  handleOpenClose = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (<Wrapper open={this.state.open}>
      <LeftIcon onClick={this.handleOpenClose} open={this.state.open}>
        <Icon small>arrow_back</Icon>
      </LeftIcon>
      <Box>
          Adilson A.
      </Box>
      <ul>
        <MenuOption>
          <strong><Link to="about">Who am I?</Link></strong>
        </MenuOption>
        <MenuOption>
          <strong><Link to="contact">Contact</Link></strong>
        </MenuOption>
        <MenuOption>
          <strong><Link to="tech">Technologies</Link></strong>
        </MenuOption>
      </ul>
    </Wrapper>);
  }
}

export default Sidebar;
