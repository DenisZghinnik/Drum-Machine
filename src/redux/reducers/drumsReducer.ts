import { buildAction, InferActionTypes } from "../../types/types";
import sideA from "../../presets/EDM/sideA/sideA";
import sideB from "../../presets/EDM/sideB/sideB";

export const initialActiveButton = {id: sideA[0].id, sound: sideA[0].sound, color: sideA[0].color, isPaused: false};

export const TOGGLE_SIDE='app/nav/TOGGLE_SIDE';

export type presetItem = {
    name: string,
	sound: HTMLAudioElement,
	key: string,
	color: string,
    id: string
}
export type DrumsState = {
    firstSideIsActive: boolean,
    sideA: presetItem[]
    sideB: presetItem[]
};

const initialState: DrumsState = {
    firstSideIsActive: true,
    sideA: sideA,
    sideB: sideB
};

export const drumsReducer = (state = initialState, action:DrumsActions):DrumsState => {
    switch (action.type) {
        case TOGGLE_SIDE:
            return {...state, firstSideIsActive: !state.firstSideIsActive}
        default:
            return state;
    };
};

export const drumsActions = {
    toggleSide: ()=>buildAction(TOGGLE_SIDE),
};

export type DrumsActions = ReturnType<InferActionTypes<typeof drumsActions>>