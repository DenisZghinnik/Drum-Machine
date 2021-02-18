import React from 'react';
import styled from "styled-components";
import HeaderButton from "./HeaderButton/HeaderButton";
import {faRedoAlt, faRecordVinyl} from '@fortawesome/free-solid-svg-icons';
import SideToggleIcons from "./HeaderButton/SideToggleIcons";
import {useSelector} from "react-redux";
import {getBpm, getLoopModeIsActive, getNav} from "../../selectors/selectors";

type Props = {};

const Header = (props: Props) => {
    const loopModeIsActive = useSelector(getLoopModeIsActive);
    const nav = useSelector(getNav);
    const bpm = useSelector(getBpm);
    return (
        <Container>
            <HeaderButton isActive={loopModeIsActive} icon={faRedoAlt} subTitle={`${bpm} BPM`} type='loop'/>
            <HeaderButton isActive={nav.recordIsActive} icon={faRecordVinyl} subTitle={'Record'}/>
            <HeaderButton subTitle={'Side'} type='toggle'/>
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