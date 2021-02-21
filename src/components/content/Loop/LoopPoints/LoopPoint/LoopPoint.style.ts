import styled from "styled-components";
import {getGradient} from "../../../../generic/DrumButton/DrumButton.style";



export const PauseIcon = styled.div`
  position: absolute;
  top: 15px;
  left: 21px;
  font-size: 14px;
  pointer-events: none;
`



export const Point = styled.div<{currentColor:string, isActive:boolean, isUsed: boolean, isPaused: boolean}>`
  display: inline-block;
  height: 50px;
  width: 50px;
  background-color: #445;
  margin: 4px 4px;
  border-radius: 3px;
  box-shadow: 0 10px 5px 0 #2E2E3DFF;
  cursor: pointer;
  position: relative;
  ${props => {
    const {isActive, isUsed, currentColor, isPaused} = props;
    let shadowColor;
    if (isActive) {
      return 'background:' + getGradient(currentColor);
    }else if(isUsed&&isPaused) {
      if (currentColor === 'blue') shadowColor ='264D8DFF';
      if (currentColor === 'red') shadowColor ='264D8DFF';
      if (currentColor === 'purple') shadowColor ='752A75FF';
      if (currentColor === 'yellow') shadowColor ='7C6838FF'; 
      if (currentColor === 'green') shadowColor ='3D6933FF';
      return `box-shadow: 0 0 0 2px #${shadowColor}; background-color: transparent`
    } else if(isUsed){
      let bgColor;
      if (currentColor === 'blue') {shadowColor = '1576FFFF'; bgColor='2A3A69FF'}
      if (currentColor === 'red') {shadowColor = 'E93068FF'; bgColor='57344CFF'}
      if (currentColor === 'purple') {shadowColor = 'B422A6FF'; bgColor='4C2E56FF'}
      if (currentColor === 'yellow') {shadowColor = 'ECBC29FF'; bgColor='55473BFF'} 
      if (currentColor === 'green') {shadowColor = '4EBF1DFF'; bgColor='374D3BFF'}
      return `box-shadow: 0 0 0 2px #${shadowColor}; background-color: #${bgColor}`
    }}};
`