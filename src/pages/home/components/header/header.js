import React, { 
  Component
} from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import i18next from 'i18next';
import App from '@basepath/App'

const HeaderDiv = styled.div`
  margin: 0 auto;
  width: 768px;
  height: 150px;
`;

const Title = styled.h2`
  font-size: 1rem;
  font-family: Arial;
`;

const Menu = styled.ul`
  box-sizing: content-box;
`;

const MenuItem = styled.li`
  display: inline-block;
  margin-left: 10px;
  &:hover {
	cursor: pointer;
	color: red;
  } 
`;

function changeLanguage(event){
  i18next.changeLanguage(event.target.value.toLowerCase());
}

class Header extends Component {

  static propTypes = {
    language: PropTypes.string.isRequired,
    t: PropTypes.func.isRequired
  };

  render(){
    const {
      t,
      language
    } = this.props;
    return(
      <HeaderDiv>
    <Title>{t('home:header.title')}</Title>
		<Menu>
		  <MenuItem>{t('home:header.home')}</MenuItem>
		  <MenuItem>{t('home:header.about')}</MenuItem>
		  <MenuItem>{t('home:header.knowmore')}</MenuItem>
      <MenuItem>
         <select onChange={changeLanguage} value={this.props.language}>
           <option value="de">De</option>
           <option value="en">En</option>
         </select>
      </MenuItem>
		</Menu>
	  </HeaderDiv>
    );
  }
}

export default Header;