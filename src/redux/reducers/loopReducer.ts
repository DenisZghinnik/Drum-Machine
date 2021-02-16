import {buildAction, InferActionTypes} from "../../types/types";
import {initialActiveButton} from "./drumsReducer";

export const SET_BPM = 'app/loop/SET_BPM';
export const TOGGLE_LOOP='app/nav/TOGGLE_LOOP';
export const TOGGLE_PLAY = 'app/loop/TOGGLE_PLAY';
export const SET_CURRENT_BUTTON = 'app/loop/SET_CURRENT_BUTTON';
export const TOGGLE_CURRENT_SOUND = 'app/loop/TOGGLE_CURRENT_SOUND';
export const TOGGLE_BUTTON_ON_PAUSE = 'app/loop/TOGGLE_BUTTON_ON_PAUSE';

export type ActiveButton = {id:string, sound:HTMLAudioElement, color:string, isPaused :boolean};
export type loopState = {
    loopModeIsActive: boolean,
    bpm: number,
    play: boolean,
    bpmPoints: number[],
    loopPoints: {[key:string]:ActiveButton[]}[],
    currentActiveButton: ActiveButton,
    buttonsOnPause: string[]
}

const initialState: loopState = {
    loopModeIsActive: true,
    bpm: 125,
    play: false,
    bpmPoints: [...new Array(46)].map((_,i)=>i*5).slice(2),
    loopPoints: [...new Array(32)].map((_,i)=>({[i]:[]})),
    currentActiveButton: initialActiveButton,
    buttonsOnPause: []
};
export const loopReducer = (state = initialState, action:LoopActions):loopState => {
    const deepCopyOfState=():loopState=>{
        return {...state, buttonsOnPause: [...state.buttonsOnPause],
                    loopPoints: [...state.loopPoints.map((a,i) =>
                        Object.assign({},{[i]:[...a[i]]}))]};
    };
    switch (action.type) {
        case SET_BPM:
            return {...state, bpm: action.payload};
        case TOGGLE_LOOP:
            return state.loopModeIsActive
                ? {...state, loopModeIsActive: false, play: false}
                : {...state, loopModeIsActive: true, play: true};
        case TOGGLE_PLAY:
            return {...state, play: !state.play};
        case SET_CURRENT_BUTTON:
            return {...state, currentActiveButton: action.payload};
        case TOGGLE_CURRENT_SOUND:
            const id = action.payload;
            const chosenPointIndex = state.loopPoints.findIndex(a => Object.keys(a)[0] === id); //get index in points array
            const newState = deepCopyOfState();
            const chosenPointSounds = newState.loopPoints[chosenPointIndex][id]; //get an array of sounds of selected point
            chosenPointSounds.some(a=>a.id===newState.currentActiveButton.id) // if selected point contains selected sound
                ? newState.loopPoints[chosenPointIndex][id] = chosenPointSounds.filter(a => a.id !== newState.currentActiveButton.id)
                : chosenPointSounds.push(newState.currentActiveButton);
            return {...newState};
        case TOGGLE_BUTTON_ON_PAUSE:
            const newStateCopy = deepCopyOfState();
            const currentId = state.currentActiveButton.id;
            if(newStateCopy.buttonsOnPause.some(a=>a===currentId)) {            //if selected sound paused
                newStateCopy.buttonsOnPause = newStateCopy.buttonsOnPause.filter(a => a !== currentId); //true-->set pause to false
                newStateCopy.loopPoints.map((a,i)=>{                            //every selected sounds in loopPoints set pause to false
                    a[i].map(b=>b.id===currentId? b.isPaused=false : b)
                    return a
                });
                newStateCopy.currentActiveButton.isPaused = false;
            } else {
                newStateCopy.buttonsOnPause.push(currentId);                //false-->set pause to true
                newStateCopy.loopPoints.map((a,i)=>{
                    a[i].map(b=>b.id===currentId ? b.isPaused=true : b)
                    return a
                });
                newStateCopy.currentActiveButton.isPaused = true;
            };
            return {...newStateCopy}
        default:
            return state;
    };
};

export const loopActions = {
    setBPM: (bpm:number)=>buildAction(SET_BPM, bpm),
    toggleLoopMode: ()=>buildAction(TOGGLE_LOOP),
    togglePlay: ()=>buildAction(TOGGLE_PLAY),
    setCurrentButton: (id:string,sound:string,color:string, isPaused: boolean)=>
        buildAction(SET_CURRENT_BUTTON, {id, sound,color,isPaused}),

    chosenPointHandler: (id:number)=>buildAction(TOGGLE_CURRENT_SOUND, id),
    toggleButtonOnPause: ()=>buildAction(TOGGLE_BUTTON_ON_PAUSE)
};

export type LoopActions = ReturnType<InferActionTypes<typeof loopActions>>

