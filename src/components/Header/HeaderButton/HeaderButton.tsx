import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {faPlay, faPause, faBold, faFont} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import { Container, HeaderButtonIcon, SideIcon} from './HeaderButton.style';
import SideToggleIcons from "./SideToggleIcons";
import { navActions } from '../../../redux/reducers/navReducer';
import {getFirstIsActive, getLoopModeIsActive, getPlay} from '../../../selectors/selectors';
import { loopActions } from '../../../redux/reducers/loopReducer';
import {drumsActions} from "../../../redux/reducers/drumsReducer";

type Props = {
    icon?: IconDefinition,
    subTitle: string,
    isActive?: boolean,
    type?: string
};

const HeaderButton = (props: Props) => {
    const dispatch = useDispatch();
    const loopModeIsActive = useSelector(getLoopModeIsActive);
    const firstIsActive = useSelector(getFirstIsActive);
    const play = useSelector(getPlay);

    const [animate, setAnimate] = useState(false);

    const clickHandler = () => {
        setAnimate(true)
        if (props.type === 'toggle') {
            loopModeIsActive
                ? dispatch(loopActions.togglePlay())
                : dispatch(drumsActions.toggleSide())}
        else if (props.type === 'loop') {
            dispatch(loopActions.toggleLoopMode());}
        else {dispatch(navActions.toggleRecord())}};

    const animationEndHandler = () =>{setAnimate(false)};
    return (
        <Container animate={animate} onClick={clickHandler} onAnimationEnd={animationEndHandler}>
            {props.icon
                ? <HeaderButtonIcon $isActive={props.isActive} icon={props.icon}/>
                : !loopModeIsActive
                    ? <SideToggleIcons isActive={firstIsActive} icon1={faFont} icon2={faBold}/>
                    : <SideToggleIcons isActive={play} icon1={faPlay} icon2={faPause}/> }

            <span>{loopModeIsActive&&!props.icon ? 'Play/Pause' : props.subTitle  }</span>
        </Container>
    );
};
export default HeaderButton;



