import {buildAction, InferActionTypes} from "../../types/types";


export const SET_BPM = 'app/loop/SET_BPM';
export const TOGGLE_LOOP='app/nav/TOGGLE_LOOP';
export const TOGGLE_PLAY = 'app/loop/TOGGLE_PLAY';

export type loopState = {
    loopModeIsActive: boolean,
    bpm: number,
    play: boolean
}

const initialState = {
    loopModeIsActive: false,
    bpm: 100,
    play: false
};

export const loopReducer = (state = initialState, action:LoopActions):loopState => {
    switch (action.type) {
        case SET_BPM:
            return {...state, bpm: action.payload};
        case TOGGLE_LOOP:
            return state.loopModeIsActive
                ? {...state, loopModeIsActive: false, play: false}
                : {...state, loopModeIsActive: true, play: true};
        case TOGGLE_PLAY:
            return {...state, play: !state.play};
        default:
            return state;
    };
};

export const loopActions = {
    setBPM: (bpm:number)=>buildAction(SET_BPM, bpm),
    toggleLoopMode: ()=>buildAction(TOGGLE_LOOP),
    togglePlay: ()=>buildAction(TOGGLE_PLAY)
};

export type LoopActions = ReturnType<InferActionTypes<typeof loopActions>>

