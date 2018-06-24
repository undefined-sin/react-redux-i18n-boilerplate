import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
import Pallete from '@basepath/components/pallete';
import { Tooltip } from '../tooltip/tooltip';

const moveToX = `
  transform: translateX(-205px);
  height: 55px;
`;


const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  overflow: hidden;
  display: block;
  @media(max-width: 400px) {
    width: 100%;
  }
  width: 250px;
  height: 100%;
  padding: 10px;
  background-color: ${Pallete.baseGrey};
  box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.3);
  transition: 1s ease;
  ${props => !props.open && moveToX}
`;

const LeftIcon = styled.span`
  float: right;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
  transition: 1s ease; 
  transform: rotate(${props => (props.open ? 0 : 180)}deg);
`;
const Box = styled.div`
  display: inline-block;
  > img {
    width: 75px;
    margin-bottom: 10px;
  }
`;

const RoundedImg = styled.img`
  border-radius: 50%;
  margin: 10px;
  box-shadow: -9px 10px 5px -10px rgba(0,0,0,0.25);
  cursor: pointer;
  transition: 0.1s ease;
  &:hover {
    opacity: 0.4
  }
`;

const HintTitle = styled.div`
   font-size: 0.8rem;
`;


const P = styled.p`
  margin: 0px;
  padding 0px;
`;

const Welcome = P.extend`
  font-size: 0.8rem;
  margin: 10px;
`;

const NameBox = styled.div`
   height: auto;
   background-color: #ededed;
   box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.08);
`;

const Card = styled.li`
  display: inline-block;
  font-size: 13px;
  min-width: 50px;
  min-height: 50px;
  margin: 0px 5px 10px 0px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.08);
`;

const RandomColorCard = Card.extend`
   &:hover {
    background-color: ${props => props.colors[_.random(0, props.colors.length - 1)]};
    color: white;
   }
   &:active {
     transform: translateX(5px) translateY(5px);
     opacity: 0px;
   }
   transition: 1s ease;
`;

const CardContainer = styled.ul`
   li:last-child {
     width: 100%;
   }
  
`;


const COLORS = ['purple', 'red', 'blue', 'green'];

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
      <h4>Hello there,</h4>
      <Box>
        <NameBox>
          <RoundedImg src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.0.80.80/p80x80/10486483_347246905427535_3592303360444032149_n.jpg?_nc_cat=0&amp;oh=31998b59f8a3566bae129a42f0d251c6&amp;oe=5BC25889" alt="" aria-label="Adilson Sin" role="img" />
        </NameBox>
        <Welcome>Welcome, this is my CV profile</Welcome>
        <Tooltip>
          <HintTitle>Your last login was at 24th Dec. 2018</HintTitle>
        </Tooltip>
        <CardContainer>
          <RandomColorCard colors={_.shuffle(COLORS.concat([]))}>
            <Link to="tech">Technologies</Link>
          </RandomColorCard>
          <RandomColorCard colors={_.shuffle(COLORS.concat([]))}>
            <Link to="about">About</Link>
          </RandomColorCard>
          <RandomColorCard colors={_.shuffle(COLORS.concat([]))}>
            <Link to="contact">Contact</Link>
          </RandomColorCard>
        </CardContainer>
      </Box>
    </Wrapper>);
  }
}

export default Sidebar;
