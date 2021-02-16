import styled from "styled-components";

export const PauseIcon = styled.div`
  position: absolute;
  top: 15px;
  left: 21px;
  font-size: 14px;
`
export const Point = styled.div<{activeColorType:string, isActive: boolean, isPaused: boolean}>`
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
      if(props.isActive&&props.isPaused) {
        if (props.activeColorType === 'blue') return 'box-shadow: 0 0 0 2px #264D8DFF; background-color: transparent';
        if (props.activeColorType === 'red') return 'box-shadow: 0 0 0 2px #813053FF; background-color: transparent';
        if (props.activeColorType === 'purple') return 'box-shadow: 0 0 0 2px #752A75FF; background-color: transparent';
        if (props.activeColorType === 'yellow') return 'box-shadow: 0 0 0 2px #7C6838FF; background-color: transparent';
        if (props.activeColorType === 'green') return 'box-shadow: 0 0 0 2px #3D6933FF; background-color: transparent';
      } else if(props.isActive){
        if (props.activeColorType === 'blue') return 'box-shadow: 0 0 0 2px #1576FFFF; background-color: #2A3A69FF';
        if (props.activeColorType === 'red') return 'box-shadow: 0 0 0 2px #E93068FF; background-color: #57344CFF';
        if (props.activeColorType === 'purple') return 'box-shadow: 0 0 0 2px #B422A6FF; background-color: #4C2E56FF';
        if (props.activeColorType === 'yellow') return 'box-shadow: 0 0 0 2px #ECBC29FF; background-color: #55473BFF';
        if (props.activeColorType === 'green') return 'box-shadow: 0 0 0 2px #4EBF1DFF; background-color: #374D3BFF';
      }}};
`