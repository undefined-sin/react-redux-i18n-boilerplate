import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { t } from '@basepath/utils/appUtils';
import { GoBack } from '@basepath/components/router';


const Table = styled.div`
  @media(min-width: 768px){
    max-width: 768px;
  }
`;
const TableHeader = styled.div`
  height: 60px;
  background-color: red;
  padding: 0;
  @media(min-width: 768px){
    width: ${props => (props.main ? 100 : 90)}%;
  }
  @media(max-width: 768px){
    width: 100%;
  }
  display: inline-block;
  
`;
const ExpandIcon = styled.div`
  display: inline-block;
  padding: 0px;
  width: 50px;
  height: 60px;
  text-align: center;
  padding-top: 15px;
`;

const TableTitle = styled.div`
   background-color: blue;
   display: inline-block;
   height: 30px;
   @media(min-width: 768px){
    width: 75%;
   }
   @media(max-width: 768px){
    width: 75%;
   }
`;
const SubTitle = styled.div`
   background-color: yellow;
   display: inline-block;
   height: 30px;
   width: 15%;
   margin-left: 10px;
`;

const TableRow = styled.div`
   min-height: 60px;
   display: block;
   background-color: green;
   @media(min-width: 768px){
    width: 768px;
   }
   @media(max-width: 768px){
    width: 100%;
   }
`;

const TableContent = styled.div`
  background-color: ${props => props.color};
  height: 150px;
  width: 100%;
  display: inline-block;
`;

const TableGroup = styled.div`
  min-width: 10%;
  min-height: 100px;
  @media(max-width: 768px){
    min-width: 100%;
    min-height: 30px;
    text-align: center;
  }
  display: inline-block;
  background: pink;
`;

const Page1 = ({ history }) => (
  <div>
    <p>{ t('welcome.time', { date: new Date() }) }</p>
    <GoBack history={history}>{ t('goback') }</GoBack>
    <Table>
      <TableRow>
        <TableHeader main="true">
          <ExpandIcon>+</ExpandIcon>
          <TableTitle>Transaction from bank</TableTitle>
          <SubTitle>$ 20,00</SubTitle>
        </TableHeader>
        <TableContent color="green">
          <TableRow>
            <TableGroup>12 Apr.</TableGroup>
            <TableHeader>
              <ExpandIcon>+</ExpandIcon>
              <TableTitle>Transaction from bank</TableTitle>
              <SubTitle>$ 20,00</SubTitle>
            </TableHeader>
          </TableRow>
          <TableRow>
            <TableGroup>12 Apr.</TableGroup>
            <TableHeader>
              <ExpandIcon>+</ExpandIcon>
              <TableTitle>Transaction from bank</TableTitle>
              <SubTitle>$ 20,00</SubTitle>
            </TableHeader>
            <TableContent color="grey">
              Testando
            </TableContent>
          </TableRow>
          <TableRow>
            <TableGroup>12 Apr.</TableGroup>
            <TableHeader>
              <ExpandIcon>+</ExpandIcon>
              <TableTitle>Transaction from bank</TableTitle>
              <SubTitle>$ 20,00</SubTitle>
            </TableHeader>
            <TableContent color="violet">
              Testando
            </TableContent>
          </TableRow>
        </TableContent>
      </TableRow>
    </Table>
  </div>
);
Page1.propTypes = {
  history: PropTypes.object.isRequired //eslint-disable-line
};

function mapStateToProps() {
  return {
  };
}
function mapDispatchToProps() {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(Page1);
