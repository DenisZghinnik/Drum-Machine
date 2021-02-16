import {RootState} from "../redux/reducers/rootReducer";


export const getNav = (state:RootState)=>state.nav;
export const getFirstIsActive = (state:RootState)=>state.drums.firstSideIsActive;
export const getLoopModeIsActive = (state:RootState)=>state.loop.loopModeIsActive;


export const getPresetA = (state:RootState)=>state.drums.sideA;
export const getPresetB = (state:RootState)=>state.drums.sideB;



export const getBpm = (state:RootState)=>state.loop.bpm;
export const getBpmPoints = (state:RootState)=>state.loop.bpmPoints;
export const getLoopPoints = (state:RootState)=>state.loop.loopPoints;
export const getCurrentActiveButton = (state:RootState)=>state.loop.currentActiveButton;
export const getButtonsOnPause = (state:RootState)=>state.loop.buttonsOnPause;
export const getPlay = (state:RootState)=>state.loop.play;

