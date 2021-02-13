import {buildAction, InferActionTypes} from "../../types/types";

export const TOGGLE_RECORD='app/nav/TOGGLE_RECORD';

export type navState = {
    firstSideIsActive: boolean,
    recordIsActive: boolean
}

const initialState = {
    firstSideIsActive: true,
    recordIsActive: false
};

export const navReducer = (state=initialState, action: NavActions): navState=>{
    switch (action.type){
        case TOGGLE_RECORD:
            return {...state, recordIsActive: !state.recordIsActive}
        default:
            return state
    };
};

export const navActions = {
    toggleRecord: ()=>buildAction(TOGGLE_RECORD)
};

export type NavActions = ReturnType<InferActionTypes<typeof navActions>>