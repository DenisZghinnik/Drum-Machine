import {faBolt, faDiceD20} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import {getPreset, presetActions} from "../../redux/reducers/presetReducer";
type Props = {};
const PresetNav = (props: Props) => {
    const dispatch = useDispatch();
    const presetClick=(e:any)=> {
        const presetId = e.target.dataset.presetid
        dispatch(getPreset(+presetId));
    };
    const closeNav = () => {
        dispatch(presetActions.togglePresetSelect());
    }
    return (
        <Container onClick={closeNav}>
            <NavBlock>
                <h2>Presets</h2>
                <div data-presetid={1} onClick={presetClick}><FontAwesomeIcon icon={faDiceD20}/><span>EDM</span></div>
                <div data-presetid={2} onClick={presetClick}><FontAwesomeIcon icon={faBolt}/><span>Electro</span></div>
            </NavBlock>
        </Container>
    );
};
export default React.memo(PresetNav);

const Container = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.14);
`
const NavBlock = styled.div`
    background-color: #2F2F40;
    padding: 20px 50px;
    text-align: center;
    border-radius: 10px;
    h2 {
      margin-top: 10px;
      font-size: 25px;
    }
    div{
      margin: 20px 0;
      font-size: 22px;
      cursor: pointer;
      span{
        margin-left: 10px;
        pointer-events: none;
      }
    }
  }
`;