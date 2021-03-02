import React from 'react';
import {useSelector} from "react-redux";
import styled from 'styled-components/macro';
import {presetItem} from "../../../redux/reducers/presetReducer";
import DrumButton from '../../generic/DrumButton/DrumButton';
import LoopDrumButton from '../../generic/LoopDrumButton/LoopDrumButton';
import {getLoopModeIsActive, getPresetA, getPresetB} from "../../../selectors/selectors";

type Props = {
    side: string
};

const Side = (props: Props) => {
    const presetA = useSelector(getPresetA);
    const presetB = useSelector(getPresetB);
    const loopModeIsActive = useSelector(getLoopModeIsActive)

    const preset = props.side==='A'
        ? presetA
        : presetB;

    return (
        <Container>
            {loopModeIsActive
                ? preset.map((a:presetItem,i:number)=> {
                    return <LoopDrumButton key={`side${i}`}
                                           id={a.id}
                                           colorType={a.color}
                                           sound={a.sound}/>})
                : preset.map((a:presetItem,i:number)=> {
                    return <DrumButton key={`side${i}`}
                                       id={a.key}
                                       colorType={a.color}
                                       sound={a.sound}/>})
            }
        </Container>
    );
};
export default React.memo(Side) ;


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`