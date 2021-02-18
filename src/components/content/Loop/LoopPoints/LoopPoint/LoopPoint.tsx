import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ActiveButton, loopActions} from "../../../../../redux/reducers/loopReducer";
import {PauseIcon, Point } from './LoopPoint.style';
import {getCurrentButton, getCurrentPoint} from "../../../../../selectors/selectors";

type LoopPointProps = {
    id:number,
    pointSounds: ActiveButton[]
};

const LoopPoint = (props: LoopPointProps) => {
    const dispatch=useDispatch();
    const currentButtonColor = useSelector(getCurrentButton).color;
    const currentButtonId = useSelector(getCurrentButton).id;
    const {id, pointSounds} = props;

    const isActive = id===useSelector(getCurrentPoint);
    const isUsed = pointSounds.some(a=>a.id===currentButtonId);
    const indexOfActive = pointSounds.findIndex(a=>a.id===currentButtonId);
    const isPaused = indexOfActive>=0 ? pointSounds[indexOfActive]?.isPaused : false;
    
    const clickHandler=()=>{
        dispatch(loopActions.toggleCurrentSoundInPoint(id));
    };
    return (
        <Point isActive={isActive}
               isUsed={isUsed}
               isPaused={isPaused}
               currentColor={currentButtonColor}
               onClick={clickHandler}>

            {isPaused&&<PauseIcon>||</PauseIcon>}

        </Point>
    );
};
export default React.memo(LoopPoint);

