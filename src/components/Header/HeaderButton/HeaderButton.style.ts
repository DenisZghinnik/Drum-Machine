import styled, {css, keyframes} from 'styled-components';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconLookup, IconProp} from "@fortawesome/fontawesome-svg-core";

const animation = keyframes`
  0% {background-color: rgba(255,255,255,0.5)}
  100% {background-color: rgba(255,255,255,0)}
`;
const animationRule = css`
    ${animation} 0.35s 1 ease forwards;
`;

export const DefaultButtonStyle = css`
  border: none;
  cursor: pointer;
  border-radius: 3px;
  position: relative;
  background-color: rgba(255,255,255,0);
  &:focus{
    border: none;
    outline: none;
  }
`;

export const Container = styled.header<{animate:boolean}>`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  user-select: none;   
  animation: ${props=> props.animate ? animationRule : ''};
  ${DefaultButtonStyle};
`;
const StyledIcon = css`
  color: grey;
  font-size: 18px;
  margin-bottom: 6px;
  padding: 0 2px;
`;
export const HeaderButtonIcon = styled(FontAwesomeIcon)<{$isActive:boolean|undefined}>`
  ${StyledIcon}
  color:${props=> props.$isActive ? '#EDBF06FF' : 'grey'};
`;
export const SideIcon = styled(FontAwesomeIcon)<{$isActive:boolean}>`
  ${StyledIcon}
  color:${props=>props.$isActive? '#e5e5e5' : 'grey'};
`;