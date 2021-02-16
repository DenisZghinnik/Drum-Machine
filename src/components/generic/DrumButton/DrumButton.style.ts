import styled, {css, keyframes} from 'styled-components';
import {DefaultButtonStyle} from "../../Header/HeaderButton/HeaderButton.style";

const buttonAnimation = keyframes`
  0% {background: radial-gradient(#fff, transparent);}
  25% {opacity: 1}
  100% {opacity: 0}
`;
const animationRules = css`
    ${buttonAnimation} 0.2s 1 ease forwards;
`;

export const Button = styled.button<{colorType:string, animate: boolean}>`
  width: 150px;
  height: 150px;
  margin-bottom: 8px;
  background: ${props=> {
    if(props.colorType==='blue')return 'radial-gradient(#44C3FF, #116BFF)';
    if(props.colorType==='red')return 'radial-gradient(#F37087, #E52962)';
    if(props.colorType==='purple')return 'radial-gradient(#E63EAD, #A81DA3)';
    if(props.colorType==='yellow')return 'radial-gradient(#FBEF53, #E3A31D)';
    if(props.colorType==='green')return 'radial-gradient(#A3DE31, #3CB216)';
  }};
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff;
    opacity: 0;
    animation: ${props=>props.animate ? animationRules : ''};
  };
  ${DefaultButtonStyle}
`;
export const LoopButton = styled(Button)<{isActive: boolean}>`
  color: #334;
  font-size: 25px;
  width: 73px;
  height: 73px;
  border: ${props=> {
    return props.isActive ? '2px solid #fff'  : 'none'
  }};
`;