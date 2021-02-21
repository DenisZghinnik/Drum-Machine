import { buildAction, InferActionTypes } from "../../types/types";
import {Dispatch} from "react";
import {AnyAction} from "redux";
import {ApiResponse, Preset, presetApi} from "../../api/api";
import {loopActions} from "./loopReducer";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {faDiceD20} from "@fortawesome/free-solid-svg-icons";

const presetActionsName = {
    TOGGLE_SIDE: 'app/nav/TOGGLE_SIDE',
    TOGGLE_SELECT: 'app/nav/TOGGLE_SELECT',
    GET_PRESET_REQUEST: 'app/nav/GET_PRESET_REQUEST',
    GET_PRESET_SUCCESS: 'app/nav/GET_PRESET_SUCCESS',
    GET_PRESET_FAIL:'app/nav/GET_PRESET_FAIL',
}


export type presetItem = {
    name: string,
	sound: HTMLAudioElement|null,
	key: string,
	color: string,
    id: string
}
export type DrumsState = {
    isFetching: boolean,
    firstSideIsActive: boolean,
    showSelect: boolean,
    icon: IconDefinition,
    sideA: presetItem[]
    sideB: presetItem[]
};

const initialState: DrumsState = {
    isFetching: false,
    firstSideIsActive: true,
    showSelect: false,
    icon: faDiceD20,
    sideA: [{
        name: '',
        sound: null,
        key: '',
        color: '',
        id: ''
    }],
    sideB: [{
        name: '',
        sound: null,
        key: '',
        color: '',
        id: ''
    }]
};

export const presetReducer = (state = initialState, action:DrumsActions):DrumsState => {
    switch (action.type) {
        case presetActionsName.TOGGLE_SIDE:
            return {...state, firstSideIsActive: !state.firstSideIsActive}
        case presetActionsName.TOGGLE_SELECT:
            return {...state, showSelect: !state.showSelect}
        case presetActionsName.GET_PRESET_REQUEST:
            return {...state, isFetching: true}
        case presetActionsName.GET_PRESET_SUCCESS:
            return {...state, isFetching: false,
                icon: action.payload.icon,
                sideA: action.payload.preset.sideA,
                sideB: action.payload.preset.sideB}
        case presetActionsName.GET_PRESET_FAIL:
            console.log('Something went wrong')
            return {...state, isFetching: false}

        default:
            return state;
    };
};

export const presetActions = {
    toggleSide: ()=>buildAction(presetActionsName.TOGGLE_SIDE),
    togglePresetSelect: ()=>buildAction(presetActionsName.TOGGLE_SELECT),
    getPresetRequest: ()=>buildAction(presetActionsName.GET_PRESET_REQUEST),
    getPresetSuccess: (preset:Preset, icon: IconDefinition)=>
        buildAction(presetActionsName.GET_PRESET_SUCCESS, {preset, icon}),
    getPresetFail: ()=>buildAction(presetActionsName.GET_PRESET_FAIL)
};
export const getPreset = (presetId:number = 1) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(presetActions.getPresetRequest());
    try {
        const resData = await presetApi.getPreset(presetId);
        setTimeout(()=>{ // imitate api request
        if(resData.resultCode===0) {
            const data = resData as ApiResponse;
            const preset = data.preset;
            const icon = data.icon;
            const IButton = preset.sideA[0];
            dispatch(loopActions.setCurrentButton(IButton.id,
                IButton.sound as HTMLAudioElement,
                IButton.color,
                false))
            return dispatch(presetActions.getPresetSuccess(preset, icon))
        };


        return dispatch(presetActions.getPresetFail())
            }, 500)
    }catch (e){
        console.log(e)
    }
};


export type DrumsActions = ReturnType<InferActionTypes<typeof presetActions>>