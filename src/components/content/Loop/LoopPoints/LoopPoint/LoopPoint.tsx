import React from 'react';
import { useDispatch } from 'react-redux';
import {ActiveButton, loopActions} from "../../../../../redux/reducers/loopReducer";
import {PauseIcon, Point } from './LoopPoint.style';

type LoopPointProps = {
    id:number,
    pointSounds: ActiveButton[],
    activeColorType: string,
    activeButtonId: string
};

const LoopPoint = (props: LoopPointProps) => {
    const dispatch=useDispatch();
    const isActive = props.pointSounds.some(a=>a.id===props.activeButtonId);
    const indexOfActive = props.pointSounds.findIndex(a=>a.id===props.activeButtonId);
    const isPaused = indexOfActive>=0 ? props.pointSounds[indexOfActive]?.isPaused : false;
    const clickHandler=(e: any)=>{
        const id:number = e.target.dataset.value;
        dispatch(loopActions.chosenPointHandler(id))
    };
    return (
        <Point isActive={isActive}
               isPaused={isPaused}
               activeColorType={props.activeColorType}
               onClick={clickHandler}
               data-value={props.id}>

            {isPaused&&<PauseIcon>||</PauseIcon>}

        </Point>
    );
};
export default LoopPoint;

