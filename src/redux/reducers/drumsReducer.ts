import { buildAction, InferActionTypes } from "../../types/types";

export const TOGGLE_SIDE='app/nav/TOGGLE_SIDE';

export type DrumsState = {
    firstSideIsActive: boolean
};
const initialState = {
    firstSideIsActive: true
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