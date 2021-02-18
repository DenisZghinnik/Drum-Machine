import {buildAction, InferActionTypes} from "../../types/types";
import {initialLoopButton} from "./drumsReducer";

export const SET_BPM = 'app/loop/SET_BPM';
export const TOGGLE_LOOP='app/nav/TOGGLE_LOOP';
export const TOGGLE_PLAY = 'app/loop/TOGGLE_PLAY';
export const SET_CURRENT_BUTTON = 'app/loop/SET_CURRENT_BUTTON';
export const SET_CURRENT_POINT = 'app/loop/SET_CURRENT_POINT';
export const TOGGLE_CURRENT_SOUND = 'app/loop/TOGGLE_CURRENT_SOUND';
export const TOGGLE_BUTTON_ON_PAUSE = 'app/loop/TOGGLE_BUTTON_ON_PAUSE';

export type ActiveButton = {id:string, sound:HTMLAudioElement, color:string, isPaused :boolean};
export type loopState = {
    loopModeIsActive: boolean,
    bpm: number,
    intervalTime: number,
    play: boolean,
    bpmPoints: number[],
    loopPoints: {[key:string]:ActiveButton[]}[],
    currentButton: ActiveButton,
    currentPointIndex: number|null,
    buttonsOnPause: string[]
};

const initialState: loopState = {
    loopModeIsActive: false,
    bpm: 125,
    intervalTime: 120,
    play: false,
    bpmPoints: [...new Array(46)].map((_,i)=>i*5).slice(2),
    loopPoints: [...new Array(32)].map((_,i)=>({[i]:[]})),
    currentButton: initialLoopButton,
    currentPointIndex: null,
    buttonsOnPause: []
};

const deepCopyOfState=(state:loopState):loopState=>{
        return {...state, buttonsOnPause: [...state.buttonsOnPause],
                    loopPoints: [...state.loopPoints.map((a,i) =>
                        Object.assign({},{[i]:[...a[i]]}))]};
};

const toggleCurrentSound = (state: loopState, id: string):loopState => {
    let chosenPoint = state.loopPoints.find(a => Object.keys(a)[0] === id) as {[p:string]:Array<ActiveButton>};

    chosenPoint[id].some(a => a.id === state.currentButton.id)                     // if selected point contains selected sound
        ? chosenPoint[id] = chosenPoint[id].filter(a => a.id !== state.currentButton.id)
        : chosenPoint[id].push(state.currentButton);
    return state;
};
const toggleButtonOnPause = (state: loopState): loopState => {
    const currentId = state.currentButton.id;
    const setPause = (bool:boolean)=>{
        state.loopPoints.map((a, i) => {                                            //every selected sounds in loopPoints set pause to false
            a[i].map(b => b.id === currentId ? b.isPaused = bool : b)
            return a
        });
        state.currentButton.isPaused = bool;
    };
    if (state.buttonsOnPause.some(id => id === currentId)) {                        //if selected sound paused
        state.buttonsOnPause = state.buttonsOnPause.filter(id => id !== currentId); //true-->set pause to false
        setPause(false);
    } else {
        state.buttonsOnPause.push(currentId);                                       //false-->set pause to true
        setPause(true)
    };
    return state
}
const setCurrentPoint = (state: loopState) => {
    let currentPointIndex = state.currentPointIndex as number;
    let nextPointIndex: number | null = currentPointIndex === 31 ? 0 : currentPointIndex += 1;
    if (!state.play) nextPointIndex = null;
    return {...state, currentPointIndex: nextPointIndex}
};

export const loopReducer = (state = initialState, action:LoopActions):loopState => {
    switch (action.type) {
        case SET_BPM:
            const bpm = action.payload;
            const intervalTime = Math.round(60000 / bpm)/4;
            return {...state, bpm, intervalTime};
        case TOGGLE_LOOP:
            return state.loopModeIsActive
                ?   {...state, loopModeIsActive: false, play: false,  currentPointIndex: null}
                :   {...state, loopModeIsActive: true, play: true,  currentPointIndex: 0}
        case TOGGLE_PLAY:
            const index = state.play ? null : 0;
            return {...state, play: !state.play, currentPointIndex: index};
        case SET_CURRENT_BUTTON:
            return {...state, currentButton: action.payload};
        case TOGGLE_CURRENT_SOUND:
            return toggleCurrentSound(deepCopyOfState(state), action.payload);
        case TOGGLE_BUTTON_ON_PAUSE:
            return toggleButtonOnPause(deepCopyOfState(state));
        case SET_CURRENT_POINT:
            return setCurrentPoint(state);
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
    toggleCurrentSoundInPoint: (id:number)=>buildAction(TOGGLE_CURRENT_SOUND, `${id}`),
    toggleButtonOnPause: ()=>buildAction(TOGGLE_BUTTON_ON_PAUSE),
    setCurrentPoint: ()=>buildAction(SET_CURRENT_POINT),
};

export type LoopActions = ReturnType<InferActionTypes<typeof loopActions>>

