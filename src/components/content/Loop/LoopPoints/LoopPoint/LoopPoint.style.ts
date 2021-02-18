import styled from "styled-components";



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
    let shadowColor;
    if (props.isActive) {
      if (props.currentColor === 'blue') return 'background: radial-gradient(#44C3FF, #116BFF)';
      if (props.currentColor === 'red') return 'background: radial-gradient(#F37087, #E52962)';
      if (props.currentColor === 'purple') return 'background: radial-gradient(#E63EAD, #A81DA3)';
      if (props.currentColor === 'yellow') return 'background: radial-gradient(#FBEF53, #E3A31D)';
      if (props.currentColor === 'green') return 'background: radial-gradient(#A3DE31, #3CB216)';
    }else if(props.isUsed&&props.isPaused) {
      if (props.currentColor === 'blue') shadowColor ='264D8DFF';
      if (props.currentColor === 'red') shadowColor ='264D8DFF';
      if (props.currentColor === 'purple') shadowColor ='752A75FF';
      if (props.currentColor === 'yellow') shadowColor ='7C6838FF'; 
      if (props.currentColor === 'green') shadowColor ='3D6933FF';
      return `box-shadow: 0 0 0 2px #${shadowColor}; background-color: transparent`
    } else if(props.isUsed){
      let bgColor;
      if (props.currentColor === 'blue') {shadowColor = '1576FFFF'; bgColor='2A3A69FF'}
      if (props.currentColor === 'red') {shadowColor = 'E93068FF'; bgColor='57344CFF'}
      if (props.currentColor === 'purple') {shadowColor = 'B422A6FF'; bgColor='4C2E56FF'}
      if (props.currentColor === 'yellow') {shadowColor = 'ECBC29FF'; bgColor='55473BFF'} 
      if (props.currentColor === 'green') {shadowColor = '4EBF1DFF'; bgColor='374D3BFF'}
      return `box-shadow: 0 0 0 2px #${shadowColor}; background-color: #${bgColor}`
    }}};
`