import {RootState} from "../redux/reducers/rootReducer";


export const getNav = (state:RootState)=>state.nav;
export const getFirstIsActive = (state:RootState)=>state.drums.firstSideIsActive;
export const getLoopModeIsActive = (state:RootState)=>state.loop.loopModeIsActive;


export const getBpm = (state:RootState)=>state.loop.bpm;
export const getPlay = (state:RootState)=>state.loop.play;

