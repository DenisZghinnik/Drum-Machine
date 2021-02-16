import React from 'react';
import styled from 'styled-components';
import DrumButton from '../../generic/DrumButton/DrumButton';
import {presetItem} from "../../../redux/reducers/drumsReducer";
import {useSelector} from "react-redux";
import {getPresetA, getPresetB} from "../../../selectors/selectors";
import LoopDrumButton from '../../generic/LoopDrumButton/LoopDrumButton';

type SideProps = {
    side: string,
    isSmall: boolean
};

const Side = (props: SideProps) => {
    const presetA = useSelector(getPresetA);
    const presetB = useSelector(getPresetB);

    const preset = props.side==='A'
        ? presetA
        : presetB;

    return (
        <Container>
            {props.isSmall
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
export default Side;


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`