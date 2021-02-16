import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getButtonsOnPause, getCurrentActiveButton, getLoopPoints} from '../../../selectors/selectors';
import { loopActions } from '../../../redux/reducers/loopReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRedoAlt, faPause} from "@fortawesome/free-solid-svg-icons";
import { LoopButton } from '../DrumButton/DrumButton.style';

type DrumButtonProps = {
    colorType: string,
    sound: any,
    id: string
};

const LoopDrumButton = (props: DrumButtonProps) => {
    const {id, sound, colorType} = props;
    const [animate, setAnimate] = useState(false);
    const animationEnd =()=>{setAnimate(false)};
    const play=()=>{
        setAnimate(true);
        sound.currentTime=0;
        sound.play();
    };

    const dispatch = useDispatch();
    const isActive = id === useSelector(getCurrentActiveButton).id;
    const hasSoundInLoop = useSelector(getLoopPoints).some((a,i)=>a[i].some(a=>a.id===id));
    const isPaused = useSelector(getButtonsOnPause).some(a=>a===id);

    const loopButtonHandler = () => {
        if(isActive) {
              play();
              if(hasSoundInLoop) dispatch(loopActions.toggleButtonOnPause());
        } else {dispatch(loopActions.setCurrentButton(id, sound, colorType, isPaused))}
    };

    return (
        <LoopButton isActive={isActive} colorType={colorType} animate={animate}
                    onClick={loopButtonHandler} onAnimationEnd={animationEnd}>

            {hasSoundInLoop &&
                <div>
                    {!isPaused
                        ? <FontAwesomeIcon icon={faRedoAlt}/>
                        : <FontAwesomeIcon icon={faPause}/>}
                </div>
            }


        </LoopButton>
    );

};
export default LoopDrumButton;


