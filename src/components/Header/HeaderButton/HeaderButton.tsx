import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faPlay, faPause, faBold, faFont, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { Container, HeaderButtonIcon, PresetButtonIcon } from './HeaderButton.style';
import SideToggleIcons from "./SideToggleIcons";
import { loopActions } from '../../../redux/reducers/loopReducer';
import { presetActions } from "../../../redux/reducers/presetReducer";
import { getFirstIsActive, getLoopModeIsActive, getPlay, getPresetIcon } from '../../../selectors/selectors';


type Props = {
    subTitle: string
    type: string
};

const HeaderButton = (props: Props) => {
    const dispatch = useDispatch();
    const [animate, setAnimate] = useState(false);
    const loopModeIsActive = useSelector(getLoopModeIsActive);
    const firstIsActive = useSelector(getFirstIsActive);
    const play = useSelector(getPlay);
    const presetIcon = useSelector(getPresetIcon);

    const clickHandler = () => {
        setAnimate(true)
        if (props.type === 'loop') return dispatch(loopActions.toggleLoopMode());
        if (props.type === 'preset') return dispatch(presetActions.togglePresetSelect());
        if (props.type === 'toggle') return loopModeIsActive
            ? dispatch(loopActions.togglePlay())
            : dispatch(presetActions.toggleSide());
    };
    const animationEnd = () => { setAnimate(false) };

    return (
        <Container animate={animate} onClick={clickHandler} onAnimationEnd={animationEnd}>
            {props.type === 'loop' && <HeaderButtonIcon $isActive={loopModeIsActive} icon={faRedoAlt} />}
            {props.type === 'preset' && <PresetButtonIcon icon={presetIcon} />}
            {props.type === 'toggle' && (!loopModeIsActive
                ? <SideToggleIcons isActive={firstIsActive} icon1={faFont} icon2={faBold} />
                : <SideToggleIcons isActive={play} icon1={faPlay} icon2={faPause} />)}
            <span>{props.subTitle}</span>
        </Container>
    );
};
export default React.memo(HeaderButton);



