import styled from 'styled-components';


export const Tooltip = styled.div`
  cursor: pointer;
  position: relative;
  background: white;
  box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.1);
  border: rgba(0,0,0,0.3);
  padding: 10px;
  &:before {
   position: absolute;
   top: -5px;
   border-bottom: 10px solid white;
   box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.1);
   left: 10%;
   display: block;
   width: 0; 
   height: 0; 
   border-left: 8px solid transparent;
   border-right: 8px solid transparent;
   overflow: hidden;
   content: ' ';
  }
  transition: 1s ease;
`;
