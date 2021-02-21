import axios from "axios";
import {presetItem} from "../redux/reducers/presetReducer";
import {faBolt,faDiceD20} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export type Preset ={
        sideA: presetItem[],
        sideB: presetItem[]
    }
export type ApiResponse = {
    preset: Preset,
    icon: IconDefinition
    resultCode:number
};

export const presetApi = {
    getPreset(presetId:number){
        //axios.get<ApiResponse>(`https://some-url.drumpad.com/api/1.0/preset/${presetId}`).then(res=>res.data);
        if(presetId===1) return {
            preset: {
                sideA: require('../presets/EDM/sideA/sideA').default,
                sideB: require('../presets/EDM/sideB/sideB').default
            },
            icon: faDiceD20,
            resultCode: 0
        };
        if(presetId===2) return {
            preset: {
                sideA: require('../presets/Electro/presetA/sideA').default,
                sideB: require('../presets/Electro/presetB/sideB').default,
            },
            icon: faBolt,
            resultCode: 0
        };
        return {resultCode: 1}
    }
}