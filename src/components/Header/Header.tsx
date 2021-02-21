import React from 'react';
import styled from "styled-components";
import HeaderButton from "./HeaderButton/HeaderButton";
import SideToggleIcons from "./HeaderButton/SideToggleIcons";
import {useSelector} from "react-redux";
import {getBpm, getLoopModeIsActive, getShowSelect} from "../../selectors/selectors";
import PresetNav from "./PresetNav";

type Props = {};

const Header = (props: Props) => {
    const loopModeIsActive = useSelector(getLoopModeIsActive);
    const showSelect = useSelector(getShowSelect);
    const bpm = useSelector(getBpm);
    return (
        <Container>
            <HeaderButton subTitle={`${bpm} BPM`} type='loop'/>
            <HeaderButton subTitle={'Preset'} type='preset'/>
            <HeaderButton subTitle={loopModeIsActive?'Play/Pause':'Side'} type='toggle'/>
            {showSelect&&<PresetNav/>}
        </Container>
    );
};
export default React.memo(Header);




const Container = styled.header`
    display: flex;
    padding: 20px 10px;
	justify-content: space-between;
    background-color: #2F2F40;
`